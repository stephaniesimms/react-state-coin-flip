import React, {Component} from 'react';
import Coin from './Coin';

class Cointainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      currCoinSide: '',
      headCount: 0,
      tailCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const coinSide = this.getCoinSide();

    if (coinSide === 'heads'){
      this.setState(st => ({headCount: st.headCount + 1}));
      this.setState({currCoinSide: 'heads'});
    }

    if (coinSide === 'tails'){
      this.setState(st => ({tailCount: st.tailCount + 1}));
      this.setState({currCoinSide: 'tails'});
    }
  }

  getCoinSide(){
    let coinSides = ['heads', 'tails'];
    return coinSides[Math.floor(Math.random() * 2)];
  }

  render() {
    return(
      <section>
        <h1>Let's flip a coin!</h1>
        <Coin side={this.state.currCoinSide}/>
        <button onClick={this.handleClick}>Flip coin!</button>
        <p>Out of {this.state.headCount + this.state.tailCount}, there have been {this.state.headCount} heads and {this.state.tailCount} tails</p>
      </section>
    );
  }
}

export default Cointainer;