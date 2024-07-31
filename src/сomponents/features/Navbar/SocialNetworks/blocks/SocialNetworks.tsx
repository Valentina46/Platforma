import { Network } from '../ui/Network/Network'
import styles from './SocialNetworks.module.css'
import TikTok from './../../../../../assets/Navbar/TikTok.png'
import Telegram from './../../../../../assets/Navbar/Telegram.png'
import Instagram from './../../../../../assets/Navbar/Instagram.png'
import { EddButtonNetwork } from '../ui/EddButtonNetwork/EddButtonNetwork'
import Edit from '../../../../../assets/Navbar/Edit.png'
import Company from './../../../../../assets/Navbar/Сompany.png'
import { useState } from 'react'
import { EditBottonCompany } from '../ui/EditButtonCompany/EditButtonCompany'

//Соцсети
const network =[
  {image:<img src={TikTok}/>,
  title:'aqqaunt.name'},

  {image:<img src={Instagram}/>,
  title:'instblog.name'},

  {image:<img src={Telegram}/>,
  title:'tgtblog.name'},
]
//Кнопки редактирования профиля и представителя компании
  const buttonEditComp = {
  
  buttonEdit:{image:<img src={Edit}/>,
  title:'Редактировать профиль'},

  buttonCompany:{image:<img src={Company}/>,
  title:'Я представляю компанию'},
}

export const SocialNetwork =() => {

  // const [networkUser, setNetworkUser]= useState(network)
  
  const eddNewNetwork= ()=>{
   console.log('Соцсеть');
  }

  return(
      <div>
        <p className={styles.title}>Cоциальные сети:</p>
        <div className={styles.network}>
           {network.map(({image,title})=>(
           <Network image={image} title = {title}/>
          ))}
        </div>
        <EddButtonNetwork clickHandler={eddNewNetwork} />
        <EditBottonCompany buttonEdit= {buttonEditComp.buttonEdit} buttonCompany ={buttonEditComp.buttonCompany}/>
      </div>
  )
}