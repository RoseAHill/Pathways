import styles from './Landing.module.css'
import PathCard from '../../components/PathCard/PathCard'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <PathCard/>
    </main>
  )
}
 
export default Landing