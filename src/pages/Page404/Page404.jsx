import photo from "./img/404.svg";
import "./Page404.scss";

export default function Page404() {
  return (
    <main className="not-found">
      <img src={photo} alt="Ошибка 404" />
      <h1 className="not-found__title">Упс, страница не найдена.</h1>
      <p className="not-found__subtitle">
        Проверьте введенный url-адрес или перейдите на
        {" "}
        <a href="/">главную страницу.</a>
      </p>
    </main>
  );
}
