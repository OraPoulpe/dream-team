import { useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../context/ThemeProvider";
import "./Titles.scss";

export default function Titles({ title, subtitle }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames("title-block", { dark: theme === "dark" })}>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
