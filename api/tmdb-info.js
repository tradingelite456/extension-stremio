export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Système d'import automatique TMDB</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      max-width: 900px;
      margin: 40px auto;
      padding: 0 20px;
      line-height: 1.6;
      color: #333;
    }
    h1 { color: #0d6efd; border-bottom: 3px solid #0d6efd; padding-bottom: 10px; }
    h2 { color: #198754; margin-top: 30px; }
    code {
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Monaco', 'Consolas', monospace;
    }
    pre {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      border-left: 4px solid #0d6efd;
    }
    .info-box {
      background: #e7f3ff;
      border-left: 4px solid #0d6efd;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .success-box {
      background: #d4edda;
      border-left: 4px solid #198754;
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    ul { line-height: 2; }
    .emoji { font-size: 1.3em; }
  </style>
</head>
<body>
  <h1>Système d'import automatique TMDB</h1>

  <div class="success-box">
    <strong>Système actif et fonctionnel !</strong><br>
    Toutes les métadonnées TMDB sont automatiquement importées pour les films et séries avec un code IMDB (tt...).
  </div>

  <h2>Données importées automatiquement</h2>
  <p>Pour chaque film ou série avec un code IMDB, le système récupère automatiquement :</p>
  <ul>
    <li><span class="emoji">🖼️</span> <strong>Poster</strong> - Affiche haute qualité (500px et original)</li>
    <li><span class="emoji">🎨</span> <strong>Background</strong> - Image de fond (backdrop) en qualité originale</li>
    <li><span class="emoji">🏷️</span> <strong>Logo</strong> - Logo transparent du film/série (priorité français > anglais)</li>
    <li><span class="emoji">⭐</span> <strong>Note IMDB/TMDB</strong> - Note moyenne et nombre de votes</li>
    <li><span class="emoji">📅</span> <strong>Année de sortie</strong> - Année ou période de diffusion</li>
    <li><span class="emoji">🎬</span> <strong>Genres</strong> - Liste complète des genres</li>
    <li><span class="emoji">📝</span> <strong>Résumé en français</strong> - Description complète traduite</li>
    <li><span class="emoji">🎭</span> <strong>Casting</strong> - Top 10 des acteurs avec photos</li>
    <li><span class="emoji">🎥</span> <strong>Réalisateur/Créateur</strong> - Nom du réalisateur (films) ou créateur (séries)</li>
    <li><span class="emoji">⏱️</span> <strong>Durée</strong> - Temps en minutes</li>
    <li><span class="emoji">🎞️</span> <strong>Bande-annonce</strong> - URL YouTube ou Vimeo de la bande-annonce</li>
    <li><span class="emoji">🏢</span> <strong>Sociétés de production</strong> - Liste des studios</li>
    <li><span class="emoji">💬</span> <strong>Slogan</strong> (tagline) - Phrase d'accroche du film/série</li>
    <li><span class="emoji">📊</span> <strong>Statut</strong> - Statut de production (Released, Ended, etc.)</li>
  </ul>

  <h2>Comment ça marche ?</h2>

  <div class="info-box">
    Le système détecte automatiquement les codes IMDB (commençant par <code>tt</code>) et enrichit
    les métadonnées via l'API TMDB. Les données sont mises en cache pour optimiser les performances.
  </div>

  <h3>Exemple de film :</h3>
  <pre><code>{
  id: "tt15398776",
  type: "movie",
  name: "Oppenheimer",
  stream: "https://votre-stream.m3u8",
  catalog: "netflix"
}</code></pre>

  <p>Sera automatiquement enrichi avec toutes les métadonnées TMDB !</p>

  <h3>Exemple de série :</h3>
  <pre><code>{
  id: "tt1190634",
  type: "series",
  name: "The Boys",
  catalog: "netflix",
  episodes: {
    1: [
      {
        id: "tt1190634:1:1",
        title: "Episode 1",
        season: 1,
        episode: 1,
        stream: "https://votre-stream.m3u8"
      }
    ]
  }
}</code></pre>

  <h2>Tester le système</h2>

  <p>Exemples de films/séries avec métadonnées enrichies :</p>
  <ul>
    <li><a href="/api/router/meta/movie/tt15398776.json" target="_blank">Oppenheimer (film)</a></li>
    <li><a href="/api/router/meta/series/tt1190634.json" target="_blank">The Boys (série)</a></li>
    <li><a href="/api/router/meta/movie/tt1375666.json" target="_blank">Inception (film)</a></li>
    <li><a href="/api/router/meta/series/tt0903747.json" target="_blank">Breaking Bad (série)</a></li>
  </ul>

  <h2>Ajouter un nouveau film/série</h2>

  <p>Pour ajouter du contenu avec métadonnées automatiques :</p>

  <ol>
    <li>Trouvez le code IMDB sur <a href="https://www.imdb.com" target="_blank">IMDB.com</a> (ex: tt15398776)</li>
    <li>Ajoutez l'entrée dans <code>catalogData</code> avec juste :
      <ul>
        <li>L'ID IMDB</li>
        <li>Le type (movie/series)</li>
        <li>Le catalogue (netflix, prime, disney, etc.)</li>
        <li>L'URL du stream</li>
      </ul>
    </li>
    <li>Toutes les autres métadonnées seront importées automatiquement !</li>
  </ol>

  <h2>Cache & Performance</h2>

  <div class="info-box">
    <strong>Système de cache :</strong><br>
    Les données TMDB sont mises en cache pendant 24 heures pour optimiser les performances
    et réduire les appels API. Le cache est automatiquement géré.
  </div>

  <h2>API TMDB</h2>

  <p>Configuration actuelle :</p>
  <ul>
    <li><strong>API Key :</strong> 0a393ddecd4164cfd979c86dcaa3b9a6</li>
    <li><strong>Langue :</strong> Français (fr-FR)</li>
    <li><strong>Images :</strong> Qualité originale</li>
  </ul>

  <hr style="margin: 40px 0; border: 0; border-top: 2px solid #eee;">

  <p style="text-align: center; color: #666;">
    Système créé avec l'API TMDB<br>
    <small>Toutes les métadonnées sont automatiquement synchronisées</small>
  </p>
</body>
</html>
  `;

  res.statusCode = 200;
  res.end(html);
}
