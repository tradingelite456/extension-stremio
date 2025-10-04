// api/router.js

// === Helpers ===
function sendJSON(res, obj, status = 200) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.statusCode = status;
  res.end(JSON.stringify(obj));
}

function stripJson(s) {
  return s.replace(/\.json$/, "");
}

function fetchPosterFromIMDb(id) {
  return `https://images.metahub.space/poster/small/${id}/img`;
}

// === Catalogue ===
const catalogData = [
  {
    id: "ttseries_villa",
    type: "series",
    name: "La Villa des coeurs brisés",
    poster: "https://photos.tf1.fr/217/289/program-card-coaching-emine-maissanne-ep21-1a6928-eb1200-0@3x.jpg",
    background: "https://images1.persgroep.net/rcs/-zRbIHTq5GfByBRo528B0boVfxY/diocontent/260937823/_fitwidth/1400?appId=038a353bad43ac27fd436dc5419c256b&quality=0.8&format=webp",
    logo: "https://photos.tf1.fr/220/110/logo-programme-la-villa-2025-0e5a1d-72c6f5-0@3x.png",  
    description: "Ils sont plébiscités par le public pour avoir vécu des histoires d'amour qui se sont mal terminées... Nous allons les aider à reprendre confiance en eux et leur donner toutes les clés pour séduire, afin qu'ils puissent, enfin, trouver le GRAND AMOUR !",
    genres: ["Reality", "Drama"],
    releaseInfo: "2025",
    imdbRating: "6.5",
    // Episodes organisés par saison
    episodes: {
      10: [

           {
          id: "ttseries_villa:10:1",
          title: "Épisode 1",
          season: 10,
          episode: 1,
          overview: "Épisode 1 de la saison 10",
          released: "2025-08-10T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-01-du-11-aout-2025-90165525-1755069694-b9ffe9-36fe10-0@1x.jpg",
          stream: "https://preeminent-zuccutto-7d84c8.netlify.app/S10E1/S10E1.m3u8"
        },
            {
          id: "ttseries_villa:10:2",
          title: "Épisode 2",
          season: 10,
          episode: 2,
          overview: "Épisode 2 de la saison 10",
          released: "2025-08-11T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-02-du-11-aout-2025-23214497-1755069707-05f308-86b4ce-0@1x.jpg",
          stream: "https://velvety-rugelach-5ae261.netlify.app/S10E2.m3u8"
        },
        {
          id: "ttseries_villa:10:3",
          title: "Épisode 3",
          season: 10,
          episode: 3,
          overview: "Épisode 3 de la saison 10",
          released: "2025-08-12T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-03-du-12-aout-2025-11366497-1755070020-7c51f2-a7e98d-0@2x.jpg",
          stream: "https://splendorous-taffy-ba0b65.netlify.app/S10E3.m3u8"
        },

           {
          id: "ttseries_villa:10:4",
          title: "Épisode 4",
          season: 10,
          episode: 4,
          overview: "Épisode 4 de la saison 10",
          released: "2025-08-13T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-04-du-13-aout-2025-60236528-1755070104-e37445-5ba6af-0@1x.jpg",
          stream: "https://cheery-sawine-575a8f.netlify.app/S10E4.m3u8"
        },
        {
          id: "ttseries_villa:10:5",
          title: "Épisode 5",
          season: 10,
          episode: 5,
          overview: "Épisode 5 de la saison 10",
          released: "2025-08-14T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-05-du-14-aout-2025-53256673-1755151264-55e317-632fcf-0@3x.jpg",
          stream: "https://zesty-croquembouche-215d40.netlify.app/S10E5.m3u8"
        },

          {
          id: "ttseries_villa:10:6",
          title: "Épisode 6",
          season: 10,
          episode: 6,
          overview: "Épisode 6 de la saison 10",
          released: "2025-08-15T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-06-du-15-aout-2025-75913350-1755498259-3e6008-c85024-0@1x.webp",
          stream: "https://cool-kitsune-85a095.netlify.app/S10E6.m3u8"
        },
        {
          id: "ttseries_villa:10:7",
          title: "Épisode 7",
          season: 10,
          episode: 7,
          overview: "Épisode 7 de la saison 10",
          released: "2025-08-18T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-07-du-18-aout-2025-31199021-1755498284-9e1cc7-c86ce7-0@1x.jpg",
          stream: "https://animated-blini-0b7203.netlify.app/S10E7.m3u8"
        },
            {
          id: "ttseries_villa:10:8",
          title: "Épisode 8",
          season: 10,
          episode: 8,
          overview: "Épisode 8 de la saison 10",
          released: "2025-08-19T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-08-du-19-aout-2025-58700996-1755589590-e62065-87a548-0@1x.webp",
          stream: "https://polite-liger-ac90a3.netlify.app/S10E8.m3u8"
        },
        {
          id: "ttseries_villa:10:9",
          title: "Épisode 9",
          season: 10,
          episode: 9,
          overview: "Épisode 9 de la saison 10",
          released: "2025-08-20T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-09-du-20-aout-2025-49388030-1755687532-735302-189899-0@1x.jpg",
          stream: "https://rococo-fenglisu-db2b7e.netlify.app/S10E9.m3u8"
        },

          {
          id: "ttseries_villa:10:10",
          title: "Épisode 10",
          season: 10,
          episode: 10,
          overview: "Épisode 10 de la saison 10",
          released: "2025-08-21T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-10-du-21-aout-2025-71447607-1755760241-68f4ed-0c1989-0@1x.jpg",
          stream: "https://benevolent-beignet-f0dfab.netlify.app/S10E10.m3u8"
        },
        {
          id: "ttseries_villa:10:11",
          title: "Épisode 11",
          season: 10,
          episode: 11,
          overview: "Épisode 11 de la saison 10",
          released: "2025-08-22T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-11-du-22-aout-2025-07016282-1755847088-3dd892-aefad7-0@1x.webp",
          stream: "https://neon-pony-05b704.netlify.app/S10E11.m3u8"
        },

         {
          id: "ttseries_villa:10:12",
          title: "Épisode 12",
          season: 10,
          episode: 12,
          overview: "Épisode 12 de la saison 10",
          released: "2025-08-25T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-12-du-25-aout-2025-79395394-1756192375-8bad02-591a5d-0@1x.jpg",
          stream: "https://lucky-cassata-616d0c.netlify.app/S10E12.m3u8"
        },
        {
          id: "ttseries_villa:10:13",
          title: "Épisode 13",
          season: 10,
          episode: 13,
          overview: "Épisode 13 de la saison 10",
          released: "2025-08-26T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-13-du-26-aout-2025-07980971-1756188319-65a87f-048d64-0@1x.webp",
          stream: "https://illustrious-rolypoly-4f16b8.netlify.app/S10E13.m3u8"
        },
      {
          id: "ttseries_villa:10:14",
          title: "Épisode 14",
          season: 10,
          episode: 14,
          overview: "Épisode 14 de la saison 10",
          released: "2025-08-27T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/548/308/la-villa-des-coeurs-brises-saison-10-episode-14-du-27-aout-2025-47599360-1756282917-a88048-ff31fb-0@3x.jpg",
          stream: "https://magenta-trifle-c3506b.netlify.app/S10E14.m3u8"
        },
        {
          id: "ttseries_villa:10:15",
          title: "Épisode 15",
          season: 10,
          episode: 15,
          overview: "Épisode 15 de la saison 10",
          released: "2025-08-28T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-15-du-28-aout-2025-64115472-1756367686-9c703c-0872da-0@1x.webp",
          stream: "https://timely-lolly-490ca8.netlify.app/S10E15.m3u8"
        },

        
       {
          id: "ttseries_villa:10:16",
          title: "Épisode 16",
          season: 10,
          episode: 16,
          overview: "Épisode 16 de la saison 10",
          released: "2025-08-29T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-16-du-29-aout-2025-71089926-1756454557-a189cc-85d6e8-0@2x.webp",
          stream: "https://subtle-beignet-21581a.netlify.app/S10E16.m3u8"
        },
        {
          id: "ttseries_villa:10:17",
          title: "Épisode 17",
          season: 10,
          episode: 17,
          overview: "Épisode 17 de la saison 10",
          released: "2025-09-01T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-17-du-1-septembre-2025-79086667-1756712108-719d4d-8d9ef6-0@1x.jpg",
          stream: "https://superlative-cupcake-a669e2.netlify.app/S10E17.m3u8"
        },
        
          {
          id: "ttseries_villa:10:18",
          title: "Épisode 18",
          season: 10,
          episode: 18,
          overview: "Épisode 18 de la saison 10",
          released: "2025-09-02T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-18-du-2-septembre-2025-68780722-1756799320-8eb1c1-7da9b1-0@3x.jpg",
          stream: "https://melodious-malasada-dc46b9.netlify.app/S10E18.m3u8"
        },
        {
          id: "ttseries_villa:10:19",
          title: "Épisode 19",
          season: 10,
          episode: 19,
          overview: "Épisode 19 de la saison 10",
          released: "2025-09-03T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/la-villa-des-coeurs-brises-saison-10-episode-19-du-3-septembre-2025-45502972-1756884112-d56387-e0bfa0-0@1x.jpg",
          stream: "https://timely-truffle-6ae782.netlify.app/S10E19.m3u8"
        },
        
        {
          id: "ttseries_villa:10:20",
          title: "Épisode 20",
          season: 10,
          episode: 20,
          overview: "Épisode 20 de la saison 10",
          released: "2025-09-04T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-20-du-4-septembre-2025-22517739-1757057517-be7616-60b660-0@1x.jpg",
          stream: "https://euphonious-sunburst-bb4226.netlify.app/S10E20.m3u8"
        },
        {
          id: "ttseries_villa:10:21",
          title: "Épisode 21",
          season: 10,
          episode: 21,
          overview: "Épisode 21 de la saison 10",
          released: "2025-09-05T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/la-villa-des-coeurs-brises-saison-10-episode-21-du-5-septembre-2025-16143143-1757057560-04aab9-2ff192-0@1x.webp",
          stream: "https://dulcet-granita-d67f95.netlify.app/S10E21.m3u8"
        },
        
        {
          id: "ttseries_villa:10:22",
          title: "Épisode 22",
          season: 10,
          episode: 22,
          overview: "Épisode 22 de la saison 10",
          released: "2025-09-08T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-18-du-2-septembre-2025-31586572-1756106139-48428a-e6db9f-0@3x.jpg",
          stream: "https://dainty-bienenstitch-92bfd0.netlify.app/Video.m3u8"
        },
        {
          id: "ttseries_villa:10:23",
          title: "Épisode 23",
          season: 10,
          episode: 23,
          overview: "Épisode 23 de la saison 10",
          released: "2025-09-09T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/1200/720/avant-premiere-la-villa-saison-10-episode-23-du-9-septembre-2025-78936117-1756712122-39e62b-3fa70b-0@1x.jpg",
          stream: "https://super-creponne-012bcc.netlify.app/S10E23.m3u8"
        },
        {
          id: "ttseries_villa:10:24",
          title: "Épisode 24",
          season: 10,
          episode: 24,
          overview: "Épisode 24 de la saison 10",
          released: "2025-09-10T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-24-du-10-septembre-2025-04968679-1757397549-d001c6-d4b157-0@3x.jpg",
          stream: "https://chic-twilight-494a45.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:25",
          title: "Épisode 25",
          season: 10,
          episode: 25,
          overview: "Épisode 25 de la saison 10",
          released: "2025-09-11T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-25-du-11-septembre-2025-62314241-1757397519-942251-12921b-0@3x.webp",
          stream: "https://stately-youtiao-b39da3.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:26",
          title: "Épisode 26",
          season: 10,
          episode: 26,
          overview: "Épisode 26 de la saison 10",
          released: "2025-09-12T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-26-du-12-septembre-2025-35469899-1757402771-a96be3-6e890b-0@3x.webp",
          stream: "https://stirring-marshmallow-f14089.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:27",
          title: "Épisode 27",
          season: 10,
          episode: 27,
          overview: "Épisode 27 de la saison 10",
          released: "2025-09-13T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/la-villa-des-coeurs-brises-saison-10-episode-27-du-15-septembre-2025-87848099-1757958813-57d813-8af2ca-0@3x.jpg",
          stream: "https://elegant-syrniki-d416bb.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:28",
          title: "Épisode 28",
          season: 10,
          episode: 28,
          overview: "Épisode 28 de la saison 10",
          released: "2025-09-16T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/la-villa-des-coeurs-brises-saison-10-episode-28-du-16-septembre-2025-81396062-1758033387-f4c788-290e4a-0@3x.webp",
          stream: "https://stellular-nasturtium-349902.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_villa:10:29",
          title: "Épisode 29",
          season: 10,
          episode: 29,
          overview: "Épisode 29 de la saison 10",
          released: "2025-09-17T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-29-du-17-septembre-2025-80793336-1757668511-0e0301-84b7f6-0@3x.webp",
          stream: "https://curious-cupcake-aa33e2.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:30",
          title: "Épisode 30",
          season: 10,
          episode: 30,
          overview: "Épisode 30 de la saison 10",
          released: "2025-09-18T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-30-du-18-septembre-2025-08894233-1757921658-c4fd52-037537-0@3x.webp",
          stream: "https://darling-tapioca-723401.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:31",
          title: "Épisode 31",
          season: 10,
          episode: 31,
          overview: "Épisode 31 de la saison 10",
          released: "2025-09-19T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-31-du-19-septembre-2025-37152138-1757397339-6e5b23-ac4083-0@3x.jpg",
          stream: "https://beautiful-genie-f83a9d.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:32",
          title: "Épisode 32",
          season: 10,
          episode: 32,
          overview: "Épisode 32 de la saison 10",
          released: "2025-09-20T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-32-du-22-septembre-2025-40038583-1757905813-6121f6-213eb1-0@3x.jpg",
          stream: "https://monumental-dodol-df2c20.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:33",
          title: "Épisode 33",
          season: 10,
          episode: 33,
          overview: "Épisode 33 de la saison 10",
          released: "2025-09-21T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-33-du-23-septembre-2025-31902648-1757905784-d9c4f0-d1adf7-0@3x.jpg",
          stream: "https://quiet-capybara-50244f.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:34",
          title: "Épisode 34",
          season: 10,
          episode: 34,
          overview: "Épisode 34 de la saison 10",
          released: "2025-09-24T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-34-du-24-septembre-2025-81035680-1758111918-9e466a-49b2be-0@3x.jpg",
          stream: "https://phenomenal-dodol-7148d4.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:35",
          title: "Épisode 35",
          season: 10,
          episode: 35,
          overview: "Épisode 35 de la saison 10",
          released: "2025-09-25T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-35-du-25-septembre-2025-90412389-1758111884-132788-26a8a2-0@3x.jpg",
          stream: "https://tangerine-sunburst-795d8d.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:36",
          title: "Épisode 36",
          season: 10,
          episode: 36,
          overview: "Épisode 36 de la saison 10",
          released: "2025-09-26T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-36-du-26-septembre-2025-79545661-1758111871-0a62a9-2f3d38-0@3x.jpg",
          stream: "https://heartfelt-trifle-bf3b55.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:37",
          title: "Épisode 37",
          season: 10,
          episode: 37,
          overview: "Épisode 37 de la saison 10",
          released: "2025-09-27T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-37-du-29-septembre-2025-59418831-1758702852-aee04b-4c0021-0@3x.jpg",
          stream: "https://admirable-pony-f170c2.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:38",
          title: "Épisode 38",
          season: 10,
          episode: 38,
          overview: "Épisode 38 de la saison 10",
          released: "2025-09-28T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-38-du-30-septembre-2025-20373680-1758702827-85fe2d-0092cf-0@3x.jpg",
          stream: "https://fantastic-treacle-85dcb0.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:39",
          title: "Épisode 39",
          season: 10,
          episode: 39,
          overview: "Épisode 39 de la saison 10",
          released: "2025-09-30T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-39-du-1-octobre-2025-38599584-1758807587-14c0f0-b33bbc-0@3x.jpg",
          stream: "https://eclectic-jalebi-0548b9.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:40",
          title: "Épisode 40",
          season: 10,
          episode: 40,
          overview: "Épisode 40 de la saison 10",
          released: "2025-10-01T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-40-du-2-octobre-2025-62793645-1759129357-87317b-416f94-0@3x.jpg",
          stream: "https://cool-queijadas-bd6520.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:41",
          title: "Épisode 41",
          season: 10,
          episode: 41,
          overview: "Épisode 41 de la saison 10",
          released: "2025-10-02T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-41-du-3-octobre-2025-28133267-1759129375-3b484e-225e60-0@3x.jpg",
          stream: "https://polite-pasca-75f801.netlify.app/master.m3u8"
        },
         {
          id: "ttseries_villa:10:42",
          title: "Épisode 42",
          season: 10,
          episode: 42,
          overview: "Épisode 42 de la saison 10",
          released: "2025-10-04T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/avant-premiere-la-villa-saison-10-episode-42-du-6-octobre-2025-88848561-1759129401-646d81-3e1a7e-0@3x.jpg",
          stream: "https://celadon-arithmetic-e60bd6.netlify.app/master.m3u8"
        }
      ]
    }
  },

 {
    id: "ttseries_jlc8",
    type: "series",
    name: "JLC Family Seule",
    poster: "https://photos.tf1.fr/217/289/program-card-jlc-s08-ep-2-1-46699f-c8e84a-0@3x.jpg",
    background: "https://photos.tf1.fr/1920/1080/background-ott-jlc-family-seule-67fe2d-a97444-0@3x.jpg",
    logo: "https://photos.tf1.fr/220/110/logo-programme-jlc-family-seule-1c7d6e-bb5be1-0@3x.png",  
    description: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant de sa vie personnelle. Si elle a l'habitude que sa vie soit sans cesse commentée et que son quotidien soit millimétré, actuellement ce qui la préoccupe profondément, c'est de savoir s'il reste une chance pour son couple avec Laurent ?",
    genres: ["Divertissement"],
    releaseInfo: "2025",
    // Episodes organisés par saison
    episodes: {
      8: [

           {
          id: "ttseries_jlc8:8:0",
          title: "Teaser Saison 8",
          season: 8,
          episode: 0,
          overview: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant de sa vie personnelle.",
          released: "2025-09-08T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/950/534/les-premieres-images-de-la-saison-12d9e8-c34c7e-0@3x.jpg",
          stream: "https://effulgent-pothos-877322.netlify.app/S8E0.m3u8"
        },
        {
          id: "ttseries_jlc8:8:1",
          title: "Episode 1",
          season: 8,
          episode: 1,
          overview: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant de sa vie.",
          released: "2025-09-15T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/2107706_jlcseule_vignettereplay_ep01-a16271-830f1c-0@3x.jpg",
          stream: "https://tubular-bunny-a4e45f.netlify.app/master.m3u8"
        },
        {
          id: "ttseries_jlc8:8:2",
          title: "Episode 2",
          season: 8,
          episode: 2,
          overview: "À l'approche de ses 33 ans, Jazz se trouve à un carrefour déterminant.",
          released: "2025-09-16T00:00:00.000Z",
          thumbnail: "https://photos.tf1.fr/330/186/2107707_jlcseule_vignettereplay_ep02-7afc7b-b4fa26-0@3x.jpg",
          stream: "https://glistening-chaja-cf55c6.netlify.app/master.m3u8"
        }
      ]
    }
  },

  // === NETFLIX ===
  {
    id: "tt15398776",
    type: "movie",
    name: "Oppenheimer",
    poster: fetchPosterFromIMDb("tt15398776"),
    background: "https://4kwallpapers.com/images/wallpapers/oppenheimer-8k-2023-3840x2160-12220.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Oppenheimer_Movie_Logo_2023.png",
    description: "L'histoire du physicien J. Robert Oppenheimer et de son rôle dans le développement de la bombe atomique.",
    genres: ["Biography", "Drama", "History"],
    releaseInfo: "2023",
    imdbRating: "8.3",
    stream: "https://pulse.topstrime.online/movie/872585/82nb0j/master.m3u8",
    catalog: "netflix"
  },
  {
    id: "tt1190634",
    type: "series",
    name: "The Boys",
    poster: fetchPosterFromIMDb("tt1190634"),
    background: fetchPosterFromIMDb("tt1190634"),
    description: "Une équipe de justiciers qui entreprend d'abattre des super-héros corrompus qui abusent de leurs pouvoirs.",
    genres: ["Action", "Comedy", "Crime"],
    releaseInfo: "2019-",
    imdbRating: "8.7",
    catalog: "netflix",
    episodes: {
      1: [
        {
          id: "tt1190634:1:1",
          title: "The Name of the Game",
          season: 1,
          episode: 1,
          overview: "Premier épisode de la saison 1",
          released: "2019-07-26T00:00:00.000Z",
          thumbnail: fetchPosterFromIMDb("tt1190634"),
          stream: "https://pulse.topstrime.online/tv/76479/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === AMAZON PRIME VIDEO ===
  {
    id: "tt1877830",
    type: "movie",
    name: "The Batman",
    poster: fetchPosterFromIMDb("tt1877830"),
    background: fetchPosterFromIMDb("tt1877830"),
    description: "Lorsque le Riddler, un tueur sadique, commence à assassiner des personnalités politiques clés de Gotham, Batman est contraint d'enquêter sur la corruption de la ville.",
    genres: ["Action", "Crime", "Drama"],
    releaseInfo: "2022",
    imdbRating: "7.8",
    stream: "https://pulse.topstrime.online/movie/414906/82nb0j/master.m3u8",
    catalog: "prime"
  },
  {
    id: "tt0944947",
    type: "series",
    name: "Game of Thrones",
    poster: fetchPosterFromIMDb("tt0944947"),
    background: fetchPosterFromIMDb("tt0944947"),
    description: "Neuf familles nobles se battent pour le contrôle des terres mythiques de Westeros, tandis qu'un ancien ennemi revient après avoir été endormi pendant des millénaires.",
    genres: ["Action", "Adventure", "Drama"],
    releaseInfo: "2011-2019",
    imdbRating: "9.2",
    catalog: "prime",
    episodes: {
      1: [
        {
          id: "tt0944947:1:1",
          title: "Winter Is Coming",
          season: 1,
          episode: 1,
          overview: "Eddard Stark est déchiré entre sa famille et un vieil ami lorsqu'on lui demande de servir à la cour du roi Robert Baratheon.",
          released: "2011-04-17T00:00:00.000Z",
          thumbnail: fetchPosterFromIMDb("tt0944947"),
          stream: "https://pulse.topstrime.online/tv/1399/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === DISNEY+ ===
  {
    id: "tt10872600",
    type: "movie",
    name: "Spider-Man: No Way Home",
    poster: fetchPosterFromIMDb("tt10872600"),
    background: fetchPosterFromIMDb("tt10872600"),
    description: "Avec son identité révélée, Peter Parker demande l'aide de Doctor Strange pour restaurer son secret.",
    genres: ["Action", "Adventure", "Fantasy"],
    releaseInfo: "2021",
    imdbRating: "8.2",
    stream: "https://pulse.topstrime.online/movie/634649/82nb0j/master.m3u8",
    catalog: "disney"
  },
  {
    id: "tt9140560",
    type: "series",
    name: "WandaVision",
    poster: fetchPosterFromIMDb("tt9140560"),
    background: fetchPosterFromIMDb("tt9140560"),
    description: "Série mêlant sitcoms classiques et univers cinématographique Marvel dans laquelle Wanda Maximoff et Vision vivent une vie de banlieue idyllique.",
    genres: ["Action", "Comedy", "Drama"],
    releaseInfo: "2021",
    imdbRating: "7.9",
    catalog: "disney",
    episodes: {
      1: [
        {
          id: "tt9140560:1:1",
          title: "Filmed Before a Live Studio Audience",
          season: 1,
          episode: 1,
          overview: "Wanda et Vision s'installent dans leur nouvelle maison.",
          released: "2021-01-15T00:00:00.000Z",
          thumbnail: fetchPosterFromIMDb("tt9140560"),
          stream: "https://pulse.topstrime.online/tv/85271/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === APPLE TV+ ===
  {
    id: "tt6723592",
    type: "movie",
    name: "Tenet",
    poster: fetchPosterFromIMDb("tt6723592"),
    background: fetchPosterFromIMDb("tt6723592"),
    description: "Un agent secret reçoit une mission mystérieuse impliquant l'inversion temporelle pour prévenir la Troisième Guerre mondiale.",
    genres: ["Action", "Sci-Fi", "Thriller"],
    releaseInfo: "2020",
    imdbRating: "7.3",
    stream: "https://pulse.topstrime.online/movie/577922/82nb0j/master.m3u8",
    catalog: "appletv"
  },
  {
    id: "tt10234724",
    type: "series",
    name: "Ted Lasso",
    poster: fetchPosterFromIMDb("tt10234724"),
    background: fetchPosterFromIMDb("tt10234724"),
    description: "Un entraîneur de football américain est embauché pour diriger une équipe de football britannique, malgré son absence totale d'expérience.",
    genres: ["Comedy", "Drama", "Sport"],
    releaseInfo: "2020-2023",
    imdbRating: "8.8",
    catalog: "appletv",
    episodes: {
      1: [
        {
          id: "tt10234724:1:1",
          title: "Pilot",
          season: 1,
          episode: 1,
          overview: "Ted Lasso, un entraîneur de football américain, arrive en Angleterre pour diriger un club de football.",
          released: "2020-08-14T00:00:00.000Z",
          thumbnail: fetchPosterFromIMDb("tt10234724"),
          stream: "https://pulse.topstrime.online/tv/97546/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === CANAL+ ===
  {
    id: "tt1160419",
    type: "movie",
    name: "Dune",
    poster: fetchPosterFromIMDb("tt1160419"),
    background: fetchPosterFromIMDb("tt1160419"),
    description: "Paul Atreides, jeune homme aussi doué que brillant, est destiné à connaître un destin hors du commun.",
    genres: ["Action", "Adventure", "Drama"],
    releaseInfo: "2021",
    imdbRating: "8.0",
    stream: "https://pulse.topstrime.online/movie/438631/82nb0j/master.m3u8",
    catalog: "canal"
  },
  {
    id: "tt2861424",
    type: "series",
    name: "Rick and Morty",
    poster: fetchPosterFromIMDb("tt2861424"),
    background: fetchPosterFromIMDb("tt2861424"),
    description: "Un génie alcoolique et son petit-fils pas très futé embarquent dans des aventures inter-dimensionnelles.",
    genres: ["Animation", "Adventure", "Comedy"],
    releaseInfo: "2013-",
    imdbRating: "9.1",
    catalog: "canal",
    episodes: {
      1: [
        {
          id: "tt2861424:1:1",
          title: "Pilot",
          season: 1,
          episode: 1,
          overview: "Rick emmène Morty dans une aventure inter-dimensionnelle.",
          released: "2013-12-02T00:00:00.000Z",
          thumbnail: fetchPosterFromIMDb("tt2861424"),
          stream: "https://pulse.topstrime.online/tv/60625/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  },

  // === HBO MAX ===
  {
    id: "tt1375666",
    type: "movie",
    name: "Inception",
    poster: fetchPosterFromIMDb("tt1375666"),
    background: fetchPosterFromIMDb("tt1375666"),
    description: "Un voleur qui s'introduit dans les rêves pour voler des secrets se voit confier la mission inverse : implanter une idée.",
    genres: ["Action", "Sci-Fi", "Thriller"],
    releaseInfo: "2010",
    imdbRating: "8.8",
    stream: "https://pulse.topstrime.online/movie/27205/82nb0j/master.m3u8",
    catalog: "hbo"
  },
  {
    id: "tt0903747",
    type: "series",
    name: "Breaking Bad",
    poster: fetchPosterFromIMDb("tt0903747"),
    background: fetchPosterFromIMDb("tt0903747"),
    description: "Un professeur de chimie atteint d'un cancer se lance dans la fabrication de méthamphétamine pour assurer l'avenir financier de sa famille.",
    genres: ["Crime", "Drama", "Thriller"],
    releaseInfo: "2008-2013",
    imdbRating: "9.5",
    catalog: "hbo",
    episodes: {
      1: [
        {
          id: "tt0903747:1:1",
          title: "Pilot",
          season: 1,
          episode: 1,
          overview: "Walter White, professeur de chimie, apprend qu'il a un cancer du poumon.",
          released: "2008-01-20T00:00:00.000Z",
          thumbnail: fetchPosterFromIMDb("tt0903747"),
          stream: "https://pulse.topstrime.online/tv/1396/1/1/82nb0j/master.m3u8"
        }
      ]
    }
  }

];

// === Manifest ===
const manifest = {
  id: "community.directhls",
  version: "1.0.0",
  catalogs: [
    {
      type: "series",
      id: "directhls_series",
      name: "Télé-Réalité"
    },
    {
      type: "movie",
      id: "netflix_movies",
      name: "Netflix Films"
    },
    {
      type: "series",
      id: "netflix_series",
      name: "Netflix Séries"
    },
    {
      type: "movie",
      id: "prime_movies",
      name: "Amazon Prime Films"
    },
    {
      type: "series",
      id: "prime_series",
      name: "Amazon Prime Séries"
    },
    {
      type: "movie",
      id: "disney_movies",
      name: "Disney+ Films"
    },
    {
      type: "series",
      id: "disney_series",
      name: "Disney+ Séries"
    },
    {
      type: "movie",
      id: "appletv_movies",
      name: "Apple TV+ Films"
    },
    {
      type: "series",
      id: "appletv_series",
      name: "Apple TV+ Séries"
    },
    {
      type: "movie",
      id: "canal_movies",
      name: "Canal+ Films"
    },
    {
      type: "series",
      id: "canal_series",
      name: "Canal+ Séries"
    },
    {
      type: "movie",
      id: "hbo_movies",
      name: "HBO Max Films"
    },
    {
      type: "series",
      id: "hbo_series",
      name: "HBO Max Séries"
    }
  ],
  resources: [
    "catalog",
    "meta",
    "stream"
  ],
  types: ["movie", "series"],
  name: "Direct HLS Addon",
  description: "Streaming direct via HLS pour films et séries",
  idPrefixes: ["tt"]
};

// === Handler ===
export default function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  console.log('=== REQUEST DEBUG ===');
  console.log('Full URL:', req.url);
  console.log('Pathname:', pathname);
  console.log('Parts:', parts);
  console.log('Method:', req.method);

  // Route: /manifest.json
  if (pathname === '/manifest.json' || (parts.length === 1 && parts[0] === 'manifest.json')) {
    console.log('Serving manifest');
    return sendJSON(res, manifest);
  }

  // Route: /catalog/:type/:catalogId.json
  if (parts[0] === 'catalog' && parts.length >= 3) {
    const catalogType = parts[1];
    const catalogId = stripJson(parts[2]);

    console.log('Catalog request - Type:', catalogType, 'ID:', catalogId);

    let metas = [];

    if (catalogId === 'directhls_series') {
      metas = catalogData
        .filter(item => item.type === 'series' && !item.catalog)
        .map(item => ({
          id: item.id,
          type: item.type,
          name: item.name,
          poster: item.poster,
          posterShape: "regular",
          description: item.description,
          genres: item.genres,
          background: item.background,
          logo: item.logo,
          releaseInfo: item.releaseInfo,
          imdbRating: item.imdbRating
        }));
    } else if (catalogId.includes('_movies')) {
      const platform = catalogId.replace('_movies', '');
      metas = catalogData
        .filter(item => item.type === 'movie' && item.catalog === platform)
        .map(item => ({
          id: item.id,
          type: item.type,
          name: item.name,
          poster: item.poster,
          posterShape: "regular",
          description: item.description,
          genres: item.genres,
          background: item.background,
          releaseInfo: item.releaseInfo,
          imdbRating: item.imdbRating
        }));
    } else if (catalogId.includes('_series')) {
      const platform = catalogId.replace('_series', '');
      metas = catalogData
        .filter(item => item.type === 'series' && item.catalog === platform)
        .map(item => ({
          id: item.id,
          type: item.type,
          name: item.name,
          poster: item.poster,
          posterShape: "regular",
          description: item.description,
          genres: item.genres,
          background: item.background,
          releaseInfo: item.releaseInfo,
          imdbRating: item.imdbRating
        }));
    }

    console.log('Sending catalog with', metas.length, 'items');
    return sendJSON(res, { metas });
  }

  // Route: /meta/:type/:id.json
  if (parts[0] === 'meta' && parts.length >= 3) {
    const type = parts[1];
    const id = decodeURIComponent(stripJson(parts[2]));

    console.log('Meta request - Type:', type, 'ID:', id);

    const item = catalogData.find(x => x.id === id && x.type === type);

    if (!item) {
      console.log('Item not found for meta request');
      return sendJSON(res, { meta: null }, 404);
    }

    if (item.type === 'series') {
      const videos = [];

      Object.keys(item.episodes || {}).forEach(seasonNum => {
        const seasonEpisodes = item.episodes[seasonNum];
        seasonEpisodes.forEach(episode => {
          videos.push({
            id: episode.id,
            title: episode.title,
            season: episode.season,
            episode: episode.episode,
            overview: episode.overview,
            released: episode.released,
            thumbnail: episode.thumbnail
          });
        });
      });

      const meta = {
        id: item.id,
        type: item.type,
        name: item.name,
        poster: item.poster,
        background: item.background,
        logo: item.logo,
        description: item.description,
        genres: item.genres,
        releaseInfo: item.releaseInfo,
        imdbRating: item.imdbRating,
        posterShape: "regular",
        videos: videos
      };

      console.log('Sending series meta with', videos.length, 'episodes');
      return sendJSON(res, { meta });
    } else if (item.type === 'movie') {
      const meta = {
        id: item.id,
        type: item.type,
        name: item.name,
        poster: item.poster,
        background: item.background,
        description: item.description,
        genres: item.genres,
        releaseInfo: item.releaseInfo,
        imdbRating: item.imdbRating,
        posterShape: "regular"
      };

      console.log('Sending movie meta');
      return sendJSON(res, { meta });
    }
  }

  // Route: /stream/:type/:id.json
  if (parts[0] === 'stream' && parts.length >= 3) {
    const type = parts[1];
    const id = decodeURIComponent(stripJson(parts[2]));

    console.log('Stream request - Type:', type, 'ID:', id);

    let streams = [];

    if (type === 'movie') {
      const movie = catalogData.find(x => x.id === id && x.type === 'movie');

      if (movie && movie.stream) {
        console.log('Found movie stream:', movie.stream);
        streams.push({
          name: "Direct HLS",
          title: movie.name,
          url: movie.stream,
          behaviorHints: {
            notWebReady: false
          }
        });
      } else {
        console.log('Movie not found or no stream URL');
      }
    } else if (type === 'series' && id.includes(':')) {
      const idParts = id.split(':');
      if (idParts.length >= 3) {
        const [seriesId, seasonNum, episodeNum] = idParts;
        const series = catalogData.find(x => x.id === seriesId && x.type === 'series');

        console.log('Looking for series:', seriesId, 'season:', seasonNum, 'episode:', episodeNum);

        if (series && series.episodes && series.episodes[seasonNum]) {
          const episode = series.episodes[seasonNum].find(e => e.episode === parseInt(episodeNum));

          if (episode && episode.stream) {
            console.log('Found episode stream:', episode.stream);
            streams.push({
              name: "Direct HLS",
              title: `${series.name} - S${seasonNum}E${episodeNum} - ${episode.title}`,
              url: episode.stream,
              behaviorHints: {
                notWebReady: false,
                bingeGroup: `directhls-${seriesId}-s${seasonNum}`
              }
            });
          } else {
            console.log('Episode not found or no stream URL');
          }
        } else {
          console.log('Series not found or no episodes for season');
        }
      }
    }

    console.log('Sending', streams.length, 'streams');
    return sendJSON(res, { streams });
  }

  // Route non trouvée
  console.log('Route not found:', pathname);
  return sendJSON(res, { error: "Route not found", path: pathname }, 404);
}
