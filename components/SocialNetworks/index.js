import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'
import TwitterIcon from '../Icons/TwitterIcon'
import styles from './socialNetworks.module.css'

const LINKS = [
  {
    path: 'https://www.facebook.com/diego.contreras.94801116/',
    icon: FacebookIcon
  },

  {
    path: 'https://www.instagram.com/diegocontreras.dev/',
    icon: InstagramIcon
  },
  {
    path: 'https://twitter.com/DiegoCo48990707',
    icon: TwitterIcon
  },
  {
    path: 'https://www.linkedin.com/in/diego-armando-contreras-a91070177/',
    icon: LinkedinIcon
  }

]

const SocialNetworks = () => {
  return (
    <div className={styles.links}>
      {LINKS.map(({ path, icon: Icon }) => (
        <a
          key={path}
          target='blank'
          href={path}
          className={styles.link}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}

export default SocialNetworks
