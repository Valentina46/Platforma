import { IMyButtonProps } from "./HeaderButton.type"
import styles from './styles.module.css'

export const HeaderButton =({ title, variant = 'common' }: IMyButtonProps)=>{
  if (variant === 'dropDown') {
    return (
      <button className={styles[variant]}>
        {title}
        <select className={styles.select}/>
      </button>
    )
  }

  return(
    <button className={styles[variant]}>
      {title}
    </button>
  )
}