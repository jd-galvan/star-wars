export const getPlanets = async (url: string) => {
  try {
    const response = await fetch(url)
    const { next, previous, results } = await response.json()
    const nextPage = next?.slice(-1)
    const previousPage = previous?.slice(-1)

    const planets = results.map((e: PlanetType) => {
      return {
        name: e.name,
      }
    })
    return { nextPage, previousPage, planets }
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred')
  }
}