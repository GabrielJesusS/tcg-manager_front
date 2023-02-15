import { Footer } from "@/presentation/components/common/Footer";
import { Navbar } from "@/presentation/components/common/Navbar";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <button className="btn btn-primary">Botão</button>
        <a className="btn btn-success" href="">Botão</a>
      </main>
      <Footer></Footer>
    </>
  );
}
