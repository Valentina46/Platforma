import { NetworksPage } from "./NetworksPage/NetworksPage"
import { YourStatistics } from "./YourStatistics/YourStatistics"
import { Awards } from "./Awards/Awards"
import { Tabs } from "./Tabs/Tabs"
import { useState } from "react"
import styles from "./Pages.module.css"


const tabs = [
 { 
    label: "Социальные сети",
    value: "cоциальныесети"
 },

 {
  label: "Ваша статистика",
  value: "вашастатистика"
},

{ 
  label: "Награды",
  value: "награды"
}
]

export const Pagescopy=()=>{
   
   const [tab, setTab] = useState("cоциальныесети")


    const renderTabContent=()=> {
    switch(tab){
      case "cоциальныесети":{
        return <NetworksPage/>
      }
      case "вашастатистика":{
        return <YourStatistics/>
      }
      case "награды":{
        return <Awards/>
      }
      default:{
        return <NetworksPage/>
      }
    }
    }

  return(
    <div className={styles.root}>
    <div className={styles.tabs}>
      <Tabs
      tabs = {tabs}
      renderTabContent = {renderTabContent}
      tab ={tab}
      setTab= {setTab}/>
    </div>
    </div>
  )
}