import React, { Component } from 'react';
import Flat from './flat.jsx';

class ListOfFlats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFlat: ""
    };
  }


  renderList = () => {
    return this.props.flats.map((flat) => {
      return <Flat key={flat.name} activeFlat={this.state.activeFlat} lat={flat.lat} lng={flat.lng} name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl} />;
    });
  }

  handleClick = (event) => {
    this.props.updateFlatCenter(event.target.dataset.lat, event.target.dataset.lng);
    this.setState({activeFlat: event.target.querySelector("h2").innerText});
  }


  render() {
    return(
      <div className="flat-list" onClick={this.handleClick}>
        {this.renderList()}
      </div>
    );
  }
}

export default ListOfFlats;
