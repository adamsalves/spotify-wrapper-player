import spotify from '../src/Spotify'
import renderAlbums from './AlbumList'

const albums = spotify.search.albums('Joy Division');
const albumsList = document.getElementById('album-list');

albums.
  then(data => renderAlbums(data.albums.items, albumsList));
