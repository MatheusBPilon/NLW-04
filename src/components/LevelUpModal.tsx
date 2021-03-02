import { useContext } from "react";

import styles from "../styles/components/LevelUpModal.module.css";
import { ChallengesContext } from "../context/ChallengesContext";
let test = true
export function LevelUpModal() {
  
    const {level,closeLevelUpModal} = useContext(ChallengesContext)
  
    return (
    <div className={test ? styles.overlayDark :styles.overlay}>
      <div className={test ? styles.containerDark :styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>você alcançou um novo level</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
