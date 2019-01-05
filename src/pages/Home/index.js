// Vendors
import classnames from 'classnames'
// Own Styles
import styles from './home.styl'

const Home = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.me}>
        Mario Brusarosco
      </h2>
      <h2 className={styles.jobDescription}>
        front end developer
      </h2>
    </div>
  )
}

export default Home
