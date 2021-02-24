import { createContext, useState, ReactNode } from "react";
import challenges from "../../challenges.json";

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleteds: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenges:Challenge;
  resetChallenge:() => void;
  experienceNextLevel:number;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleteds, setChallengesCompleteds] = useState(0);

  const [activeChallenges, setActiveChallenges] = useState(null);

const experienceNextLevel = Math.pow((level + 1)*4,2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenges(challenge);
  }

  function resetChallenge(){
    setActiveChallenges(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        experienceNextLevel,
        currentExperience,
        challengesCompleteds,
        levelUp,
        startNewChallenge,
        activeChallenges,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
