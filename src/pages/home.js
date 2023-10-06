import React, { useState } from 'react';
import MealPreviwGrid from '../components/mealPreviwGrid';
import Navbar from '../components/navbar';
import SearchBox from '../components/searchBox/index';
import '../App.css';

function Home() {
  const [buscar, setBuscar] = useState('');

  const busqueda = (query) => {
    setBuscar(query);
  };

  return (
    <div className='page'>
      <Navbar>
        <SearchBox onSearch={busqueda} />
      </Navbar>
      <MealPreviwGrid searchQuery={buscar} /> 
    </div>
  );
}

export default Home;

