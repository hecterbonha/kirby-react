import React, { Component } from 'react';
import './Counter.css';

class CounterComponent extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      messageText: `Let's Jump`,
      isJump: false
    }
    this.kirbyJump = this.kirbyJump.bind(this);
  }
  
  async kirbyJump() {
    const {counter} = this.state;
    await this.setState({
      isJump: true
    });
    setTimeout(() => {
      this.setState({
        counter: counter + 1
      });
    }, 500);
    setTimeout(() => {
      this.setState({
        isJump: false
      });
    }, 1000);
  }
  
  render() {
    return (
      <React.Fragment>
        <section className="ballon nes-container is-centered">
          <div className="hello">
            <h1>{ this.state.messageText }</h1>
            <p>
              Count Me
            </p>
            <p>{ this.state.counter }</p>
            <div className="kirby-jump ">
              <i 
                className={"nes-kirby " + (this.state.isJump ? 'jumpKirby' : '')}
               >
              </i>
            </div>
            <br />
            <button 
              onClick={this.kirbyJump}
              className="nes-btn"
            >
              Jump
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export {
  CounterComponent,
};