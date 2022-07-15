import React, { Component } from 'react';

class Refsample extends Component {
    input = React.createRef();
    
    handleFocus = () => {
        this.input.current.focus();  //콜백함수가 아니면 current필요
    }
    render(){
        return (
                <div>
                  <input ref={this.input} />  
                </div>
            );
        }
    };

export default Refsample;