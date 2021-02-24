import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import ChallengeBox from "../components/ChallengeBox";
import { CompletedChallanges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

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
    </div>
  )
}
