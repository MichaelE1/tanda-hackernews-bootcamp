import React from 'react';
import styles from './styles.css'

export default function Article(props){
  return (
    <div className={styles.margin_small}>
      <h1>{props.title}</h1>
      {props.description}
      <a href={props.link}></a>
    </div>
  );
}