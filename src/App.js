import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resumo from './components/Resumo/Resumo';
import NewRobots from './components/NewRobots/NewRobots';
import ModalRobot from './components/ModalRobot/ModalRobot';

function App() {
  return (
    <Container fluid data-testid="app-container" style={{ backgroundColor: '#F5F5F5' }} className="px-4 py-3">
      <Navbar />
      <Resumo />
      <NewRobots />
    </Container>
  );
}

export default App;
