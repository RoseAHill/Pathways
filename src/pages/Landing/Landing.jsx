import styles from './Landing.module.css'
import PathCard from '../../components/PathCard/PathCard'
import Section1 from "./sections/Section1"

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      {/* <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <PathCard/> */}
      <Section1/>
    </main>
  )
}
 
export default Landing