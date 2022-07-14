// //88p
// const MyComponent =() => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

import PropTypes from "prop-types";
import {Component} from 

// const MyComponent = (props) => {
//     return <div>킹 갓 {props.name}입니다</div>;
// };

// const MyComponent = (props) => {
//     const { name, favoriteNumber, children }) => {
        
//     }
// }
//     return (
//         <div>
//             안녕. 내 이름은 {name}입니다.
//             <br />
//             children 값은 {Children} 입니다.
//             <br />
//             children 값은 {children} 입니다.
        
//         </div>
//     );

// };

// MyComponent.defaultProps = {
//     name: "기본 이름"
// };

class MyComponent extends Component {
    render(){
        const {name, favoriteNumber, children} = this.props;
        return(
            <div>
                안녕! 내 일음은 {name}.
                <br />
                children 값은 {children}.
                <br />
                제일 좋아하는 숫자는 {favoriteNumber}입니다
            </div>
                    
        );
    };
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
export { MyComponent2, MyComponent3}