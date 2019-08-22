import React, { Component } from 'react';
import './CoreJs.css';
class CoreJs extends Component {
    state ={
        cjsPromise:false
    }
    handleToggle = (e) =>{
        console.log(e.target)
        this.setState({
            [e.target.name] : !this.state[e.target.name]
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
               <ul className="core-js-list">
                   <li>
                       <button name="cjsPromise" onClick={this.handleToggle.bind(this)}>Promise</button>
                       {this.state.cjsPromise && 
                       <div className="cjs-codes">
                            
                       </div>
                       }
                   </li>
               </ul>
            </div>
        );
    }
}

export default CoreJs;