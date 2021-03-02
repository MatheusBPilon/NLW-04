import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";
export function ExperienceBar() {
  let test = true
 
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={ test ? styles.experienceBarDark : styles.experienceBar }>
     
      <span>0 xp</span>
      <div>
        <div style={{ width: percentToNextLevel + "%" }} />
        {console.log("% para o next amizade:" +  percentToNextLevel)}
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
      {console.log("xp para o next amizade:" + experienceToNextLevel)}
    </header>
  );
}
