import styles from './UserProfile.module.css'
import avaProfile from './../../../../assets/avaProfile.png'
import button1 from './../../../../assets/button1.png'
import button2 from './../../../../assets/button2.png'
import { AboutUserInfo } from './ui/AboutUserInfo/AboutUserInfo'
import { AboutUserTitle } from './ui/AboutUserTitle/AboutUserTitle'
import { SubscribeInfo } from './ui/ SubscriberInfo/SubscriberInfo'

const userInfo = {
  name: 'Anastasia Frolova',
  status:'Блогер',
  city:' Москва,',
  country:'Россия',
  year:'22 года'
}

const subscribe = [
  {quantity: '77 тыс.',
  title: 'подписчики'},

  {quantity: '12,4 тыс.',
  title: 'лайки'},

  {quantity: '34,4 тыс.',
  title: 'охваты'},
]

const userTitle = {
  title:"Обо мне:",
  text:" Привет! Меня зовут Анна. Я страстный путешественник и люблю делиться своими приключениями с миром."
}

export const UserProfile = ()=>{

  return(
    //Аватарка пользователя 
    <div> 
      <div className={styles.avaProfileCont}>
        <div className={styles.avaProfile}>
          <img className={styles.ava} src={avaProfile}/>
        </div>
        <div className={styles.buttonCont}>
          <div className={styles.button}>
            <img src={button1}/>
          </div>
          <div className={styles.button}>
            <img src={button2}/>
          </div>
        </div>
      
      </div>
      <AboutUserInfo // Информация под аватаркой  статус имя город страна возраст
        name = {userInfo.name} 
        status = {userInfo.status} 
        city ={userInfo.city}  
        country ={userInfo.country}
        year = {userInfo.year}
      />
      <div className={styles.subscribe}>
        {subscribe.map(({quantity,title})=>(
           <SubscribeInfo quantity={quantity} title={title}//Инфо о подписчиках лайках охватах
        />
        ))}
      </div>
      <AboutUserTitle //Инфо обо мне 
        title = {userTitle.title}
        text = {userTitle.text}/>
    </div>
  )
}