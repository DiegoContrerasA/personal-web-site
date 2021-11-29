import styles from './skill.module.css'
import FacebookIcon from '../../Icons/FacebookIcon'
const Skill = ({ icon, title, className = '', ...props }) => {
  return (
    <div className={styles.skill} {...props}>
      <FacebookIcon width={20} heigth={20} />
    </div>
  )
}

export default Skill
