import Edd from "./../../../assets/Navbar/Edd.png"
import bloger from "./../../../assets/Network/bloger.png"
import innovator from "./../../../assets/Network/innovator.png"
import button1 from './../../../assets/button1.png'
import button2 from './../../../assets/button2.png'
import { AwardsItem } from "./AwardItem/AwardsItem"
import styles from "./Awards.module.css"

const yourRewards = [{
    status:{
      image:<img src={innovator}/>,
      icon:<img src={button1}/>,
      title:"Инноватор",
      text:"За оригинальный и креативный контент, который выделяется на фоне других"
    }
  },
  {
    status:{
      image:<img src={bloger}/>,
      icon:<img src={button2}/>,
      title:"Блогер месяца",
      text:"За общий успех и выдающиеся достижения в контенте и взаимодействии с аудиторией"
    }
  
},
]

export const Awards = () => {

  return(

    <div className={styles.root}>
      <p className={styles.title}>Ваши NFT-награды</p>
      <div className={styles.awardItemCont}>
        <div className={styles.awardItem}>
          {yourRewards.map((rewards)=>(
            <AwardsItem rewards = {rewards}/>
          ))}
        <div className={styles.edd}>
          <img className={styles.img} src={Edd} />
          <p className={styles.eddTitle}>
            Получите новые награды за сотрудничество
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}