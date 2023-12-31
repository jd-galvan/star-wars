export const getCharacterNameAndImageById = async (id: string) => {
  try {
    const url = process.env.AKABAB_URL?.replace('{id}', id) || ''
    const response = await fetch(url)
    const { name, image } = await response.json()
    return { name, image }
  } catch (error) {
    console.log(error)
    throw new Error('An error has occurred')
  }

}