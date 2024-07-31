import styles from "./Network.module.css"

interface INetWork {
  image:JSX.Element;
  title:string
}
// Добавление социальных сетей
export const Network = ({image,title}:INetWork) => {
 
  return(
    <div className={styles.root}>
      <p className={styles.image}>{image}</p>
      <p className={styles.title}>{title}</p> 
      
    </div>
  )
}