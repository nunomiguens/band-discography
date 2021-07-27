import React from 'react';

import ARTIST_DATA from '../pages/main.page/artist.data';

class ExpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'WinnerBot',
      secondName: 'Hooraa',
      discography: ARTIST_DATA,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target);
    this.setState({
      name: 'India',
    });
  }

  render() {
    const { discography } = this.state;
    return (
      <div>
        {ARTIST_DATA.map(({ id, albums, ...otherProps }) => (
          <div>
            {albums.map(album => (
              <SomeData
                title={album.title}
                secondName={this.state.secondName}
                id={album.id}
                name={this.state.name}
                handleClick={this.handleClick}
              ></SomeData>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const SomeData = props => {
  return (
    <div>
      <p>The Second Name is: {props.title} </p>
      <p>The Third ID is: {props.id}</p>

      <div>
        <button onClick={props.handleClick}>click</button>
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default ExpPage;
