import styles from './ButtonTab.module.css'

interface IButtonTab {
  tabs: {
    label: string;
    value: string;
}
  btnTab: string
  setBtnTab:React.Dispatch<React.SetStateAction<string>>
  active: boolean
  }

export const ButtonTab =({tabs,btnTab,setBtnTab,active}:IButtonTab) =>{

  const activeStyle = active? {
    background:'#006DF0',
    color:'white'
  }:{}
 
  return( 
    <div className={styles.button1}
    onClick={()=> setBtnTab(tabs.value)}
    style = {activeStyle}>
      {tabs.label}
    </div>
  )
}
