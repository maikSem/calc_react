import React, { useContext } from 'react';
import { DisplayStyles } from '../styles/Styles';
import { NumberContext } from './NumberProvider';


const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <DisplayStyles>
      <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
      <p>{!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}</p>
    </DisplayStyles>
  )
};

export default Display;