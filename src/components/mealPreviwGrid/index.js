import React from 'react';

import MealPreviw from '../mealPreview';

import './index.css';

const MealPreviwGrid = () => {

	const meals = [];

	return (
		<div className='meal-grid'>
			{meals ? meals.map((meal) => (
				<MealPreviw key={meal.idMeal} meal={meal} />
			)): <h2>Search not found</h2>}
		</div>
	);
};

export default MealPreviwGrid;
