import { SectionTitle } from "@/components/shared/SectionTitle/SectionTitle"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <SectionTitle title={'Planets'} />
      {children}
    </section>
  )
}

export default layout