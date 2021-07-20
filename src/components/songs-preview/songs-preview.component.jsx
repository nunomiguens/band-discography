import React from 'react';

import './songs.preview.scss';

const SongsPreview = ({ albums }) => (
  <div className='songs-list'>
    {albums.map(album => (
      <div className='songs-list'>
        <img key={album.id} src={album.image_url} alt='image' />
        <div>
          <h2>{album.title}</h2>
          <p>
            {album.songs.map((song, ind) => (
              <div>
                {ind + 1} - {song.title}
              </div>
            ))}
          </p>
          <p>
            <strong>Description: </strong>
            {album.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default SongsPreview;
