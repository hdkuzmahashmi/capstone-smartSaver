import Footer from "@/components/Footer";
import GlobalStyle from "../styles";
import Header from "@/components/Header";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
