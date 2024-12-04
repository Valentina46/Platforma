import styles from "./NetworkPageItems.module.css"
import "../../../../App.css"

interface InetworkPageItems{
  pageItems: {
    network: {
      image: JSX.Element;
      title: string;
    };
    button: {
      image: JSX.Element;
      title?: string;
  }[];
    tags: {
        title: string;
    }[];
    titleItem: string;
    summary: {
        tittle: string;
        image: JSX.Element;
        quantity: string;
    }[];
  }
}

export const NetworkPageItems = ({pageItems}:InetworkPageItems) => {

  return(
  <div className={styles.root}>
    <div className={styles.name}>
      <div className={styles.network}>
        {pageItems.network.image}
        <p className={styles.networkTitle}>{pageItems.network.title}</p>
      </div>
    <div className={styles.buttonCont}>
      {pageItems.button.map((button)=>(
      <div className={styles.buttenStatistik}>
        <p className={styles.btnImg}>{button.image}</p>
        <p>{button.title}</p>
      </div>
      ))}
    </div>
    </div>
      <div className={styles.tagsCont}>
      {pageItems.tags.map((tags) =>(
        <div className={styles.tag}>
          {tags.title}
        </div>
      ))} 
    </div>
    <div className={styles.titleItem}>
      {pageItems.titleItem}
    </div>
    <div className={styles.summaryCont}>
      {pageItems.summary.map((summary)=>(
        <div className={styles.summeryItemCont}>
            <div className={styles.summeryTittle}>
              {summary.tittle}
            </div>
            <div className={styles.summeryImage}>
              {summary.image} 
              <p className={styles.quantity}>{summary.quantity}</p>
            </div> 
        </div> 
      ))}
    </div>
    <div>
      
    </div>
     
  </div>
  
  )
}