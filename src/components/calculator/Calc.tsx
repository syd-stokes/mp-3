import styled from "styled-components";
import useCalculator from "./useCalculator.js";

const CalcBody = styled.div`
    max-width: 30%;
    margin: 0 auto;
    background-color: #EC7FA9;
    padding: 2%;
    border-radius: 5%;
    box-shadow: 0 0 20px 2px grey;

    @media screen and (max-width: 1000px) {
        max-width: 35%;
    }
`;

const CalcOutput = styled.div`
    background-color: #c8d4b8;
    font-family: "Silkscreen", sans-serif;
    font-size: calc(2px + 1.5vw);
    color: black;
    text-align: right;
    padding: 14px 16px;
    margin-bottom: 5%;
    border-radius: 8px;
    min-height: 62px;
    overflow-wrap: anywhere;

    &.negative {
        color: red;
    }
`;

const CalcInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 5%;
    font-family: "Silkscreen", sans-serif;
    font-size: calc(2px + 1vw);
    border: none;
    border-radius: 8px;
`;

const CalcButtons = styled.div`
    text-align: center;
`;

const CalcButton = styled.button`
    margin: 5px 2px;
    padding: 16px 10px;
    width: 30%;
    font-size: calc(2px + 1vw);
    border: none;
    border-radius: 8px;
    background-color: #F7F1E8;
    color: #593714;

    &:hover {
        background-color: #e7d4bb;
    }
`;

export default function Calc() {
    const calc = useCalculator();

    return (
        <CalcBody>
            <CalcOutput className={calc.outputClass}>{calc.output}</CalcOutput>

            <CalcInput type="text" className="silkscreen-regular" value={calc.firstNumber} onChange={calc.handleFirstNumber}/>
            <CalcInput type="text" className="silkscreen-regular" value={calc.secondNumber} onChange={calc.handleSecondNumber}/>

            <CalcButtons>
                <CalcButton onClick={calc.add}>+</CalcButton>
                <CalcButton onClick={calc.subtract}>-</CalcButton>
                <CalcButton onClick={calc.multiply}>*</CalcButton>
                <CalcButton onClick={calc.divide}>/</CalcButton>
                <CalcButton onClick={calc.power}>**</CalcButton>
                <CalcButton onClick={calc.clear}>Clear</CalcButton>
            </CalcButtons>

        </CalcBody>
    );
}