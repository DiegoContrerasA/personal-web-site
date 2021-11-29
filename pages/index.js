import Profile from '../components/Profile'
import styles from './main.module.css'

import Typography from '../components/Typography'
import SocialNetworks from '../components/SocialNetworks'

const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.profile}>
        <Profile />
      </section>
      <section className={styles.information}>
        <Typography as='h1' type='title'>
          👋 Hi, I Am <Typography as='strong' type='title' className='textAccent'> Diego Contreras.</Typography>
        </Typography>
        <SocialNetworks />
        <Typography as='h2' type='subtitle'>Frontend and Mobile developer (React.js|React Native)</Typography>
        <Typography>Software developer and passionate about technology, especially the web.
          He is currently improving his skills in backend technologies to have a
          better complement in his career.
        </Typography>
        <Typography>
          Passionate about soccer, running, and the gym,
          he also enjoys being enthusiastic and being in a continuous
          learning process and believes that motivation does not exist if a
          person has passion for things.
        </Typography>
        <Typography>The phrase that most identifies him <Typography as='strong' className='textAccent'>“Keep It Simple Stupid”</Typography></Typography>
      </section>
    </main>
  )
}

export default Home
