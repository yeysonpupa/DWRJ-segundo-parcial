import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMealById } from '.././services/mealtService';
import SearchBox from '../components/searchBox/index';
import Navbar from '../components/navbar';
import '../App.css';

function RecipeDetailPage() {
  const { id } = useParams(); 
  const [receta, setReceta] = useState(null);

  // Fetch por id
  useEffect(() => {
    async function detalles() {
      try {
        const detalle = await FetchMealById(id);
        setReceta(detalle);
      } catch (error) {
        console.error(error);
      }
    }

    detalles();
  }, [id]);

  if (!receta) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='page'>
        <Navbar>
            <SearchBox />
        </Navbar>
        <div className='meal-detail-container'>
            <h2>{receta.strMeal}</h2>
            <img src={receta.strMealThumb} alt={receta.strMeal} />
        </div>
    </div>
  );
}

export default RecipeDetailPage;
