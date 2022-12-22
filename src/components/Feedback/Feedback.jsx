import { useState, useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "../../context/ThemeProvider";
import "./index.scss";
import svgFeedback from "./svgFeedback.svg";
import Titles from "../Titles/Titles";

function Feedback() {
  const { theme } = useContext(ThemeContext);
  const token = "5833738553:AAEMCjrwc4cdRe389dVNBmFhmXuNt5XCjGI";
  const chatId = "997039388";

  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueText, setValueText] = useState("");
  const [valueConsent, setValueConsent] = useState(false);

  const [isCorrectName, setIsCorrectName] = useState(false);
  const [isCorrectEmail, setIsCorrectEmail] = useState(false);

  const handleSubmit = async (event) => {
    const message = `Новое сообщение
                    %0AИмя: ${valueName}
                    %0AПочта: ${valueEmail}
                    %0AСообщение: ${valueText}`;

    event.preventDefault();
    await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`, {
      method: "GET",
    });
    setValueName("");
    setIsCorrectName(false);
    setValueEmail("");
    setIsCorrectEmail(false);
    setValueText("");
    setValueConsent(false);
  };

  const isValidName = (name) => {
    const text = document.getElementById("valid-name");
    const nameTrim = name.trim();

    if (/^[a-zA-Z0-9а-яА-Я]+$/.test(nameTrim) || nameTrim === "") {
      text.style.visibility = "hidden";
      setIsCorrectName(true);
    } else {
      text.style.visibility = "visible";
      setIsCorrectName(false);
    }
    if (nameTrim === "") {
      setIsCorrectName(false);
    }
  };

  const isValidEmail = (email) => {
    const text = document.getElementById("valid-email");
    const emailTrim = email.trim();

    if (
      (/^[a-z0-9@.]+$/.test(emailTrim) &&
        emailTrim.indexOf("@") !== -1 &&
        emailTrim[0] !== "." &&
        emailTrim[0] !== "_" &&
        emailTrim.indexOf(".") !== -1 &&
        emailTrim[emailTrim.indexOf("@") + 1] !== "." &&
        emailTrim.slice(-1) !== ".") ||
      emailTrim === ""
    ) {
      text.style.visibility = "hidden";
      setIsCorrectEmail(true);
    } else {
      text.style.visibility = "visible";
      setIsCorrectEmail(false);
    }
    if (emailTrim === "") {
      setIsCorrectEmail(false);
    }
  };

  return (
    <section className={classNames("feedback", { dark: theme === "dark" })}>
      <Titles title="Мы всегда на связи" subtitle="Ваши предложения и отзывы" />
      <div className="feedback__layout">
        <img className="svg" src={svgFeedback} alt="Изображение" />
        <form className="feedback__form" onSubmit={(e) => handleSubmit(e)}>
          <span className="form__title">Форма для связи с нами</span>

          <div className="form__input">
            <label className="input__label" htmlFor="name">
              Как вас зовут
            </label>
            <input
              className="input__field"
              value={valueName}
              type="text"
              placeholder=""
              onChange={(e) => {
                isValidName(e.target.value);
                setValueName(e.target.value);
              }}
              id="name"
            />
          </div>

          <span className="form__validation" id="valid-name">
            Имя не должно содержать знаков
          </span>

          <div className="form__input">
            <label className="input__label" htmlFor="email">
              Введите почту
            </label>
            <input
              className="input__field"
              value={valueEmail}
              type="email"
              placeholder=""
              onChange={(e) => {
                isValidEmail(e.target.value);
                setValueEmail(e.target.value);
              }}
              id="email"
            />
          </div>

          <span className="form__validation" id="valid-email">
            Почта должна содержать @
          </span>

          <div className="form__input">
            <label className="input__label" htmlFor="message">
              Введите сообщение
            </label>
            <textarea
              className="input__textarea"
              value={valueText}
              type="text"
              placeholder=""
              onChange={(e) => {
                setValueText(e.target.value);
              }}
              id="message"
            />
          </div>

          <div className="form__input checkbox">
            <input
              className="input__checkbox"
              type="checkbox"
              placeholder=""
              checked={valueConsent}
              onChange={() => {
                setValueConsent(!valueConsent);
              }}
              id="consent"
            />
            <label className="input__label" htmlFor="consent">
              Даю согласие на обработку персональных данных
            </label>
          </div>
          <span />
          <button
            disabled={!(valueConsent && isCorrectName && isCorrectEmail)}
            className={classNames("form__submit-btn", {
              incorrect: !(valueConsent && isCorrectName && isCorrectEmail),
            })}
            type="submit"
          >
            Отправить форму
          </button>
        </form>
      </div>
    </section>
  );
}

export default Feedback;
