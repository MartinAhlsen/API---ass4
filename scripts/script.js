$(() => {
  console.log("hej");
  const END_POINT = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const getArtist = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let drink = data.drinks[0];

    console.log(drink.strDrink);

    $(".cocktail-wrapper")
      .empty()
      .append(
        `
        <h2>${drink.strDrink}</h2>
        <p class="instructions">${drink.strInstructions}</p>
        <img src="${drink.strDrinkThumb}">
      `
      );
  };

  $(".button-random").on("click", () => {
    getArtist(END_POINT);
  });
});
