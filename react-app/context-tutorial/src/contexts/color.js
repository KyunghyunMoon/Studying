import { createContext, useState } from 'react';

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},                //set 메서드 정의
        setSubcolor: () => {}
    }  
    });  //초기상태   context만드는 

const ColorProvider = ({ children }) => {         //공급자 변경. context를 변경해서 씀.
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');   

    const value = {
        state: {color, subcolor},
        actions: {setColor, setSubcolor}
    };
    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

const{ Consumer: ColorConsumer } = ColorContext;

export{ ColorProvider, ColorConsumer };


export default ColorContext;  //default는 이름 변경해서 사용가능 but 