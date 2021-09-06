import { expect } from 'chai';
import spotify from '../src/Spotify'

describe('Spotify', () => {
  it('should be an object', () => {
    expect(spotify).to.be.an.objetc;
  });

  it('should have search method', () => {
    expect(spotify.search).to.be.exist;
  });

  it('should have album method', () => {
    expect(spotify.album).to.be.exist;
  });
});
