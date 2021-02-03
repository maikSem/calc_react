import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {

  const { handleClearValue } = useContext(NumberContext);

  return (
    <button className='white-button' type="button" onClick={() => handleClearValue()}>С</button>
  )
}

export default ClearButton;