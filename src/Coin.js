import React, { Component } from 'react';

class Coin extends Component {
    render() {
        let imageURL;
        if (this.props.side === 'heads'){
            imageURL = 'http://cointrackers.com/img/buffalo-indian-nickel.png';
        } else if (this.props.side === 'tails'){
            imageURL = 'https://newvitruvian.com/images/buffalo-clip-nickel.png';
        } else {
            imageURL = '//:0'
        }

        return (
            <img className="Coin" src={imageURL} alt={this.props.side}/>
        )
    }
}


export default Coin;