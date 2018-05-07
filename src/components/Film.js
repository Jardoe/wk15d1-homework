import React, {Component} from 'react';
import './film.css'

class Film extends Component{

  checkIfReleased(){
    if(this.props.released === true){
      return <h5 className="showtimes">Showtimes</h5>
    }
  }

  render(){
    return (
      <div className="film">
        <div className="button">
          <button className="button"></button>
        </div>
        <a href="/"><h4>{this.props.title}</h4></a>
        {this.checkIfReleased()}
      </div>
    )
  }
}

export default Film;
