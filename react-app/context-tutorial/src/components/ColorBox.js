// import { ColorConsumer } from '../contexts/color';
import { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext); //408p
    return (
                <>
                <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
                />
                <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subcolor
                }}
                />
                </>
    );
};

export default ColorBox;