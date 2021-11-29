import Skill from './Skill'
import styles from './skillList.module.css'
const SkillList = ({ data = [], className }) => {
  const size = 360 / data.length
  console.log({ size })
  return (
    <div className={styles.skillContainer}>
      {data.map(({ name, icon }, index) =>
        <Skill key={name} title={name} icon={icon} />
      )}
    </div>
  )
}

export default SkillList
