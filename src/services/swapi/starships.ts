export const getStarships = async (url: string) => {
  try {
    const response = await fetch(url)
    const { next, previous, results } = await response.json()
    const nextPage = next?.slice(-1)
    const previousPage = previous?.slice(-1)

    const starships = results.map(e => {
      return {
        name: e.name,
        model: e.model,
        manufacturer: e.manufacturer,
        cost_in_credits: e.cost_in_credits,
        length: e.length,
        max_atmosphering_speed: e.max_atmosphering_speed,
        crew: e.crew,
        passengers: e.passengers,
        cargo_capacity: e.cargo_capacity,
      }
    })

    return { nextPage, previousPage, starships }
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred')
  }
}