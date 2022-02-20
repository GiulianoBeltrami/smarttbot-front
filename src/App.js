import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Resumo from './components/Resumo/Resumo';
import NewRobots from './components/NewRobots/NewRobots';
import Loader from './components/Loader/Loader';
import RobotsCard from './components/RobotsCard/RobotsCard';
import { useGetOverviewQuery, useGetStrategiesQuery, useGetAllRobotsQuery } from './services/smarttbotApi';
import React from 'react';

function App() {

  const { data: overview, isFetching: isFetchingOverview } = useGetOverviewQuery();
  const { data: strategies, isFetching: isFetchingStrategies } = useGetStrategiesQuery();
  const { data: allRobots, isFetching: isFetchingAllRobots } = useGetAllRobotsQuery();

  if (isFetchingOverview || isFetchingStrategies || isFetchingAllRobots) {
    return <Loader />;
  }

  console.log(allRobots)
  return (
    <Container fluid data-testid="app-container" style={{ backgroundColor: '#F5F5F5' }} className="px-4 py-3">
      <Navbar />
      <Resumo data={overview} />
      <NewRobots data={strategies} />
      <RobotsCard data={allRobots}/>
    </Container>
  );
}

export default App;
