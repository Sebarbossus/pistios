import Navbar from "./Navbar";
import CookieConsent from "react-cookie-consent";

const Layout = ({ children, categories, seo }) => {
  return (
    <>
      <Navbar categories={categories} />
      {children}
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
};

export default Layout;
