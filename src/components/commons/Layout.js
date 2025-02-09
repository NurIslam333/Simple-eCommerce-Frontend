import Footer from "./footer";
import Header from "./header";
import Menubar from "./menubar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Menubar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
