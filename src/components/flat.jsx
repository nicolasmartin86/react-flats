import React, { Component } from 'react';



class Flat extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={"card" + `${this.props.activeFlat === this.props.name ? " active" : ""}`} data-lat={this.props.lat} data-lng={this.props.lng} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl})`}}>
        <div className="card-category">{`${this.props.price}  ${this.props.priceCurrency}`}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;


