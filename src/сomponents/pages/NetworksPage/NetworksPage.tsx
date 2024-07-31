
import styles from "./NetworksPage.module.css"
import Instagram from "./../../../assets/Navbar/Instagram.png"
import TikTok from "../../../assets/Navbar/TikTok.png"
import { NetworkPageItems } from "./NetworksPageItems/NetworkPageItems"
import VectorUp from "./../../../assets/Network/VectorUp.png"
import Dot from "./../../../assets/Network/Dot.png"
import VectorDown from "./../../../assets/Network/VectorDown.png"
import Scribes from "./../../../assets/Network/Scribes.png"
import Ohvat from "./../../../assets/Network/Ohvat.png"
import Likes from "./../../../assets/Network/Likes.png"
import Komments from "./../../../assets/Network/Komments.png"
import Dobavit from "./../../../assets/Network/Dobavit.png"



const pageItems = [
  {
    network:{
      image:<img src={Instagram}/>,
      title:"Instblog.name"
    },
    button:[
      {image:<img src={VectorUp}/>,
      title:"233"},
      {image:<img src={Dot}/>,
      title:" "}
    ],
    tags:[ 
      {title:'Здоровый образ жизни'},
      {title:'Кулинария'},
      {title:'Спорт'}
    ],
    titleItem: 'Анна - блогер, специализирующийся на кулинарии и здоровом образе жизни. Она регулярно публикует рецепты здоровых блюд, советы по питанию, истории успеха и мотивацию для занятий спортом. Анна также проводит прямые трансляции приготовления блюд, организует опросы для выбора следующих рецептов и активно взаимодействует со своей аудиторией через комментарии и личные сообщения.',
    
    summary:[
    {  tittle: 'Подписчики',
       image:<img src={Scribes}/>,
       quantity:'77 тыс.'
    },
       {
       tittle: 'Охваты',
       image:<img src={Ohvat}/>,
       quantity:'34,4 тыс.'
    },
    {
      tittle: 'Лайки',
      image:<img src={Likes}/>,
      quantity:'12,4 тыс.'
    },
    {
      tittle: 'Комментарии',
      image:<img src={Komments}/>,
      quantity:'2,4 тыс.'
    }]
  },

  {
    network:{
      image:<img src={TikTok}/>,
      title:"Aqqaunt.name"
    },
    button:[
      {image:<img src={VectorDown}/>,
      title:"454"},
      {image:<img src={Dot}/>,
      title:""}
    ],
    tags:[ 
      {title:'Танцы'},
      {title:'Скетчи'},
      {title:'Спорт'},
      {title:'Юмор'}
    ],
    titleItem: 'Популярный контент и зажигательные танцы! Следите за моими захватывающими видео на TikTok, где я делюсь своими танцевальными мастерством, комедийными скетчами и захватывающими моментами из моей жизни. Присоединяйтесь ко мне, чтобы получать ежедневную дозу позитива и вдохновения! ',
    
    summary:[

    {  tittle: 'Подписчики',
       image:<img src={Scribes}/>,
       quantity:'77 тыс.'
    },
       {
       tittle: 'Охваты',
       image:<img src={Ohvat}/>,
       quantity:'34,4 тыс.'
    },
    {
      tittle: 'Лайки',
      image:<img src={Likes}/>,
      quantity:'12,4 тыс.'
    },
    {
      tittle: 'Комментарии',
      image:<img src={Komments}/>,
      quantity:'2,4 тыс.'
    }]
  },

  {
    network:{
      image:<img src={Instagram}/>,
      title:"Instblog.name"
    },
    button:[
      {image:<img src={VectorUp}/>,
      title:"233"},
      {image:<img src={Dot}/>,
      title:" "}
    ],
    tags:[ 
      {title:'Здоровый образ жизни'},
      {title:'Кулинария'},
      {title:'Спорт'}
    ],
    titleItem: 'Анна - блогер, специализирующийся на кулинарии и здоровом образе жизни. Она регулярно публикует рецепты здоровых блюд, советы по питанию, истории успеха и мотивацию для занятий спортом. Анна также проводит прямые трансляции приготовления блюд, организует опросы для выбора следующих рецептов и активно взаимодействует со своей аудиторией через комментарии и личные сообщения.',
    
    summary:[
    {  tittle: 'Подписчики',
       image:<img src={Scribes}/>,
       quantity:'77 тыс.'
    },
       {
       tittle: 'Охваты',
       image:<img src={Ohvat}/>,
       quantity:'34,4 тыс.'
    },
    {
      tittle: 'Лайки',
      image:<img src={Likes}/>,
      quantity:'12,4 тыс.'
    },
    {
      tittle: 'Комментарии',
      image:<img src={Komments}/>,
      quantity:'2,4 тыс.'
    }]
  },

  
]

export const NetworksPage = () => {

  return(
    <div className={styles.root}>
       <div className={styles.contNetworksName}>
      {pageItems.map((pageItems)=>(
      <NetworkPageItems pageItems={pageItems} />
      ))}
      </div> 
      <button className={styles.buttonAdd}>
        <img src={Dobavit}/>
        Добавить социальную сеть
      </button>

    </div>
 )
}