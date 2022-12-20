import React from "react";
import styles from "./styleFeedback.module.css";
import svgFeedback from "./svgFeedback.svg";

const Feedback = () => {
  const token = "5833738553:AAEMCjrwc4cdRe389dVNBmFhmXuNt5XCjGI";
  const chatId = "-870490551";
  // const chatId = "997039388";

  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valueText, setValueText] = React.useState("");
  const [valueConsent, setValueConsent] = React.useState(false);

  const [isCorrectName, setIsCorrectName] = React.useState(false);
  const [isCorrectEmail, setIsCorrectEmail] = React.useState(false);

  /*
  Send Form and Post request
  */

  const handleSubmit = async (event) => {
    let message = `Новое сообщение 
                    %0AИмя: ${valueName} 
                    %0AПочта: ${valueEmail}
                    %0AСообщение: ${valueText}`;

    event.preventDefault();
    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`,
      {
        method: "GET",
      }
    );
    setValueName("");
    setIsCorrectName(false);
    setValueEmail("");
    setIsCorrectEmail(false);
    setValueText("");
    setValueConsent(false);
  };

  /*
  Change Button Style
  */
  const checkStyle = () => {
    if (valueConsent && isCorrectName && isCorrectEmail) {
      return styles.button_submit_correct;
    } else {
      return styles.button_submit_not_correct;
    }
  };

  /*
  Validation Name
  */

  const isValidName = (valueName) => {
    const text = document.getElementById("valid-name");
    if (/^[a-zA-Z0-9а-яА-Я]+$/.test(valueName) || valueName === "") {
      text.style.visibility = "hidden";
      setIsCorrectName(true);
    } else {
      text.style.visibility = "visible";
      setIsCorrectName(false);
    }
  };

  /*
  Validation Email
  */

  const isValidEmail = (valueEmail) => {
    const text = document.getElementById("valid-email");

    if (
      (/^[a-z0-9@.]+$/.test(valueEmail) &&
        valueEmail.indexOf("@") !== -1 &&
        valueEmail[0] !== "." &&
        valueEmail[0] !== "_" &&
        valueEmail.indexOf(".") !== -1 &&
        valueEmail[valueEmail.indexOf("@") + 1] !== "." &&
        valueEmail.slice(-1) !== ".") ||
      valueEmail === ""
    ) {
      text.style.visibility = "hidden";
      setIsCorrectEmail(true);
    } else {
      text.style.visibility = "visible";
      setIsCorrectEmail(false);
    }
  };

  const checkDisabled = () => {
    if (valueConsent && isCorrectName && isCorrectEmail) {
      return false;
    } else {
      return true;
    }
  }

  

  return (
    <div className={styles.feedback_layout}>
      <img className={styles.svg} src={svgFeedback} />
      <form className={styles.form_layout} onSubmit={(e) => handleSubmit(e)}>
        <legend className={styles.text_main_form}>
          Форма для связи с нами
        </legend>

        <div className={styles.input_layout}>
          <label>Как вас зовут</label>
          <input
            className={styles.input}
            value={valueName}
            type="text"
            placeholder=""
            onChange={(e) => {
              isValidName(e.target.value);
              setValueName(e.target.value);
            }}
          />
        </div>

        <span className={styles.validName} id="valid-name">
          Имя не должно содержать знаков
        </span>

        <div className={styles.input_layout}>
          <label>Ваш Email</label>
          <input
            className={styles.input}
            value={valueEmail}
            type="email"
            placeholder=""
            onChange={(e) => {
              isValidEmail(e.target.value);
              setValueEmail(e.target.value);
            }}
          />
        </div>

        <span className={styles.validName} id="valid-email">
          Почта должна содержать @
        </span>

        <div className={styles.input_layout}>
          <label>Ваше сообщение</label>
          <textarea
            className={styles.input_textarea}
            value={valueText}
            type="text"
            placeholder=""
            onChange={(e) => {
              setValueText(e.target.value);
            }}
          />
        </div>

        <div className={styles.input_layout_checkbox}>
          <input
            className={styles.input_checkbox}
            type="checkbox"
            placeholder=""
            checked={valueConsent}
            onChange={() => {
              setValueConsent(!valueConsent);
            }}
          />
          <label>Даю согласие на обработку персональных данных</label>
        </div>
        <span></span>
        <button id = 'btn-submit' disabled={checkDisabled()} className={checkStyle()} type="submit">
          Отправить форму
        </button>
        
      </form>
    </div>
  );
};

export default Feedback;
