import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Food = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("Search and Get Recipes");

  // Handle input changes
  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  // Fetch data from the API
  const myFun = async () => {
    if (!search.trim()) {
      setMsg("Please Enter Something");
      setData([]);
      return;
    }
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await response.json();
      if (jsonData.meals) {
        setData(jsonData.meals);
        setMsg("Your Search Results");
      } else {
        setData([]);
        setMsg("No Recipes Found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMsg("Error fetching data");
    }
  };

  return (
    <>
      <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
          <input
            placeholder='Search Meals'
            type='text'
            value={search}
            onChange={handleInput}
          />
          <button onClick={myFun}>Search</button>
        </div>
        <h2 className='msg'>{msg}</h2>
        <Cards detail={data} />
      </div>
    </>
  );
};

export default Food;
