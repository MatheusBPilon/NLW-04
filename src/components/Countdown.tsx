import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

let test = true
export function Countdown() {
  const {
    minutes,
    seconds,
    active,
    finished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={test ? styles.countdownContainerDark : styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {finished ? (
        <button disabled className={test ? styles.CountdownButtonDark : styles.CountdownButton}>
          Ciclo Encerrado
        </button>
      ) : (
        <>
          {active ? (
            <button
              type="button"
              className={test ? `${styles.CountdownButtonDark} ${styles.CountdownButtonActiveDark}` : `${styles.CountdownButton} ${styles.CountdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={test ? styles.CountdownButtonDark :styles.CountdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
