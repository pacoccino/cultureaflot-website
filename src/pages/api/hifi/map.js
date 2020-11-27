import Cors from 'cors'
import { runMiddleware } from '../../../lib/middlewares';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

const defaultMap = {
  "author": "Paco",
  "mapsJSONVersion": "v1.2.0",
  "maps": [
    {
      "mapName": "test",
      "mapImageSrc": "images/hifi-bg.jpg",
      "mapLandmarks": [
        {
          "name": "YouTube",
          "positionSU": {
            "x": 100,
            "y": 100,
            "z": 0
          },
          "widthSU": 1,
          "heightSU": 1,
          "hexColor": "#870816",
          "textHexColor": "#000000",
          "href": "https://www.youtube.com/watch?v=5qap5aO4i9A",
          "autoplay": true
        }
      ]
    }
  ]
};


export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const baseUrl = req.query.baseUrl;

  const map = {
    ...defaultMap,
    maps: defaultMap.maps.map(m => ({
      ...m,
      mapImageSrc: `${baseUrl}/${m.mapImageSrc}`,
    })),
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(map));
}
