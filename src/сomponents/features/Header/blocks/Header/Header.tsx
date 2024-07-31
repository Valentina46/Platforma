import { HeaderButton } from "../../ui/HeaderButton/HeaderButton";
import { Variant } from '../../ui/HeaderButton/HeaderButton.type';
import styles from './Header.module.css'
import logo from "./../../../../../assets/logo.png"
import { RoundButton } from "../../ui/RaundButton/RaundButton";

const buttons = [
  {
    name: 'Личная страница',
    vaiant: 'filld'
  },
  
  {
    name: 'Заказы',
    vaiant: 'common'
  },
  {
    name: 'Исполнители',
    vaiant: 'common'
  },
  
]

export const Header = () =>{

  return(
    <div className={styles.headerContainer}>
      <div className={styles.logoNavContainer}>
       <div className={styles.logoContainer}>
         <img className={styles.logo} src={logo} />
       </div>
       <div className={styles.navigationContainer} >
         {buttons.map(({name, vaiant}) => (
         <HeaderButton title={name} variant={vaiant as Variant}/>
          ))}
       </div>
      </div>
      <RoundButton/>
    </div>
  )
}