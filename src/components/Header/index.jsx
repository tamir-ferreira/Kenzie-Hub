import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export const Header = ({ className, onClick, children }) => {
  return (
    <header>
      <nav className={className}>
        <img src={logo} alt="logotipo Kenzie Hub" />
        <Link to={`/`}>
          <Button
            size="small"
            color="dark_gray"
            onClick={onClick}
            children={children}
          />
        </Link>
      </nav>
    </header>
  );
};
