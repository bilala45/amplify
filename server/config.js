import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const port = process.env.PORT;
const spotifyClientId = process.env.CLIENT_ID;
const spotifyClientSecret = process.env.CLIENT_SECRET;
const spotifyAuthRedirectURI = process.env.REDIRECT_URI;

export { port, spotifyClientId, spotifyClientSecret, spotifyAuthRedirectURI };
