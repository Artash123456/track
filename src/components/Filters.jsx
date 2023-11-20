import Button from './Button';
import Input from './Input';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

const Filters = () => {
  return (
    <StyledFilters>
      <Input placeholder="Search by user code" />
      <Input placeholder="Tracking min 7" />
      <Input placeholder="courier" />
      <Input placeholder="start date end date" type="date" />
      <StyledButton>
        <IoSearchOutline />
        Search
      </StyledButton>
    </StyledFilters>
  );
};

const StyledButton = styled(Button)`
  background-color: #59ce59;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
`;
const StyledFilters = styled.div`
  background: #fff;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  > input {
    flex: 1;
  }
`;

export default Filters;
