import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/CompletedChallenges.module.css";

let test = true

export function ChallengeBox() {
  const { activeChallenges, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);
  function handleChallengeSuccess() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFail() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={test ? styles.ChallengeBoxContainerDark : styles.ChallengeBoxContainer}>
      {activeChallenges ? (
        <div className={test ? styles.ChallengeActiveDark : styles.ChallengeActive}>
          <header> Ganhe {activeChallenges.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenges.type}.svg`} />
            <strong>Novo Deafio</strong>
            <p>{activeChallenges.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={test ? styles.challengeFailedButtonDark : styles.challengeFailedButton}
              onClick={handleChallengeFail}
            >
              Falhei
            </button>
            <button
              type="button"
              className={test? styles.challengeSuccessButtonDark : styles.challengeSuccessButton}
              onClick={handleChallengeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={test ? styles.ChallengeNotActiveDark : styles.ChallengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
