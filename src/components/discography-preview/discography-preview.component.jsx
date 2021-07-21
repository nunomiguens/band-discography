import React from 'react';
import { Link } from 'react-router-dom';
import './discography-preview.styles.scss';

const DiscographyPreview = ({ name, albums }) => (
  <div className='discography-preview'>
    <h1 className='title'>{name.toUpperCase()} albums</h1>

    <div className='preview'>
      {albums.map(album => (
        <div className='discography-item' key={album.id}>
          {album.title}
          <div className='img-container'>
            <Link to={`/songs-preview/${album.id}`}>
              <img
                className='image'
                key={album.id}
                src={album.image_url}
                alt={album.title}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DiscographyPreview;
