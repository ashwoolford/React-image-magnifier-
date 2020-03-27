import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img01 from './img_01.png';
import img02 from './img_02.jpg';

import SideExample from './SideExample';

import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  MagnifierContainer,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";




class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const element_id = event.target.id;
    this.setState({id: element_id}, () => console.log(this.state.id))

    //console.log(this.state.id);
  }



  render() {

    return (
      <div>
        
        {this.state.id == 1
        ? <SideExample img={img01}/>
        : <SideExample img={img02}/>
        }
        
        <img id={1} onClick={this.handleClick} src={img01} height="100" width="70" alt="Image 01"/>
        <img id={2} onClick={this.handleClick} src={img02} height="100" width="70" alt="Image 01"/>

      </div>
    )

  }

}

export default App;
