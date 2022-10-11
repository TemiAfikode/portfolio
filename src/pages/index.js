import {
  About,
  Contact,
  Featured,
  Hero,
  Jobs,
  Layout,
  Projects,
} from "components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Jobs />
      <Contact />
    </Layout>
  );
}
