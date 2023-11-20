import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const Table = (props) => {
  return (
    <TableComponents
      expandableRowExpanded={(row) => row.id === props.expand_id}
      expandableIcon={<></>}
      {...props}
    />
  );
};
const TableComponents = styled(DataTable)`
  .bold {
    color: #000;
    font-weight: 600;
  }
  .rdt_TableCol > div > div {
    color: gray;
  }
`;
export default Table;
