import styles from "./AboutUserTitle.module.css"

interface IUserTitle {
  title:string,
  text:string
}

export const AboutUserTitle = ({title,text}:IUserTitle)=>{

  return(
    <div className={styles.root}>
      <p className={styles.tittle}>{title}</p>
      <p className={styles.tittle}>{text}</p>
    </div>
  )
}