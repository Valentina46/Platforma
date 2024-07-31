import Edd from "./../../../../../../assets/Navbar/Edd.png"
import styles from "./EddButtonNetwork.module.css"

export const EddButtonNetwork= ({ clickHandler }: { clickHandler: () => void }) =>{

  return(
      <button className={styles.EddButton} onClick={() => clickHandler()}>
      <img className={styles.imgBtn}  src={Edd}/>
      <p>Добавьте социальную сеть</p>
      </button> 
  )
}