import React from 'react';

import './main.styles.scss';

import Album from './Album';

import ARTIST_DATA from './artist.data';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    return (
      <div className='main-page'>
        <h1>DISCOGRAPHY</h1>
        {ARTIST_DATA.map(({ id, name, albums, ...otherProps }) => (
          <div className='discography-preview' key={id}>
            <h1 className='title'>{name.toUpperCase()} albums</h1>

            <div className='preview'>
              {albums.map(album => (
                <Album album={album} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MainPage;
