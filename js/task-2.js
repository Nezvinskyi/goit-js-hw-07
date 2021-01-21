const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const createIngridient = ingredient => {
	const liRef = document.createElement('li');
	liRef.textContent = ingredient;
	return liRef;
}

const ingredientsMarkup = ingredients.map(ingredient => createIngridient(ingredient));

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...ingredientsMarkup);