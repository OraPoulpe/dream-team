import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import { Counter } from "../UI/Counter/Сounter";
import { BookCard } from "../UI/BookCard/BookCard";
export const Book = ({ book }) => {
  // console.log(book);
  if (!book) {
    return null;
  }

  return (
    <div className={classnames(styles.card)}>
      <BookCard book={book} link={true} />
      <Counter bookId={book.id} />
    </div>
  );
};
