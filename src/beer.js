import React, { Component } from 'react';

class Beer extends Component {
    render(){
        return (
            <div main>
            <p>Beer ID: {this.props.beer.id}</p>
            <p>{this.props.beer.name}</p>
            <p>First brewed in {this.props.beer.first_brewed}</p>
            <p>{this.props.beer.description}</p>
            <p>{this.props.beer.tagline}</p>
            <img src={this.props.beer.image_url}/>
            </div>
        )
    }
}
export default Beer