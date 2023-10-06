import React, { useEffect, useState } from 'react';
import MealPreviw from '../mealPreview/index';
import { FetchMealByFirstLetter, SearchMealByName } from '../../services/mealtService';
import './index.css';
import { Link } from 'react-router-dom';

function MealPreviwGrid({ searchQuery }) {
  const [recetas, setRecetas] = useState([]);

  // Fetch comidas
  useEffect(() => {
    async function comidas() {
      try {
        let receta;
        if (searchQuery) {
			// Si se busca algo
          receta = await SearchMealByName(searchQuery);
        } else {
			// Vista por default
          receta = await FetchMealByFirstLetter('b');
        }
        setRecetas(receta);
      } catch (error) {
        console.error(error);
      }
    }
    comidas();
  }, [searchQuery]);

  return (
    <div className="meal-grid">
      {recetas && recetas.length > 0 ? (
        recetas.map((recipe) => (
          <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
            <MealPreviw meal={recipe} />
          </Link>
        ))
      ) : (
        <p>Sin resultados...</p>
      )}
    </div>
  );
}

export default MealPreviwGrid;
