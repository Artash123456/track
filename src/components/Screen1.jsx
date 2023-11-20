import Filters from './Filters';
import Table from './Table';
import { mock } from '../data';
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';
import Button from './Button';
import { Container, Header } from './styled';
import { SlRefresh } from 'react-icons/sl';
import Info from './Info';
import { useState } from 'react';
const Screen1 = () => {
  const [selectedCount, setSelectedCount] = useState(0);
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <h1>Track courier</h1>
        <div className="refresh">
          Get pony status <SlRefresh />
        </div>
      </Header>
      <Filters />
      <Info selected_count={selectedCount} data={mock} />
      <Table
        onSelectedRowsChange={({ selectedCount }) =>
          setSelectedCount(selectedCount)
        }
        selectableRows
        columns={[
          {
            name: 'Recipient',
            selector: (row) => (
              <span className="bold">
                {row.recipient} {row.pass}
              </span>
            ),
            sortable: true,
          },
          {
            name: 'Tracking',
            selector: (row) => row.tracking,
            sortable: true,
          },
          {
            name: 'Weight',
            selector: (row) => `${row.weight} Kg`,
            sortable: true,
          },
          {
            name: 'Cost ($)',
            selector: (row) => row.cost,
            sortable: true,
          },
          {
            name: 'Count',
            selector: (row) => row.count,
            sortable: true,
          },
          {
            name: 'Courier',
            selector: (row) => (
              <img src={row.courier} width="25px" height="25px" alt="" />
            ),
            sortable: true,
          },
          {
            name: 'Event',
            selector: (row) => row.event,
            sortable: true,
          },
          {
            name: 'Date',
            selector: (row) =>
              new Date(row.date).toLocaleString('UTC', {
                month: 'numeric',
                day: '2-digit',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              }),
            sortable: true,
          },
          {
            name: 'Actions',
            selector: (row) => (
              <Button onClick={() => alert('Action Triggered')}>
                Send Back
              </Button>
            ),
          },
          {
            name: '',
            selector: (row) => (
              <FaRegEye onClick={() => navigate(`/details/${row.id}`)} />
            ),
          },
        ]}
        data={mock}
      />
    </Container>
  );
};

export default Screen1;
