import styles from "./AwardsItem.module.css"

interface IAwardsItem {
  rewards:{
  status: {
      image: JSX.Element;
      icon:JSX.Element;
      title: string;
      text: string;
  };
}}


export const AwardsItem = ({rewards}:IAwardsItem) =>{

  return(
    <div className={styles.root}>
        {rewards.status.image}
        <div className={styles.buttonCont}>
          <div className={styles.button}>
            {rewards.status.icon}
          </div>
          </div>
        <div className={styles.contTitle}>
        <p className={styles.statusTitle}>{rewards.status.title}</p>
        <p className={styles.statusText}>{rewards.status.text}</p>
        </div>
    </div>
  )
}