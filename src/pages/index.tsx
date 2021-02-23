import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import { CompletedChallanges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Index.module.css'

export default function Home() {
  const [evolution, setEvolution] = useState(60);

  function handleInputEvolution(e: ChangeEvent<HTMLInputElement>) {
    setEvolution(parseInt(e.target.value));
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar current={evolution} minValue={0} maxValue={600} />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
      <input className={styles.inputEvolution} type="number" value={evolution} min="0" max="100" onChange={handleInputEvolution} />
    </div>
  )
}
