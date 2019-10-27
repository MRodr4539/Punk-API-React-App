import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Beer from './beer'

function App() {
  return (
   <ParentComponent />
  );
}


class ParentComponent extends Component {
  state = {
      beer: [],
      
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .catch(error => console.log('parsing failed', error))
    .then(data => {
      this.setState({beers: data})
    })
  }

 render() {
   return(
    <div className="BeerApp">
      <h1>Beer List</h1>
        <div>
         {
           this.state.beers.map(b => {
           return (
              <Beer key={b.id} beer={b}/> 
           )
           })
         }
        </div>
    </div>
   );
 }





}
export default App;
