import styles from './profile.module.css'

const SKILLS = [{
  name: 'HTML',
  animationDuration: '2.2s'
},
{
  name: 'CSS',
  animationDuration: '2.4s'
},
{
  name: 'Javascript',
  animationDuration: '2.6s'
},
{
  name: 'React',
  animationDuration: '2.3s'
},
{
  name: 'Next.js',
  animationDuration: '2.5s'
},
{
  name: 'Node.js',
  animationDuration: '2.7s'
},
{
  name: 'Typescript',
  animationDuration: '2.9s'
}]

const Profile = () => {
  return (
    <div className={styles.container}>
      {SKILLS.map(({ name, animationDuration }) => (
        <span key={name} className={styles.skill} style={{ animationDuration }}>{name}</span>
      ))}
    </div>
  )
}

export default Profile
