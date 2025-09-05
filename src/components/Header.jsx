import Logo from "./Logo";
import "./Header.css";
import { Moon, SunMedium } from "lucide-react";

function Header({ toggleTheme, theme }) {
  return (
    <header>
      <div className="limit">
        <div>
          <Logo />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contacts">Contatos</a>
            </li>
          </ul>
          <span>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "dark" ? <Moon /> : <SunMedium />}
            </button>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
