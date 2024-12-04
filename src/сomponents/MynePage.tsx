import { useState } from "react";
import { InfoBlock } from "./features/InfoBlock/blocks/InfoBlock/InfoBlock";
import styles from "./MynePage.module.css"
import { Navbar } from "./features/Navbar/blocks/Navbar";
import { Pagescopy } from "./pages/Pagescopy";

const buttonTabs = [
  { 
  label: "Исполнитель",
  value: "исполнитель"
 },
 { 
  label: "Заказчик",
  value: "заказчик"
},
]

export const MynePage = ()=>{

  const [btnTab, setBtnTab] = useState("исполнитель")

  const renderButtonGrouoContent = () =>{
    switch(btnTab){
      case "исполнитель":{
        return <Pagescopy/>
      }

      case "заказчик":{
        return "222"
      }

      default:{
        return <Pagescopy/>
      }
    }
  }
  return(
    <div className={styles.root}>
      <InfoBlock
      buttonTabs = {buttonTabs}
      btnTab = {btnTab}
      setBtnTab = {setBtnTab}
      />
      <div className={styles.navbarPages}>
        <div className={styles.navbar}>
         <Navbar/>
        </div>
        <div className={styles.rerender}>
          {renderButtonGrouoContent()}
        </div>
      </div>
    </div>
  )
}
