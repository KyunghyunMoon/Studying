import { Component } from 'react';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeigt } = this.box;
        this.box.scrollTop = scrollHeight - clientHeigt;
    }
    
    
    render(){
        const style ={
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height:'650px',
            background: 'linear-gradient(red, yellow, skyblue, blue, purple, black)'   //T순차적으로 색 변경
        }
    
    return (
        <div
        style ={style}
        ref = {(ref) => {this.box=ref}}>
        <div style = {innerStyle}/>    
        </div>
    );
};
}

export default ScrollBox;