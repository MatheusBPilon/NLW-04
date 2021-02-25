import React, { useContext } from 'react'
import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from '../context/ChallengesContext'

export function Profile() {

  const { activeChallenges,resetChallenge,completeChallenge, level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileCotainer}>
      <img src="https://github.com/MatheusBPilon.png" alt="/" />
      <div>
        <strong>Matheus Pilon</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level: {level}
        </p>
      </div>
    </div>
  );
}
