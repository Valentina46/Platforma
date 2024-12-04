import { AdsItem } from "../AdsItem/AdsItem"
import Wiskers from "./../../../../assets/Compani/Wiskers.jpg"
import instagram from "./../../../../assets/Navbar/Instagram.png"
import TikTok from "./../../../../assets/Navbar/TikTok.png"
import push from "./../../../../assets/push.png"

export const Ads = ()=>{

  const postItem  = [
    {
    nameCompany:{
      image:<img src={Wiskers}/>,
      name:"Wiskers Corporation"
    },
    tags:[ 
      {title:'Мода'},
      {title:'Одежда'},
      {title:'Молодежь'}
    ],
    text: {
      title:"Партнерская программа с блогером Повседневный стиль",
      text:"Ищем блогера с активной аудиторией в возрасте 18-30 лет, интересующегося модой и стилем. Требуется создание поста в Instagram о новой линейке одежды для молодежи. Основной акцент на стиль, комфорт и доступность цен."
    },

    network:{
      title:"Социальные сети для проведения Рекламной Кампании",
      image:[<img src={instagram}/>,<img src={TikTok}/>]
    },
    budget:{
      title:"Бюджет Рекламной Кампании:",
      image:<img src={push}/>,
      money:"1 500"
    }
  }
  ]

  return (
   <div>
     {postItem.map((postItem)=>(
      <AdsItem postItem={postItem}/>
     ))}
   </div>
  )
}
 