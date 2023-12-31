export const getStarships = async (url: string) => {
  try {
    const response = await fetch(url)
    const { next, previous, results } = await response.json()
    const nextPage = next?.slice(-1)
    const previousPage = previous?.slice(-1)

    const starships = results.map((e: StarshipType) => {
      return {
        name: e.name,
      }
    })

    return { nextPage, previousPage, starships }
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred')
  }
}