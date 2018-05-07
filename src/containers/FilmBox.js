import React, {Component} from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [
        {id: 1, title: "Sherlock Gnomes", released: true},
        {id: 2, title: "Life of the Party", released: false},
        {id: 3, title: "Breaking In", released: false},
        {id: 4, title: "7 Days in Entebbe", released: false},
        {id: 5, title: "Godard Mon Amour", released: false},
        {id: 6, title: "How to Talk to Girls at Parties", released: false},
        {id: 7, title: "Revenge", released: false},
        {id: 8, title: "Anon", released: false},
        {id: 9, title: "The Cured", released: false}
      ]
    };
  }

  render(){
    return (
      <div className="film-box">
        <h1>UK Opening This Week</h1>
        <FilmList data={this.state.data}/>
        <a href="/">Seem more opening this week</a> >>
      </div>
    )
  }
}



export default FilmBox;
