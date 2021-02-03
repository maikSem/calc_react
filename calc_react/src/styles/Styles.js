import styled from 'styled-components';

export const CalculatorStyles = styled.div `
  display: grid;
  justify-items: center;
  grid-template-areas:
    'display'
    'numbers';
  width: 100%;
  min-height: 100vh;
  background-color: #01bcc6;
  @media (max-width: 730px) {
    max-width: 90%;
    padding: 5%;
    padding-top: 0;
    }
  button {
    width: 100%;
    height: 80px;
    font-family: 'Orbitron', serif;
    font-size: 2rem;
    color: white;
    border: 3px solid #efefee;
    border-radius: 20px;
    background: #008eab;
    outline: none;
    &:focus-visible {
      border: 4px solid #005b7c;
      border-radius: 20px;
    };
    &:hover {
      border-color: rgba(0, 91, 124, 0.2);
    }
    @media (max-width: 970px) {
      font-size: 1.5rem;
     }
  }
  .display {
    grid-area: display;
    width: 100%;
    font-family: 'Orbitron', serif;
    font-weight: 700;
    @media (max-width: 500px) {
      max-height: 200px;
      margin-bottom: 20px;
     };
    h1 {
      margin: 40px 0;
      text-align: center;
      font-size: 4rem;
      color: white;
      @media (max-width: 700px) {
        font-size: 2rem;
      };
      @media (max-width: 500px) {
        margin: 10px 0 20px 0;
       };
    }
  }
  .number-pad {
    display: grid;
    grid-area: numbers;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    width: 450px;
    padding: 0px 0px 30px;
    @media (max-width: 500px) {
      width: 100%;
     }
    .button-div:focus {
      outline: none;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
  .function-button {
    color: white;
    background-color: #005b7c;
    &:hover {
      border-color: #d5d1ca;
    };
    &:focus-visible {
      border-color: black;
    }
  }
  .white-button {
    color: #005b7c;
    background-color: #efefee;
    $:hover {
      border-color: #005b7c;
    }
  }
`;

export const DisplayStyles = styled.div `
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  align-items: center;
  max-width: 700px;
  margin: 10px auto;
  background: #008eab;
  border: 4px solid #efefee;
  border-radius: 20px;
  @media (max-width: 500px) {
    grid-template-rows: 60px 40px;
    margin: 0;
   };
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    margin: 0;
    padding: 15px 20px;
    font-size: 3rem;
    text-align: right;
    border-bottom: 4px solid white;
    @media (max-width: 970px) {
      font-size: 2.5rem;
     };
    @media (max-width: 500px) {
      font-size: 1.5rem
     };
  }
  p {
    margin: 5px 0;
    @media (max-width: 500px) {
      font-size: 0.8rem
     };
  }
`;