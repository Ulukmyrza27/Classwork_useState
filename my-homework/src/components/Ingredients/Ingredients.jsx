// Сделайте так чтобы state "meal" пропсами передавался в компонент Ingredients. В
// компоненте Ingredients сделайте отображение ингредиентов к этому конкретному
// блюду. При нажатии на выбор список ингредиентов должен меняться.
import React from "react";

const Ingredients = ({ meal }) => {
  return (
    <div>
      {meal === "манты" ? <p>Мука, лук, мясо</p> : null}
      {meal === "дурум" ? <p>Лаваш мясо салат</p> : null}
      {meal === "рамен" ? <p>Рис Огурцы Соевый соус</p> : null}
    </div>
  );
};

export default Ingredients;
