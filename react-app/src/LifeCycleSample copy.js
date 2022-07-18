import { Component} from 'react';

class LifeCycleSamplecopy extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null;
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return { color: nextProps.color};               
        }
            return null;   
    }


    componentDidMount(){      //컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
        console.log('componentDidMount')    
    }

    shouldComponentUpdate(nextProps, nexState){
        console.log('shouldComponentUpdate', nextprops, nexState);
        return nexState.number % 10 !== 4;

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업뎃 전 색 : ', snapshot);
        }
    }

    render() {
        con
    }


    }




    return (
        <div>
            
        </div>
    );
};

export default LifeCycleSample copy;