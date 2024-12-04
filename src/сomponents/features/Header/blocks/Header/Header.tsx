import styles from './Header.module.css'
import logo from "./../../../../../assets/logo.png"
import { RoundButton } from "../../ui/RaundButton/RaundButton";
import { Link } from "react-router-dom";

export const Header = () =>{

  return(
    <div className={styles.headerContainer}>
      <div className={styles.logoNavContainer}>
        <div className={styles.logoContainer}> 
        <Link to="/"> <img className={styles.logo} src={logo}/></Link> 
        </div> 
       <div className={styles.navigationContainer} >
        <div className={styles.buttonsContainer}> 
        <Link to="MynePage"><button className={styles.buttons}>Личная страница</button></Link> 
          <button className={styles.buttons}>Заказы</button>
          <button className={styles.buttons}>Исполнители</button>
        </div>
       </div>
      </div>
      <RoundButton/>
    </div>
  )
}