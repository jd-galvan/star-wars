import { getCharacterNameAndImageById } from "@/services/akabab/characters";
import Image from "next/image";

interface CharacterPageProps {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params }: CharacterPageProps) {
  const id = params.id
  const { name, image } = await getCharacterNameAndImageById(id)

  return {
    title: name + " - Star Wars Guide",
    openGraph: {
      images: [image]
    }
  }
}

async function CharacterImage(props: CharacterPageProps) {
  const { id } = props.params
  const { name, image } = await getCharacterNameAndImageById(id)

  return (
    <Image width={200} height={270} src={image} alt={name} />
  )
}

export default CharacterImage