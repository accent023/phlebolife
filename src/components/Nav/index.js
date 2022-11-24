import Link from "next/link";
import LangChanger from "../LangChanger";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useState } from "react";

const Nav = () => {
  const { db, locale } = useContext(AppContext);
  const [activeLink, setActiveLink] = useState(0);

  const activeLinkHandler = (index) =>
    setActiveLink((prevState) => (prevState = index));

  return (
    <div className="nav">
      <ul className="nav-list">
        {db.navigation.map((item, index) => (
          <li
            onClick={() => activeLinkHandler(index)}
            key={index}
            className={`${
              index == activeLink
                ? "nav-list__item nav-list__item--active"
                : "nav-list__item"
            }`}
          >
            <Link href={item.path} legacyBehavior>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <LangChanger />
    </div>
  );
};

export default Nav;
