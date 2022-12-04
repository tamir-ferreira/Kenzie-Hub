import logo from "../../images/logo.svg";
import { Button } from "../Button";

export const Header = ({ className, onClick, children }) => {
  return (
    <header>
      <nav className={className}>
        <img src={logo} alt="logotipo Kenzie Hub" />
        <Button
          type="button"
          onClick={onClick}
          size="small"
          color="dark_gray"
          children={children}
        />
      </nav>
    </header>
  );
};
