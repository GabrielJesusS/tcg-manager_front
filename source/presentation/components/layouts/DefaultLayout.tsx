import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";

export const DefaultLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
};
