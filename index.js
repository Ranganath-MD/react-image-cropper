import React, { Component, useState } from 'react';
import "./style.css"
import { render } from 'react-dom';
import Cropper from "./Cropper"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  
  return(
    <div>
        <Cropper />
    </div>
  )
}

render(<App />, document.getElementById('root'));
