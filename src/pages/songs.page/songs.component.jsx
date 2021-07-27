import React from 'react';

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isToggleOn: false,
    };
  }

  handleClick(e) {
    console.log(e);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        {this.props.songs.map((song, ind) => (
          <div key={ind}>
            {ind + 1} - {song.title}
          </div>
        ))}
      </div>
    );
  }
}

export default SongsPage;
