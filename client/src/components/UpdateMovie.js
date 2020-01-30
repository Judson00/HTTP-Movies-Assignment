import React from 'react';

class UpdateMovie extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movieInfo: {
        title: '',
        director: '',
        metascore: 0,
        actors: ''
      }
    };
  }


  handleChange = e => {
    this.setState({
      movieInfo: {
        ...this.state.movieInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  putMessage = e => {
    e.preventDefault();
    this.props.putMessage(this.state.movieQuote)
  };

  render(){
    return(
      <div>
        <h2>Update a Movie</h2>
        <form onSubmit={this.putMessage}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.movieInfo.title}
          />
          <input
            type="text"
            name="director"
            placeholder="Director"
            onChange={this.handleChange}
            value={this.state.movieInfo.director}
          />
          <input
            type="number"
            name="metascore"
            placeholder="Metascore"
            onChange={this.handleChange}
            value={this.state.movieInfo.metascore}
          />
        </form>
        <button type="submit">Update</button>
      </div>
    )
  }
}

export default UpdateMovie;