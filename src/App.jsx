import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from "./redux/features/dataSlice"
import StatesData from './components/StatesData';

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.info.covidData);
  // const { data : {states} } = useSelector((state) => state.info.covidData);

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);
  
  const SearchStates = (e) => {
    e.preventDefault();
    setSearchResults(data?.states.filter(state => state.state.toLowerCase().includes(query.toLowerCase())));
    setQuery('');
  }

  return (
      <div className='app'>
          <h1>Covid-19 Data Nigeria</h1>
          <div className='container'>
              <p>Total Samples Tested : {data?.totalSamplesTested}</p>
              <p>Total Confirmed Cases : {data?.totalConfirmedCases}</p>
              <p>Total Active Cases : {data?.totalActiveCases}</p>
              <p>Total Discharged : {data?.discharged}</p>
              <p>Total Deaths : {data?.death}</p>
          </div>
          <h1>Covid-19 Data Nigeria By State</h1>
          <form className='form' onSubmit={SearchStates}>
              <label htmlFor='query'>Search for a state:</label>
              <input
                  type='text'
                  id='query'
                  value={query}
                  placeholder='Search for a state'
                  onChange={(e) => setQuery(e.target.value)}
              />
              <button type='submit'>Search</button>
          </form>
            {searchResults.map((states) => (
                <StatesData key={states.id} states={states} />
            ))}
      </div>
  );
}

export default App;

// summary of the data: totalSamplesTested, totalConfirmedCases, totalActiveCases, discharged, death, states
