import styles from "./AboutUserInfo.module.css"

interface IUserInfo {
  name: string;
   status:string;
   city:string;
   country:string;
   year:string;
}

export const AboutUserInfo = ({name,status,city,country,year}:IUserInfo) =>{

  return(
    <div>
      <div className={styles.userName}>
        {name}
      </div>
      <div className={styles.userInfo}>
        <div className={styles.status}> {status}</div>
        <div className={styles.city}> {city} {country} {year} </div>
      </div>
    </div>
  )
}