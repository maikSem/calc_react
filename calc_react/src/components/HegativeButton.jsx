import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const HegativeButton = () => {

  const { handleToggleNegative } = useContext(NumberContext);

  return (
    <button className='white-button' type="button" onClick={() => handleToggleNegative()}>{'-/+'}</button>
  )
}

export default HegativeButton;