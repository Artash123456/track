import styled from 'styled-components';

const Input = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 3px;
  outline: none;
`;

export default Input;
