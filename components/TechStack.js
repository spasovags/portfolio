import React from 'react'
import Technology from '../components/Technology'
import styles from '../styles/TechStack.module.css'


const TechStack = ({technologies}) => {
  
   return (
    <div className={`${styles["techstack-container"]}`} >
       {technologies.map((technology) =>
        <Technology key={technology.id} value={technology}/>)}
    </div>
  )
}

export default TechStack