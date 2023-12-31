export const getPlanets = async (url: string) => {
  try {
    const response = await fetch(url)
    const { next, previous, results } = await response.json()
    const nextPage = next?.slice(-1)
    const previousPage = previous?.slice(-1)

    const planets = results.map(e => {
      return {
        name: e.name,
        rotation_period: e.rotation_period,
        orbital_period: e.orbital_period,
        diameter: e.diameter,
        climate: e.climate,
        gravity: e.gravity,
        terrain: e.terrain,
        surface_water: e.surface_water,
        population: e.population
      }
    })
    return { nextPage, previousPage, planets }
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred')
  }
}