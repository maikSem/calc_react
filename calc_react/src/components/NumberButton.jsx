import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValeo } = useContext(NumberContext);
  return (
    <button type='button' onClick={() => handleSetDisplayValeo(buttonValue)}>
      {buttonValue}
    </button>
  )

};

export default NumberButton;