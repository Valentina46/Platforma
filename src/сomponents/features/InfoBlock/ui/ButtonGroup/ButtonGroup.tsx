import styles from './ButtonGroup.module.css'
import { ButtonTab } from './ButtonTab/ButtonTab';

export interface IButtonGroup {
  buttonTabs: {
    label: string;
    value: string;
}[]
  btnTab: string
  setBtnTab:React.Dispatch<React.SetStateAction<string>>

 }

export const ButtonGroup = ({buttonTabs,btnTab,setBtnTab}:IButtonGroup) =>{

  return(
    <div className={styles.root}>
      <div className={styles.buttonTab}>
        {buttonTabs.map((tabs=>{
          return(
          <ButtonTab
            tabs = {tabs}
            btnTab= {btnTab}
            setBtnTab = {setBtnTab}
            active = {btnTab === tabs.value}
            />
          )
        }))}
      </div>
    </div>
  )
}