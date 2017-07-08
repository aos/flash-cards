export const cardById = (state, getters) => (id) => {
  return state.allCards.find((card) => card._id === id)
}