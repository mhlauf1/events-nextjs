import { HomePage } from "../components/home/homePage";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";


export default function Home({ data }) {
  return (
    <>
      <Hero />
      <About />
      <HomePage data={data} />
    </>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');

  return {
    props: {
      data: events_categories
    }
  }
}