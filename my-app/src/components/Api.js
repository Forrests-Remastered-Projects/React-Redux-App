import React, { Component } from "react";
import { connect } from "react-redux";
import getGoat from "../actions/index";

function mapStateToProps(state) {
  const { image, isFetching } = state;
  return { image, isFetching };
}

class GoatPics extends Component {
  render() {
    return (
      <div>
        <h1>Dogs are amazing</h1>
        <h3>&#8681; Dont believe me? Click this button! &#8681;</h3>
        <button onClick={this.props.getGoat}>DOG TIME!</button>
        {this.props.isFetching ? (
          <h1>loading</h1>
        ) : (
          <img src={this.props.image} alt="DOG" />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getGoat }
)(GoatPics);
