/*

video-react
------------------
https://www.npmjs.com/package/video-react

npm install --save video-react

import 'video-react/dist/video-react.css'; // import css
OR
@import '~video-react/styles/scss/video-react'; // or import scss 
OR
<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>

import React from 'react';
import { Player } from 'video-react';
 
export default props => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>
  );
};


*/

import React, { Component } from 'react';
import { Player } from 'video-react';
// import 'video-react/dist/video-react.css';


class ReactVideo extends Component {
    render() {
        const wrapperStyle = {
            backgroundColor: 'white',
            border: 'solid 1px',
            margin: '5px',
            padding: '10px',
        }
        return (
            <div className="container">
                <h2>HighChart</h2>
                <div style={wrapperStyle}>
                    <h4>ReactVideo</h4>
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default ReactVideo;