import { useContext } from 'react'
import {ChallengesContext} from '../context/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'
export function CompletedChallenges(){
  const {challengesCompleteds} = useContext(ChallengesContext)
   let test = true
    return (
        <div className={test ? styles.completedChallengesContainerDark : styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleteds}</span>
        </div>
    )
}