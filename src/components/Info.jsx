import { useMemo } from 'react';
import styled from 'styled-components';
const Info = ({ data, selected_count }) => {
  const orders_selected = useMemo(() => {
    if (!data) return { total_count: 0, total_orders: 0, total_weight: 0 };
    return {
      total_orders: data?.length,
      total_weight: data.reduce((a, b) => a + b.weight, 0),
      total_count: data.reduce((a, b) => a + b.count, 0),
    };
  }, [data]);
  return (
    <StyledInfo>
      <div>Resieve {selected_count} orders</div>
      <div>
        <div>Total orders {orders_selected.total_orders}</div>
        <div>Total weight {orders_selected.total_weight}</div>
        <div>Total count {orders_selected.total_count}</div>
      </div>
    </StyledInfo>
  );
};
const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  > div:first-child {
    background: gray;
    padding: 6px 16px;
    border-radius: 8px;
    color: #fff;
  }
  > div:last-child {
    display: flex;
    > div {
      color: gray;
    }
    > div:not(:last-child) {
      margin-right: 16px;
    }
  }
`;
export default Info;
