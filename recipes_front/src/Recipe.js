import React, { useState, useEffect } from 'react';



function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/recipes/');
        const data = await response.json();
        setRecipes(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []); // Пустой массив зависимостей означает, что запрос будет выполнен один раз при монтировании компонента
  
  console.log(recipes);

  return (
    <div className="Categories">
      <h1>Рецепты:</h1>
    </div>
  );
}

export default Recipe;
