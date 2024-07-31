import styles from "./Tab.module.css"

interface  ITab {
  item: {
    label: string;
    value: string;
}
  tab: string
  setTab: React.Dispatch<React.SetStateAction<string>>
  active:boolean|string
  
}

export const Tab=({item,tab,setTab,active}:ITab)=>{
   
  const activeStyle = active? {
    border: '2px solid #006DF0',
    color:'#006DF0'
  }:{}
 
  return(
    <div 
    className={styles.tab}
    onClick={()=> setTab(item.value)}
    style = {activeStyle}
    >
    {item.label}
  </div>
  )
}