import React from 'react';

import './main.styles.scss';
import SongsPage from '../songs.page/songs.component';

import ARTIST_DATA from './artist.data';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      discography: ARTIST_DATA,
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { discography } = this.state;
    return (
      <div className='main-page'>
        <h1>DISCOGRAPHY</h1>
        {discography.map(({ id, name, albums, ...otherProps }) => (
          <div className='discography-preview' key={id}>
            <h1 className='title'>{name.toUpperCase()} albums</h1>

            <div className='preview'>
              {albums.map(album => (
                <div className='discography-item' key={album.id}>
                  {album.title}
                  <div className='img-container'>
                    <img
                      className='image'
                      key={album.id}
                      src={album.image_url}
                      alt={album.title}
                    />
                  </div>
                  <button id={album.id} onClick={this.handleClick}>
                    click me
                  </button>
                </div>
              ))}
            </div>
            <p>{this.state.isToggleOn ? 'List of Songs' : <SongsPage />}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default MainPage;
