// Vendors
import classnames from 'classnames'
// Own Styles
import styles from './home.styl'

const Home = () => {
  return (
    <>
      <div className={styles.me}>
        Mario Brusarosco
      </div>
      <div className={styles.jobDescription}>
        front end developer
      </div>
    </>
  )
}

export default Home