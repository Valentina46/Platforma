import styles from "./ButtonSetting.module.css"
import Setting  from "./../../../../assets/Network/Setting.svg"

export const ButtonSetting = () =>{

  return(
    <div className={styles.buttonContainer}>
       <button className={styles.buttonSetting}> <img src={Setting}/></button>
      </div>
  )
}