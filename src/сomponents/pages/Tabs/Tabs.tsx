import { ButtonSetting } from "../Button/ButtonSetting/ButtonSetting";
import { Tab } from "./Tab/Tab";
import styles from "./Tabs.module.css"
import "./Tabs.module.css"

export interface ITabs {
  tabs: {
    label: string;
    value: string;
}[]
    renderTabContent:() => JSX.Element
    tab:string
    setTab:React.Dispatch<React.SetStateAction<string>>
}


export const Tabs = ({tabs,renderTabContent,tab,setTab}:ITabs)=>{

return(
  <div className={styles.root}>
    <div className={styles.container} >
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
        {tabs.map((item, index)=>{
          return(
            <Tab
            item={item}
            tab = {tab}
            setTab = {setTab}
            active = {tab === item.value}
            />
          )
          })}
          </div>
          <div>
            <ButtonSetting/>
          </div>
      </div>
        <div>
          {renderTabContent()}
        </div>
    </div>
  </div>
)
}