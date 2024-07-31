import styles from "./YourStatisticsItem.module.css"
import Dot from "./../../../../assets/Network/Dot.png"

interface IstatisticsItem {
  statisticsItem:{
  nameCompany: {
      title: string;
      profitability: string;
  };
  title: string;
  networkPostsPublication: {
      name: string;
      image: JSX.Element;
  };
  publicationDate: string;
}
}

export const YourStatisticsItem = ({statisticsItem}:IstatisticsItem) => {

  return(
    <div className={styles.root}>
      <div className={styles.nameCompanyBtn}>
        <div className={styles.nameCompany} >
          <p className={styles.title}>{statisticsItem.nameCompany.title}</p>
          <p className={styles.profitability}>{statisticsItem.nameCompany.profitability}</p>
        </div>
        <div className={styles.btnCont}>
          <button className={styles.btn}><img src={Dot}/></button>
        </div>
      </div>
      <div className={styles.titleItem}>
        {statisticsItem.title}
      </div>
      <div className={styles.buttonCont}>
        <div className={styles.networkPostsPublication}>
          <p>{statisticsItem.networkPostsPublication.name}</p>
          <p className={styles.image}>{statisticsItem.networkPostsPublication.image}</p>
        </div>
        <div className={styles.publicationDate} >
          <div>{statisticsItem.publicationDate}</div>
        </div>
      </div>
      <div>
        <div className={styles.statisticSchedule}></div>
      </div>

    </div>
  )
}