import React from 'react';

import './discography-preview.styles.scss';

const DiscographyPreview = ({ name, albums }) => (
  <div className='discography-preview'>
    <h1 className='title'>{name.toUpperCase()} albums</h1>

    <div className='preview'>
      {albums.map(album => (
        <div className='discography-item' key={album.id}>
          {album.title}
          <img
            className='image'
            key={album.id}
            src={album.image_url}
            alt='image'
          />
        </div>
      ))}
    </div>
  </div>
);

export default DiscographyPreview;
