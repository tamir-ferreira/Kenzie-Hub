import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { Button } from "../Button";

export const Header = ({ className, onClick }) => {
  return (
    <header>
      <nav className={className}>
        <img src={logo} alt="logotipo Kenzie Hub" />
        <Link to={`/`}>
          <Button
            size="small"
            color="dark_gray"
            onClick={onClick}
            children="Voltar"
          />
        </Link>
      </nav>
    </header>
  );
};
