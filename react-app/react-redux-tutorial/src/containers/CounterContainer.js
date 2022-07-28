import Counter from '../components/Counter';
import { connect, useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { useCallback } from 'react';


const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onecrease} /> 
    );
};

export default CounterContainer;

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });


//     (state) => ({
//         number: state.counter.number,
//     }),
    
//     {
//     increase,
//     decrease,
// },

    
// ) (CounterContainer);