import { useState } from 'react'
import { ButtonGroup } from '../../ui/ButtonGroup/ButtonGroup'
import { TextArea } from '../../ui/TextArea/TextArea'
import styles from './InfoBlock.module.css'

const constants = {
  pageTitle1:'Личная страница. Вы сейчас являетесь исполнителем и можете брать заказы на Рекламные Кампании в ваших социальных сетях.',
  pageTitle2: 'Следите за статистикой ваших аккаунтов и получайте награды за сотрудничество с брендами'
}

export interface IButtonGroup {
  buttonTabs: {
    label: string;
    value: string;
}[]
  btnTab: string
  setBtnTab:React.Dispatch<React.SetStateAction<string>>

 }

  export const InfoBlock = ( {buttonTabs,setBtnTab,btnTab}:IButtonGroup) =>{

  
  return(
    <div className={styles.root}>
      <TextArea text1={constants.pageTitle1} text2={constants.pageTitle2}/>
      <ButtonGroup
      buttonTabs = {buttonTabs}
      btnTab = {btnTab}
      setBtnTab = {setBtnTab}
      />
    </div>
  )
}