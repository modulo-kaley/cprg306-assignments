"use client";

import { useState, useEffect } from "react";

// Fetches meal suggestions from the free MealDB API filtered by ingredient.
// Returns an empty array if the API returns no results.
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

// Displays a list of meal ideas for the given ingredient.
// Re-fetches automatically whenever the ingredient prop changes.
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    async function loadMealIdeas() {
      const meals = await fetchMealIdeas(ingredient);
      setMeals(meals);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
