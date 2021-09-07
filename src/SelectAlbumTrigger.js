import spotify from '../src/Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');
const listAlbums = document.getElementById('album-list');

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    spotify.album.getAlbum(target.getAttribute('data-album-id'))
      .then(data => renderAlbumInfo(data, albumInfo))
      .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
  });
}
