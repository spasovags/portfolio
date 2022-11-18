import React from 'react'
import Technology from '../components/Technology'
import styles from '../styles/TechStack.module.css'


const TechStack = ({technologies}) => {
  
   return (
    <section className={`${styles["techstack-container"]}`} >
       {technologies.map((technology) =>
        <Technology key={technology.id} value={technology}/>)}
    </section>
  )
}

export default TechStack