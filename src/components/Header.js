import useWindowResize from "../hooks/useWindowResize";
import "./Header.css";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
const Header = ({ trolley, setTrolley }) => {
  const [mq] = useWindowResize("(min-width: 800px)");
  return (
    <>
      {mq ? (
        <HeaderDesktop trolley={trolley} setTrolley={setTrolley} />
      ) : (
        <HeaderMobile trolley={trolley} setTrolley={setTrolley} />
      )}
    </>
  );
};

export default Header;
