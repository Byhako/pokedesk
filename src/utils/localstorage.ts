export const saveFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('pokemons') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item != id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('pokemons', JSON.stringify(favorites));
}
