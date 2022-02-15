import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resumo from './components/Resumo/Resumo';

function App() {
  return (
    <Container fluid data-testid="app-container" style={{backgroundColor:'#F5F5F5'}} className="px-4 py-3">
      <Navbar />
      <Resumo />
    </Container>
  );
}

export default App;
