import React, { Component } from 'react';
import { CounterComponent } from './Counter/Counter';
import ListComponent from './List/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      con: 'Welcome to ReactJS Component!'
    };
  }
  render() {
    return (
      <React.Fragment>
          <TitleCard title={'ReactJS'} message={this.state.con} />
          <CounterComponent name="Lele" />
          <ListComponent />
      </React.Fragment>
    );
  }
}

const TitleCard = props => {
  const {
    title,
    message
  } = props;
  return (
    <section className="balloon nes-container with-title">
      <h2 className="title">{title}</h2>
      <div className="messages">
        <div className="nes-balloon from-right">
          <p>{message}</p>
        </div>
      </div>
    </section>
  );
}

export default App;

