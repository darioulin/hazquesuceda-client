import React, { Component } from "react";
import Pelicula from "./Pelicula";
import axios from "axios";

export class MembersList extends Component {
  state = { miembros: [] };

  componentDidMount() {
    axios
      .get("https://crud1123.herokuapp.com/api/v1/pelicula")
      .then(body => this.setState({ miembros: body.data }))
      .catch();
  }

  render() {
    //Buen lugar para asignar variables
    return (
      <div className="container">
        <h1>Lista de Peliculas</h1>
        <div className="row">
          {this.state.peliculas.map(pelicula => (
            <Pelicula key={pelicula._id} pelicula={pelicula} />
          ))}
        </div>
      </div>
    );
  }
}

export default MembersList;
