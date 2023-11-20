import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

function App() {
  return (
    <Contaier>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/details/:id" element={<Screen2 />} />
      </Routes>
    </Contaier>
  );
}

const Contaier = styled.div``;
export default App;
