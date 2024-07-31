import styles from './SubscriberInfo.module.css'


interface ISubscribe {
  quantity:string,
  title:string
}

export const SubscribeInfo = ({quantity,title}:ISubscribe)=>{
  return(
    <div className={styles.root}>
       <div className={styles.quantity}>{quantity}</div>
       <div className={styles.title}>{title}</div>
    </div>
  )
}