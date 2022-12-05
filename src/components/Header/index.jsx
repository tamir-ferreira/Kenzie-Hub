import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Button } from "../Button";

export const Header = ({ className }) => {
  return (
    <header>
      <nav className={className}>
        <img src={logo} alt="logotipo Kenzie Hub" />
        <Link to={`/`}>
          <Button size="small" color="dark_gray" children="Voltar" />
        </Link>
      </nav>
    </header>
  );
};
