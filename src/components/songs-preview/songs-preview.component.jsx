import React from 'react';

import './songs.preview.scss';

const SongsPreview = ({ albums }) => (
  <div className='songs-list'>
    {albums.map(album => (
      <div className='songs-list' key={album.id}>
        <img src={album.image_url} alt={album.title} />
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
);

export default SongsPreview;
