// api/manifest.js - Manifest unifié
export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const manifest = {
    id: "community.directhls",
    version: "1.0.0",
    name: "Direct HLS Addon",
    description: "Streaming direct via HLS pour films et séries",
    catalogs: [
    
      {
        type: "movie",
        id: "netflix_movies",
        name: "Netflix"
      },
      {
        type: "series",
        id: "netflix_series",
        name: "Netflix"
      },
      {
        type: "movie",
        id: "prime_movies",
        name: "Amazon Prime"
      },
      {
        type: "series",
        id: "prime_series",
        name: "Amazon Prime"
      },
      {
        type: "movie",
        id: "disney_movies",
        name: "Disney+"
      },
      {
        type: "series",
        id: "disney_series",
        name: "Disney+"
      },
      {
        type: "movie",
        id: "appletv_movies",
        name: "Apple TV+"
      },
      {
        type: "series",
        id: "appletv_series",
        name: "Apple TV+"
      },
      {
        type: "movie",
        id: "canal_movies",
        name: "Canal+"
      },
      {
        type: "series",
        id: "canal_series",
        name: "Canal+"
      },
      {
        type: "movie",
        id: "hbo_movies",
        name: "HBO Max"
      },
      {
        type: "series",
        id: "hbo_series",
        name: "HBO Max"
      }
    ],
    resources: ["catalog", "meta", "stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
  };

  res.statusCode = 200;
  res.end(JSON.stringify(manifest));
}
