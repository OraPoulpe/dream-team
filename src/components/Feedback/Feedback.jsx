import React from "react";
import styles from "./styleFeedback.module.css";

const Feedback = () => {
  const token = "5833738553:AAEMCjrwc4cdRe389dVNBmFhmXuNt5XCjGI";
  const chatId = "-870490551";

  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valueText, setValueText] = React.useState("");

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
    setValueEmail("");
    setValueText("");
    // console.log(event);
  };

  return (
    <div className={styles.feedback_layout}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <legend>Форма для связи с нами</legend>

        <div className={styles.input_layout}>
          <label>Как вас зовут</label>
          <input
            value={valueName}
            type="text"
            placeholder=""
            onChange={(e) => {
              setValueName(e.target.value);
            }}
          />
        </div>

        <div className={styles.input_layout}>
          <label>Введите почту</label>
          <input
            value={valueEmail}
            type="email"
            placeholder=""
            onChange={(e) => {
              setValueEmail(e.target.value);
            }}
          />
        </div>

        <div className={styles.input_layout}>
          <label>Введите сообщение</label>
          <textarea
            value={valueText}
            type="text"
            placeholder=""
            onChange={(e) => {
              setValueText(e.target.value);
            }}
          />
        </div>

        <button className={styles.button_submit} type="submit">Отправить форму</button>
      </form>
    </div>
  );
};

export default Feedback;
