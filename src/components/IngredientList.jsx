const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.handelAdd(ingredient)} type="submit">
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
