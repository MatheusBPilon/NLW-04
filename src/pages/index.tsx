import Head from "next/head";
import {GetServerSideProps} from 'next';
import React from "react";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountDownProvider } from "../context/CountdownContext";
import styles from "../styles/pages/Home.module.css";
import { ChallengesProvider } from "../context/ChallengesContext";

interface HomeProps{
  level: number,
  currentExperience: number,
  challengesCompleteds: number,
}

export default function Home(props: HomeProps) {
  console.log(props)
  return (
    <ChallengesProvider level={props.level} 
    currentExperience={props.currentExperience}
    challengesCompleteds={props.challengesCompleteds}
    >
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBar />
      <CountDownProvider>
        <section>
          <div>
            <Profile  />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  </ChallengesProvider>
  );
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
 
  
  const {level, currentExperience,challengesCompleteds} = ctx.req.cookies;

  return {
    props: {
    level:Number(level),
    currentExperience:Number(currentExperience),
    challengesCompleteds:Number(challengesCompleteds)
  }};
};
