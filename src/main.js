import spotify from '../src/Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';
import searchEnterTrigger from '../src/SearchTrigger';

searchEnterTrigger();

const album = spotify.album.getAlbum('2i6nd4FV6y7K9fln6eelmR');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
