export const getCharacters = async (page: string) => {
  try {
    const url = process.env.SWAPI_BASE_PATH + `/people?page=${page}`
    const response = await fetch(url)
    const { next, previous, results } = await response.json()

    const nextPage = next?.slice(-1)
    const previousPage = previous?.slice(-1)


    const regex = /\/(\d+)\/$/
    const characters = results.map(e => {

      const id = e.url.match(regex)?.[1]

      return {
        name: e.name,
        id: id
      }
    })

    return { nextPage, previousPage, characters }
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred')
  }
}

export const getCharacterById = async (id: string) => {
  const url = process.env.SWAPI_BASE_PATH + `/people/${id}`
  const response = await fetch(url)
  const character = await response.json()

  return {
    name: character.name,
    height: character.height,
    mass: character.mass,
    hair_color: character.hair_color,
    skin_color: character.skin_color,
    eye_color: character.eye_color,
    birth_year: character.birth_year,
    gender: character.gender,
  }
}