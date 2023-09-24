import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";

export const DefaultLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-bg-pattern">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
};
