import React from 'react';

import './songs.styles.scss';

import ARTIST_DATA from '../main.page/artist.data';

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      discography: ARTIST_DATA,
    };
  }

  render() {
    const { discography } = this.state;
    return (
      <div className='main-page'>
        {discography.map(({ id, albums, ...otherProps }) => (
          <div className='songs-list'>
            {albums.map(album => (
              <div className='songs-list' key={album.id}>
                <div>
                  <h2>{album.title}</h2>
                  <div>
                    {album.songs.map((song, ind) => (
                      <div key={ind}>
                        {ind + 1} - {song.title}
                      </div>
                    ))}
                  </div>
                  <p>
                    <strong>Description: </strong>
                    {album.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default SongsPage;
