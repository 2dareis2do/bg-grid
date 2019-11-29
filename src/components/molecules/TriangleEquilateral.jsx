import React, { Component } from 'react';
import Triangle from '../atoms/Triangle';
import TriangleRight from '../atoms/TriangleRight';

class TriangleEquilateral extends Component {

  render() {

    return (
      <React.Fragment>
        <Triangle></Triangle>
        <TriangleRight></TriangleRight>
      </React.Fragment>

    );
  }
}

export default TriangleEquilateral;