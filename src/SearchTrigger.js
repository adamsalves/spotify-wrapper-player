import spotify from '../src/Spotify';
import renderAlbums from './AlbumList';

const albumsList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    spotify.search.albums(searchInput.value)
      .then(data => renderAlbums(data.albums.items, albumsList));
  });
}

