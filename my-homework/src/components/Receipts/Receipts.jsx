// Создайте два компонента Receipts и Ingredients; В компоненте Receipts добавьте радио
// инпуты с возможностью выбора от 3х разных блюд. При выборе пользователем
// помещайте выбранный вариант в state "meal".

import React, { useState } from "react";
import Ingredients from "../Ingredients/Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState();
  return (
    <div>
      <input
        onChange={(e) => {
          setMeal(e.target.value);
        }}
        type="radio"
        value="рамен"
        name="food"
      />{" "}
      <label>рамен</label>
      <input
        onChange={(e) => {
          setMeal(e.target.value);
        }}
        type="radio"
        value="манты"
        name="food"
      />
      <label>манты</label>
      <input
        onChange={(e) => {
          setMeal(e.target.value);
        }}
        type="radio"
        value="дурум"
        name="food"
      />
      <label>дурум</label>
      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
