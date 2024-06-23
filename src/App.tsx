import React from "react";
import "./App.css";
import TodoList from "./Todolist";
import Clock from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  let name = "리액트";

  return (
    <div className="container">
      <TodoList />
      {/* <Clock /> */}
      <MyWeather weather="맑음">일기 예보</MyWeather>
    </div>
  );
}

export default App;
