import { FC } from "react";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";

export const DefaultLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};
