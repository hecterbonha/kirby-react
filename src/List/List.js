import React, { Component } from 'react';
import axios from 'axios';

class ListComponent extends Component {
  constructor() {
    super();
    this.state = {
      datas: null
    }
  }

  kirbyEat = async () => {
    try {
      const response = await axios.get('http://localhost:1234/foods');
      const json = response.data;
      this.setState({
        datas: json
      });
    } catch (error) {
      console.error(error);
    }
  }

  render () {
    const { datas } = this.state;
    const ListRender = () => {
      if (datas) {
        return (
          <ul className="nes-list is-disc">
            { datas.map(datas => <li key={datas.id}>{datas.food}</li>) }
          </ul>
        );
      } else {
        return (
          <button
            className="nes-btn is-primary"
            onClick={this.kirbyEat}
          >
            Feed
          </button>
        );
      }
    }
    return (
      <section className="nes-container with-title is-centered">
        <h2 className="title">Kirby loves to eat</h2>
        <div className="lists">
          <ListRender />
        </div>
      </section>
    );
  } 
}

export default ListComponent;