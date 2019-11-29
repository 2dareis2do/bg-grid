import React, { Component } from 'react';
import TriangleEquilateral from './molecules/TriangleEquilateral';
import TriangleDoubleSpace from './molecules/TriangleDoubleSpace';
import TriangleSpace from './atoms/TriangleSpace';
import Triangle from './atoms/Triangle';
import TriangleRight from './atoms/TriangleRight';

// import { thisTypeAnnotation } from '@babel/types';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ww: 0,
      wh: 0,
      iw: 0,
      ih: 0,
      columns: 0,
      rows: 0,
    };
    this._onResize = this._onResize.bind(this);
    this.state.ww = window.innerWidth;
    this.state.wh = window.innerHeight;
    this.state.ih = 75; // can be changed to affect heighturn
    this.state.iw = this.calculateItemWidth(this.state.ih); // can be changed to affect width
    this.state.columns = this.calculateNumberColumns(this.state.ww);
    this.state.rows = this.calculateNumberRows(this.state.wh);

    window.addEventListener('resize', this._onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize);
  }

  _onResize() {
    let containerWidth = window.innerWidth;
    let newColumnCount = this.calculateNumberColumns(containerWidth);
    let maxContainerWidth = newColumnCount * this.state.iw;

    // this.setState({vw: tempw})
    this.setState((state) => {
      return {ww: containerWidth, wh: window.innerHeight, columns: this.calculateNumberColumns(maxContainerWidth), rows: this.calculateNumberRows(window.innerHeight) };
    });
  }

  calculateNumberColumns(maxContainerWidth) {
    // console.log(parseInt((maxContainerWidth /this.state.iw)));
    return parseInt((maxContainerWidth /this.state.iw));
  }

  calculateNumberRows(windowHeight) {
    return parseInt((windowHeight)/this.state.ih) + 1;
  }

  calculateItemWidth(itemHeight) {
    return Math.sqrt(Math.pow(itemHeight / Math.sin(this.convertDegreesToRadians(60)), 2) - Math.pow(itemHeight, 2));
  }

  convertDegreesToRadians(degrees) {
    return degrees * (Math.PI/180);
  }

  makeRow(){
    let temp = [];
    for(let i=0; i<this.state.columns ; i++) {
      // console.log(i);

      temp.push(<TriangleEquilateral key={i.toString()}></TriangleEquilateral>)
    }
    // console.log(temp);

    return temp;
  }

  makeGrid(){
    let temp = [];
    let count = (this.state.columns * this.state.rows) ;
    let count3 = this.state.columns;
    let count2 = 0;

        // lets handle odd and even columns differently
        // TODO figure out odd and even rows
        // console.log(this.state.columns, 'even');
      if(this.state.columns % 2 === 0) {

        for(let i=0; i<count ; i++) {
          console.log(i);

          // console.log(count2)
          // skip first row
          // targets first in row for odd rows i.e. 1, 3, 5
          // we skip the first row
          // so for a 12 column grid we are targeting 13, 13 + 12, 13 + 12 + 12 etc
          // i.e. 13 25 37 etc
          // e.g with 10 columns
          // 0 1 2 3 4 5 6 7 8 9 - count = 0.
          // 10 11 12 13 14 15 16 17 18 19  -
          // if even row - i.e 0 , 2, 4 - nothing just print as normal
          // where count = odd we need to add 1 triangeR to n % columns = 1 and 1 regular
          // plus one triangle left
          // we need to target
          // if we start with half size then row will have one more item !
          // so if we have even number of columns second wor will have rows + 1
          // so if row is odd we need to add one to the first and two to the end.
          // where row is odd we need to target where n % numColumn = 0. && n + 1 % numColumn = 0

          // handle first row - same for all even rows
          // if (i % this.state.columns === 0 && count2 === 0){
          //   // temp.push(<Triangle key={i.toString()}></Triangle>)
          // }

          //target first column
          if( i === 0) {
            temp.push(<TriangleEquilateral key={i.toString()+'2'}></TriangleEquilateral>)
            console.log('first item', i)

          }
          else if (i === count - 1){
            console.log('last item', i)
            //check if even or odd amount of rows
            if(this.state.rows % 2 === 0 ) {
              temp.push(<Triangle key={i.toString()}></Triangle>)

            }
          }
          else if (i % this.state.columns === 0){

            // check if count is odd or even
            // count skips row
            if (count2 % 2 === 0) {
              // count2 = count2 + 1;
              console.log('add triangle right');

              temp.push(<TriangleRight key={i.toString()}></TriangleRight>)

            }

            else if (count2 % 2 === 1) {
              // count2 = count2 + 1;
              temp.push(<Triangle key={i.toString()}></Triangle>)
              temp.push(<TriangleEquilateral key={i.toString()+'2'}></TriangleEquilateral>)

            }

            else if (count % 2 === 0) {
              temp.push(<TriangleEquilateral key={i.toString()}></TriangleEquilateral>)

            }

            else {
              temp.push(<Triangle key={i.toString()}></Triangle>)

            }
            count2 = count2+1;
            // console.log(count2)
          }
          // else if (i % this.state.columns === 0 ){

          // }
          else if(i % 2 === 0) {
            // console.log(i);
            temp.push(<TriangleEquilateral key={i.toString()}></TriangleEquilateral>)
          }
        }

      } else {
        //odd
        for(let i=0; i<count ; i++) {
          console.log(' item', i, count)

        // console.log('count2',count2 )
        if(i % 2 === 0 && i !== count -1 ) {
          temp.push(<TriangleEquilateral key={i.toString()}></TriangleEquilateral>)
        }
        else if (i === count - 1){
          console.log('last item', i, count)
          //check if even or odd amount of rows
          if(this.state.rows % 2 === 1 ) {
            console.log('odd rows')
            temp.push(<Triangle key={i.toString()}></Triangle>)

          } else {
            console.log('even rows')

          }
        }

      }

      }


    // console.log(temp);
    return temp;
  }

  makeRows(){
    let tempj = [];
    for(let j=0; j<this.state.rows ; j++) {
      // tempj.push(this.makeRow());
      console.log(tempj);
    }
    return tempj;
    // return;
  }

  render() {
    let rowStyle = {
      width: parseInt((this.state.columns)*this.state.iw)+'px'
    };
    return (
      <div className={'grid'}>
                {/* lets figure out the following:

        <ul>
          <li>Window Width: {this.state.ww}</li>
          <li>Window Height: {this.state.wh}</li>
          <li>Item Width: {this.state.iw}</li>
          <li>Item Height: {this.state.ih}</li>
          <li>Total Width:  {this.state.ww + (this.state.iw * 2)}</li>
          <li>Total Width2:  {this.state.ww + (this.state.iw * 2)}</li>

          <li>Total columns:  {this.state.columns}</li>
          <li>Total Rows: {this.state.rows}</li>

        </ul> */}



        <div className={'container'} >
          <div className={'row'} style={rowStyle}>
            {/* <TriangleEquilateral></TriangleEquilateral>
            <TriangleEquilateral></TriangleEquilateral>
            <TriangleEquilateral></TriangleEquilateral> */}
            {/* {this.makeRow()} */}
            {/* this.makeRows()} */}
            {this.makeGrid()}

          </div>
        </div>
      </div>
    );
  }
}


export default Grid;