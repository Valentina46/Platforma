import styles from './TextArea.module.css'
import Close from "./../../../../../assets/Сlose.png"

interface ITextArea{
  text1:string,
  text2:string
}

export const TextArea = ({text1, text2}:ITextArea) =>{

  return(
    <div className={styles.root}>
      <div className={styles.text}>
        <p className={styles.text1}> {text1} </p>
        <p className={styles.text2}> {text2} </p>
      </div>
        <button className={styles.buttonClose}><img src={Close} /></button>
    </div>
  )
}