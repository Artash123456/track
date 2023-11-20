import styled from 'styled-components';

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  border: 1px solid gray;
  background-color: transparent;
  padding: 5px 16px;
  border-radius: 5px;
  color: gray;
  min-height: 35px;
`;

export default Button;
