import Instagram2 from "./../../../assets/Network/Instagram2.png"
import TikTok2 from "./../../../assets/Network/TikTok2.png"
import styles from "./YourStatistics.module.css"
import { YourStatisticsItem } from "./YourStatisticsItem/YourStatisticsItem"

const statisticsItem =[
  {
    nameCompany:{
      title:'РК с XYZ Company',
      profitability:'+ 45.85 USDT'
    },
    title: 'Мы создали серию постов в Instagram, где я делился своими впечатлениями от использования экологически чистых бытовых товаров бренда.',
    
    networkPostsPublication:{
       name:'Посты в instagram',
       image:<img src={Instagram2}/>
    },
    publicationDate:"12.02.2024 - 13.03.2024",
  },

  {
   nameCompany:{
    title:'РК с ABC Brand',
    profitability:'+ 05.85 USDT'
  },
  title: 'В рамках этого сотрудничества я создал обзорный видеоролик на Tik Tok, где поделился своим опытом использования продуктов здорового питания и напитков.',
  
  networkPostsPublication:{
     name:'Видеоролики в Tik Tok',
     image:<img src={TikTok2}/>
  },
  publicationDate:"12.02.2024 - 13.03.2024",
},
]

export const YourStatistics = () => {

 
  return(
    <div className={styles.root}>
      <div className={styles.contStatisticsItem}>
        {statisticsItem.map((statisticsItem)=>(
          <YourStatisticsItem statisticsItem = {statisticsItem}/>
        ))}
      </div>
      <div>
        <p className={styles.titleNetwork}> Cтатистика по социальным сетям </p>
        <div className={styles.statisticNetwork}></div>
      </div>
      <div>
        <p className={styles.titleIncome}> Cтатистика по доходам </p>
        <div className={styles.statisticIncome}></div>
      </div>
    </div>
  )
}