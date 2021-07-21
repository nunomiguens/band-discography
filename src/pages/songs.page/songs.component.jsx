import React from 'react';

import ARTIST_DATA from '../main.page/artist.data';

import SongsPreview from '../../components/songs-preview/songs-preview.component';

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
        <h1>SONGS PREVIEW</h1>
        {discography.map(({ id, ...otherProps }) => (
          <SongsPreview className='items' key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default SongsPage;
