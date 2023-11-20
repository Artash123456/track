import styled from 'styled-components';
import { Container, Header } from './styled';
import { SlRefresh } from 'react-icons/sl';
import { FaFlagUsa } from 'react-icons/fa6';
import { CiPlane } from 'react-icons/ci';
import { mock } from '../data';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';
import { CiCalendarDate } from 'react-icons/ci';
import Table from './Table';
import { MdExpandCircleDown } from 'react-icons/md';
import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

const Screen2 = () => {
  const [expanded, setExpanded] = useState(null);
  const location = useLocation();
  const selected = useMemo(() => {
    return mock.find(
      (item) => String(item.id) === location.pathname.split('/').at(-1)
    );
  }, [location.pathname]);
  return (
    <Container>
      <Header>
        <Info>
          <div>
            <FaFlagUsa />
            <CiPlane />
            <span>
              Group Id: <b>{selected.group_id}</b> 2 Items
            </span>
          </div>
          <div>
            <IoPersonOutline />
            <span>
              {selected.full_name} {selected.pass}
            </span>
            <CiCalendarDate />
            <span>
              {new Date(selected.date).toLocaleString('UTC', {
                day: 'numeric',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        </Info>
        <div className="refresh">
          <SlRefresh /> Change Status
        </div>
      </Header>
      <Table
        expand_id={expanded}
        expandableRowsComponent={ExpandedComponent}
        columns={[
          { name: 'Country', selector: (row) => 'USA' },
          {
            name: 'Recipient',
            selector: (row) => `${row.recipient} ${row.pass}`,
          },
          {
            name: 'Tracking',
            selector: (row) => (
              <LongText>
                <span>{row.tracking}</span>
                <MdExpandCircleDown
                  onClick={() =>
                    setExpanded((p) => (p === null ? row.id : null))
                  }
                />
              </LongText>
            ),
          },
          {
            name: 'Weight',
            selector: (row) => row.weight,
          },
          {
            name: 'Cost',
            selector: (row) => row.cost,
          },
        ]}
        expandableRows
        data={[selected]}
      />
      <AdditionalInfo>
        <div>
          <span>FIO</span>
          <span>
            {selected.full_name} <IoCopyOutline />
          </span>
        </div>
        <div>
          <span>Address</span>
          <span>
            {selected.address} <IoCopyOutline />
          </span>
        </div>
        <div>
          <span>Cell</span>
          <span>
            {selected.tel} <IoCopyOutline />
          </span>
        </div>
        <div>
          <span>Index</span>
          <span>
            {selected.index} <IoCopyOutline />
          </span>
        </div>
        <div>
          <span>Weight (KG)</span>
          <span>
            {selected.weight} <IoCopyOutline />
          </span>
        </div>
        <div>
          <span>Declaration Sum</span>
          <span>
            {selected.cost} <IoCopyOutline />
          </span>
        </div>
      </AdditionalInfo>
    </Container>
  );
};
const ExpandedComponent = ({ data }) => {
  return (
    <Table
      columns={[
        {},
        { name: '', selector: (row) => row.name },
        { name: '', selector: (row) => row.name },
        { name: '', selector: (row) => row.weight },
        { name: '', selector: (row) => row.weight },
      ]}
      data={[data]}
      noTableHead
    />
  );
};
const AdditionalInfo = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-top: 24px;
  display: grid;
  grid-row-gap: 10px;
  > div {
    > span:first-child {
      font-weight: 600;
      margin-right: 16px;
    }
    > span:last-child {
      color: gray;
    }
  }
`;
const Info = styled.div`
  display: grid;

  > div {
    display: flex;
    align-items: center;
    &:first-child {
      margin-bottom: 5px;
    }
    > span,
    > svg {
      color: gray;
      margin-right: 5px;
      > b {
        color: #000;
      }
    }
  }
`;
const LongText = styled.div`
  display: flex;
  align-items: center;
  > span {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > svg {
    font-size: 1.6rem;
    color: lightgray;
    cursor: pointer;
  }
`;
export default Screen2;
