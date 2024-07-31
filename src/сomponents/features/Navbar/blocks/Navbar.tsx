import { SocialNetwork } from "../SocialNetworks/blocks/SocialNetworks"
import { UserProfile } from "../UsersProfile/UserProfile"
import styles from './Navbar.module.css'
export const Navbar = ()=>{

  return(
     <div className={styles.root}>
     <UserProfile/>
     <SocialNetwork/>
     </div>
  )
}