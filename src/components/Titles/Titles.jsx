import React from "react";
import "./Titles.scss";

export default function Titles({ title, subtitle }) {
  return (
    <div className="title-block">
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}
