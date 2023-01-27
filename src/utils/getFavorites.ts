
export const getFavorites = (): number[] => {
  // if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('pokemons') || '[]');
}
