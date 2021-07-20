import React from 'react';

import './main.styles.scss';

import ARTIST_DATA from './artist.data';

import DiscographyPreview from '../../components/discography-preview/discography-preview.component';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discography: ARTIST_DATA,
    };
  }

  render() {
    const { discography } = this.state;
    return (
      <div className='main-page'>
        <h1>DISCOGRAPHY</h1>
        {discography.map(({ id, ...otherProps }) => (
          <DiscographyPreview className='items' key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default MainPage;
