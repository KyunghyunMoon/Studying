import { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
};


export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
};

//1. use로 시작하는 파일을 만들고 그 안에 함수를 만든다.
//2. usestate, useEffect, useReducer와 같은 hooks를 사용하여 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값을 반환해줌.