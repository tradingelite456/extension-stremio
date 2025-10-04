const TMDB_API_KEY = "0a393ddecd4164cfd979c86dcaa3b9a6";
const TMDB_READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTM5M2RkZWNkNDE2NGNmZDk3OWM4NmRjYWEzYjlhNiIsIm5iZiI6MTc1OTYwMjUxMy44MjYsInN1YiI6IjY4ZTE2NzUxMWFlMmZmODljMWJkOTBhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rUCLFHfZMkvDdRY8_MR-PDeaLFOMcOVi7tICWPTkjU";

const tmdbCache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000;

async function fetchFromTMDB(endpoint) {
  const cacheKey = endpoint;
  const cached = tmdbCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const url = `https://api.themoviedb.org/3${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${TMDB_READ_ACCESS_TOKEN}`,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error(`TMDB API error: ${response.status} for ${url}`);
      return null;
    }

    const data = await response.json();
    tmdbCache.set(cacheKey, { data, timestamp: Date.now() });
    return data;
  } catch (error) {
    console.error('TMDB fetch error:', error);
    return null;
  }
}

async function getIMDBIdDetails(imdbId) {
  const data = await fetchFromTMDB(`/find/${imdbId}?external_source=imdb_id&language=fr-FR`);

  if (!data) return null;

  const movie = data.movie_results?.[0];
  const tv = data.tv_results?.[0];

  return movie || tv || null;
}

async function getMovieDetails(tmdbId) {
  const details = await fetchFromTMDB(`/movie/${tmdbId}?language=fr-FR&append_to_response=videos,credits,images`);
  return details;
}

async function getTVDetails(tmdbId) {
  const details = await fetchFromTMDB(`/tv/${tmdbId}?language=fr-FR&append_to_response=videos,credits,images`);
  return details;
}

function getImageUrl(path, size = 'original') {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

function extractTrailerUrl(videos) {
  if (!videos?.results) return null;

  const trailer = videos.results.find(v =>
    v.type === 'Trailer' &&
    (v.site === 'YouTube' || v.site === 'Vimeo')
  );

  if (!trailer) return null;

  if (trailer.site === 'YouTube') {
    return `https://www.youtube.com/watch?v=${trailer.key}`;
  } else if (trailer.site === 'Vimeo') {
    return `https://vimeo.com/${trailer.key}`;
  }

  return null;
}

function extractCast(credits, limit = 10) {
  if (!credits?.cast) return [];

  return credits.cast.slice(0, limit).map(person => ({
    name: person.name,
    character: person.character,
    profilePath: getImageUrl(person.profile_path, 'w185')
  }));
}

function findBestLogo(images) {
  if (!images?.logos) return null;

  const frenchLogo = images.logos.find(logo => logo.iso_639_1 === 'fr');
  const englishLogo = images.logos.find(logo => logo.iso_639_1 === 'en');
  const anyLogo = images.logos.find(logo => !logo.iso_639_1 || logo.iso_639_1 === null);

  const selectedLogo = frenchLogo || englishLogo || anyLogo || images.logos[0];

  return selectedLogo ? getImageUrl(selectedLogo.file_path, 'original') : null;
}

export async function enrichMetadataFromIMDB(imdbId) {
  try {
    const basicInfo = await getIMDBIdDetails(imdbId);

    if (!basicInfo) {
      console.log(`No TMDB data found for IMDB ID: ${imdbId}`);
      return null;
    }

    const isMovie = !!basicInfo.title;
    const tmdbId = basicInfo.id;

    const details = isMovie
      ? await getMovieDetails(tmdbId)
      : await getTVDetails(tmdbId);

    if (!details) {
      console.log(`Could not fetch detailed info for TMDB ID: ${tmdbId}`);
      return null;
    }

    const metadata = {
      tmdbId: details.id,
      imdbId: imdbId,
      type: isMovie ? 'movie' : 'series',
      name: isMovie ? details.title : details.name,
      originalName: isMovie ? details.original_title : details.original_name,
      description: details.overview || '',
      poster: getImageUrl(details.poster_path, 'w500'),
      posterOriginal: getImageUrl(details.poster_path, 'original'),
      background: getImageUrl(details.backdrop_path, 'original'),
      logo: findBestLogo(details.images),
      genres: details.genres?.map(g => g.name) || [],
      releaseInfo: isMovie
        ? details.release_date?.split('-')[0]
        : `${details.first_air_date?.split('-')[0]}${details.in_production ? '-' : `-${details.last_air_date?.split('-')[0]}`}`,
      releaseDate: isMovie ? details.release_date : details.first_air_date,
      imdbRating: details.vote_average ? details.vote_average.toFixed(1) : null,
      voteCount: details.vote_count,
      runtime: isMovie ? details.runtime : details.episode_run_time?.[0],
      status: details.status,
      originalLanguage: details.original_language,
      cast: extractCast(details.credits, 10),
      director: isMovie
        ? details.credits?.crew?.find(c => c.job === 'Director')?.name
        : details.created_by?.[0]?.name,
      trailer: extractTrailerUrl(details.videos),
      homepage: details.homepage,
      popularity: details.popularity,
      tagline: details.tagline,
      numberOfSeasons: !isMovie ? details.number_of_seasons : undefined,
      numberOfEpisodes: !isMovie ? details.number_of_episodes : undefined,
      networks: !isMovie ? details.networks?.map(n => n.name) : undefined,
      productionCompanies: details.production_companies?.map(c => c.name) || []
    };

    console.log(`Successfully enriched metadata for ${imdbId}: ${metadata.name}`);
    return metadata;

  } catch (error) {
    console.error(`Error enriching metadata for ${imdbId}:`, error);
    return null;
  }
}

export async function getSeasonDetails(tmdbId, seasonNumber) {
  try {
    const data = await fetchFromTMDB(`/tv/${tmdbId}/season/${seasonNumber}?language=fr-FR`);

    if (!data) return null;

    return {
      seasonNumber: data.season_number,
      name: data.name,
      overview: data.overview,
      poster: getImageUrl(data.poster_path, 'w500'),
      airDate: data.air_date,
      episodes: data.episodes?.map(ep => ({
        episodeNumber: ep.episode_number,
        name: ep.name,
        overview: ep.overview,
        airDate: ep.air_date,
        stillPath: getImageUrl(ep.still_path, 'w300'),
        runtime: ep.runtime,
        voteAverage: ep.vote_average
      })) || []
    };
  } catch (error) {
    console.error(`Error fetching season ${seasonNumber} for TMDB ID ${tmdbId}:`, error);
    return null;
  }
}

export async function searchByTitle(title, type = 'multi') {
  try {
    const endpoint = type === 'multi'
      ? `/search/multi?query=${encodeURIComponent(title)}&language=fr-FR&page=1`
      : type === 'movie'
        ? `/search/movie?query=${encodeURIComponent(title)}&language=fr-FR&page=1`
        : `/search/tv?query=${encodeURIComponent(title)}&language=fr-FR&page=1`;

    const data = await fetchFromTMDB(endpoint);

    if (!data?.results) return [];

    return data.results.slice(0, 10).map(item => ({
      tmdbId: item.id,
      type: item.media_type || type,
      name: item.title || item.name,
      originalName: item.original_title || item.original_name,
      overview: item.overview,
      poster: getImageUrl(item.poster_path, 'w500'),
      backdrop: getImageUrl(item.backdrop_path, 'original'),
      releaseDate: item.release_date || item.first_air_date,
      voteAverage: item.vote_average,
      popularity: item.popularity
    }));
  } catch (error) {
    console.error('Error searching TMDB:', error);
    return [];
  }
}
