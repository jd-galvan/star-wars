import { SectionTitle } from "@/components/shared/SectionTitle/SectionTitle"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <SectionTitle title={'Starships'} />
      {children}
    </section>
  )
}

export default layout