import './index.css';
import { useReducer } from 'react';
import { DigitButton } from './DigitButton';

export const ACTION =
{
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT:'delete-digit',
  EVALUATE: 'eval'
}

function reducer(state , {type , paylode})
{
     switch(type)
   {
     case ACTION.ADD_DIGIT:
      return{
        ...state,
        currentOperand: `${currentOperand || ""}${paylode.digit}`
      }
   }
}

   
function App() {
  const [{ currentOperand, previouOperand , operation}, dispatch] = useReducer(reducer,{})

  dispatch({type:ACTION.ADD_DIGIT , paylode:{digit:1}})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previou-operand">{previouOperand },{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="two">AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch}>
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch}>
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch}>
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="two">=</button>
    
    </div>
  );
}
export default App;
