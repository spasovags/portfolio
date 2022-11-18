import React from 'react'
import Image from 'next/image'
import styles from '../styles/Technology.module.css'
import { useInView } from 'react-intersection-observer';

const Technology = (props) => {
  const post = props.value;
  const basePath = '/images/techstack'
  const { ref: cardRef, inView: IsCardsVisible } = useInView({triggerOnce: true});
  const { ref: shakeRef, inView: IsShakenVisible } = useInView({triggerOnce: true});

   return (
      <div 
      className={`${styles["card"]} ${IsCardsVisible ? styles.animCard : ""}`}
      ref={cardRef} >
         <div className={`${styles["photoCard"]}`}>
          <Image 
          src={`${basePath}/${post.photo}`} 
          layout="fill"
          objectFit='contain'
          alt={post.alt}/>
        </div>       
      </div>
   );
}

export default Technology