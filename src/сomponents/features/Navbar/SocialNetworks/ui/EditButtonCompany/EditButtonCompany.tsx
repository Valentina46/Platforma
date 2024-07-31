
import styles from "./EditButtonCompany.module.css"


interface IEditBottonCompany{
  buttonEdit:
  {image: JSX.Element;
  title: string}

  buttonCompany:
  {image: JSX.Element;
    title: string}
} 



export const EditBottonCompany = ({buttonEdit,buttonCompany}: IEditBottonCompany)=>{
  return(
    <div className={styles.root}>
    <button className={styles.edit} >{buttonEdit.image} {buttonEdit.title}</button>
    <button className={styles.company}>{buttonCompany.image} {buttonCompany.title}</button>
    </div>
     
     )
}