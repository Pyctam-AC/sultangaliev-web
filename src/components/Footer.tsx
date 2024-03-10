import { FC, useContext } from "react"
import LangContexts from "../contexts/LangContexts";
import { textFooter } from "../utils/textsPage";

const Footer:FC = () => {

  const lang = useContext(LangContexts);

  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {textFooter[lang].text} {date}</p>
    </footer>
  )
};

export default Footer;
