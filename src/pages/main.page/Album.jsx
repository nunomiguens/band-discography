import React from 'react';
import './Album.styles.scss';

import SongsPage from '../songs.page/songs.component';

class Album extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isToggleOn: false,
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
      <div className='discography-item' key={this.props.album.id}>
        {this.props.album.title}
        <div className='img-container'>
          <img
            className='image'
            key={this.props.album.id}
            src={this.props.album.image_url}
            alt={this.props.album.title}
          />
        </div>
        <button
          className='button'
          id={this.props.album.id}
          onClick={this.handleClick}
        >
          Click Song List
        </button>

        <p className='listSongs'>
          {this.state.isToggleOn && (
            <SongsPage songs={this.props.album.songs} />
          )}
        </p>
      </div>
    );
  }
}

export default Album;
