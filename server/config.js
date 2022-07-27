import "dotenv/config";

const port = process.env.PORT;
const spotifyClientId = process.env.CLIENT_ID;
const spotifyClientSecret = process.env.CLIENT_SECRET;

export { port, spotifyClientId, spotifyClientSecret };
