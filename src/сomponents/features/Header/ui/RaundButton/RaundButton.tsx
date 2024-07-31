import styles from "./RaundButton.module.css"
import email from "./../../../../../assets/email.png"
import notifications from "./../../../../../assets/notifications.png"
import profil from "./../../../../../assets/profil.png"


const pushBtn = [
  {
    summ:3.022,
    title: 'PUSH'
  }
  
]


export const RoundButton = ()=>{

  return(
    <div  className={styles.root}>
      <button className={styles.push}>3.022 PUSH</button>
      <button className={styles.raund}>
         <img src={email}/>
      </button>
      <button className={styles.raund}>
         <img src={notifications}/>
      </button>
      <div className={styles.raundProfil} >
         <img src={profil || 'defolt'} className={styles.raundProfilImg} />
      </div>
    </div>
  )
}