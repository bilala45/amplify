# Amplify

## About

**Amplify is a web application that analyzes a user's top played songs to generate artist-specific song recommendations.**

Recommendations are generated by analyzing the audio features of a user's top played tracks over the last month. This data is compared to the audio features of songs in the artist's discography. When a user searches for an artist, the 5 songs in the artist's discography that best match the user's music taste are returned.

Additional features:

- Recommendations can be filtered by an artist's individual albums so that only songs from that album are returned.
- When a user searches for an artist, related artists are also shown.
- Each song recommendation links directly to Spotify so that the song can be easily played.

Check out a demo of the app below!

## Tech

Technologies: React.js, Node.js, Express.js, Spotify Web API

To learn more about the Spotify Web API, check out this [link](https://developer.spotify.com/).

## Demo

### Webpage Demo

### Mobile Demo

### Pictures

If the above videos don't work, here are a couple pictures:

## Application Architecture

## Next steps

1. Deploying the site to a live server
2. Getting the app approved by Spotify so that it can be used freely by Spotify users (in progress)
3. Improving the "accuracy" of the recommendation algorithm. Right now, it seems to work best on artists with smaller discographies or when filtering results by artist albums.
