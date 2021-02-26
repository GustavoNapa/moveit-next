// LINK PROPOSTA DE 2.0 no Figma
// https://www.figma.com/file/HOgR7FkXlOkTPAfHd1MOC9/Move.it-2.0-(Copy)?node-id=160%3A2761

import Head from "next/head";
import React from "react";

import { GetServerSideProps } from 'next'

import ChallengeBox from "../components/ChallengeBox";
import { CompletedChallanges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Index.module.css'
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface propsData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: propsData) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallanges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Pode fazer uma chamada API
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}

// Back-end (PHP)
// Next.js (Node.JS)
// Front-end (ReactJS)