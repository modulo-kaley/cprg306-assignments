"use client";

// useState tracks the meals we get back from the API
// useEffect lets us re-fetch whenever the ingredient changes
import { useState, useEffect } from "react";

// outside the component so it's not recreated on every render
// hits TheMealDB and returns meals matching the ingredient, or empty if nothing found
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  
  // holds the list of meals — starts empty until the API responds
  const [meals, setMeals] = useState([]);

  // re-runs any time ingredient changes — new item clicked = new fetch
  useEffect(() => {
    if (ingredient) {
      async function loadMealIdeas() {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
      }
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          // idMeal is the unique ID the API gives each meal — used as React's key
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}