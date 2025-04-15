import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "../index.css";

const Newsapp = () => {
  const [search, setSearch] = useState("America");
  const [newsData, setNewsData] = useState([]);
  const API_KEY = "60eab5562291429f950f0beb75bd3066";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    const newSearch = e.target.value;
    console.log(e.target.value);
    setSearch(newSearch);
    getData();
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>

        <div className="searchBar">
          <input type="text" placeholder="search news" onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className="head">
        <p>Stay Updated with Trendy News</p>
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value="sports">
          Sports
        </button>
        <button onClick={userInput} value="politics">
          Politics
        </button>
        <button onClick={userInput} value="entertainment">
          Entertainment
        </button>
        <button onClick={userInput} value="health">
          Health
        </button>
        <button onClick={userInput} value="fitness">
          Fitness
        </button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
