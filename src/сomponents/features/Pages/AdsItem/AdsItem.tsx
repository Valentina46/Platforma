import styles from "./AdsItem.module.css"

interface IAdsItem {
   postItem: {
    nameCompany: {
        image: JSX.Element;
        name: string;
    };
    tags: {
        title: string;
    }[];
    text: {
        title: string;
        text: string;
    };
    network: {
      title: string;
      image: JSX.Element[];
  };
    budget: {
      title: string;
      image: JSX.Element;
      money: string;
  };
}
}

export const AdsItem = ({postItem}:IAdsItem)=>{

  return(
    <div className={styles.root}>
      <div className={styles.nameCompany}>
         <div className={styles.image}>
           {postItem.nameCompany.image}
         </div>
           <p className={styles.name}>
           {postItem.nameCompany.name}
           </p>
      </div>
      <div className={styles.tagsCont}>
       {postItem.tags.map((tags) =>(
        <div className={styles.tag}>
          {tags.title}
        </div>
        ))} 
      </div>
      <div className={styles.text}>
         <p className={styles.textTitle}>{postItem.text.title}</p>
         <p className={styles.textText}>{postItem.text.text}</p>
      </div>
      <div className={styles.networkBudgetCont}>
        <div className={styles.network}>
          <p>{postItem.network.title}</p>
          <div className={styles.networkImg}>
              {postItem.network.image}
          </div>
        </div>
        <div className={styles.budgetCont}>
          <p className={styles.budgetTitle}>{postItem.budget.title}</p>
          <div className={styles.budgetImageMoney}>
          {postItem.budget.image}
          {postItem.budget.money}
          </div>
        </div>
      </div>
       
    </div>
  )
}