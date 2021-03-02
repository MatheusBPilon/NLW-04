import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from "../../challenges.json";
import Cookies from "js-cookie";
import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleteds: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenges: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleteds: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ? rest.level : 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ? rest.currentExperience : 0);
  const [challengesCompleteds, setChallengesCompleteds] = useState(rest.challengesCompleteds);

  const [activeChallenges, setActiveChallenges] = useState(null);
  const [isLevelUpModalOpen,setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleteds", String(challengesCompleteds));
  }, [level, currentExperience, challengesCompleteds]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenges(challenge);

    //new Audio("./notification.mp3").play();

    // if (Notification.permission === "granted") {
    //  new Notification("Novo Desafio 🥳", {
    //    body: `Valendo ${challenge.amount}`,
    //  });
    // }
  }

  function resetChallenge() {
    setActiveChallenges(null);
  }

  function completeChallenge() {
    if (!activeChallenges) {
      return;
    }
    const { amount } = activeChallenges;
    let finalExperience = currentExperience + amount;

    if (finalExperience > experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenges(null);
    setChallengesCompleteds(challengesCompleteds + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        experienceToNextLevel,
        currentExperience,
        challengesCompleteds,
        levelUp,
        startNewChallenge,
        activeChallenges,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
  );
}
