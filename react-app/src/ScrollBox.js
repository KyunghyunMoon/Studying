import { Component } from 'react';
 //152p 스크롤박스
class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeigt } = this.box;
        this.box.scrollTop = scrollHeight - clientHeigt;
    }
    
    
    render(){
        const style ={
            border: '1px solid black',
            height: '600px',
            width: '500px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height:'650px',
            background: 'linear-gradient(black, white, black, white, black, white, black, white, black,)'   //T순차적으로 색 변경
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