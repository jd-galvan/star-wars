import { SectionTitle } from "@/components/shared/SectionTitle/SectionTitle"

function CharactersLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <SectionTitle title={'Characters'} />
      {children}
    </section>
  )
}

export default CharactersLayout