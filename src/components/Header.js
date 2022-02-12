import useWindowResize from "../hooks/useWindowResize";
import "./Header.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
  const [mq] = useWindowResize("(min-width: 800px)");
  return <>{mq ? <HeaderDesktop /> : <HeaderMobile />}</>;
};

export default Header;
