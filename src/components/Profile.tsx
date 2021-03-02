import React, { useContext } from "react";
import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from "../context/ChallengesContext";
import { Fire } from "./Fire";
export function Profile() {
  let test = true;
  const {
    activeChallenges,
    resetChallenge,
    completeChallenge,
    level,
  } = useContext(ChallengesContext);

  return (
    <div className={test ? styles.profileCotainerDark : styles.profileCotainer}>
      <img src="https://github.com/MatheusBPilon.png" alt="/" />
      <div>
        <strong>Matheus Pilon</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level:{" "}
          {level % 2 == 0 ? (
            <span>
              <Fire />
              <span>{level}</span>
            </span>
          ) : (
            level
          )}
        </p>
      </div>
    </div>
  );
}
