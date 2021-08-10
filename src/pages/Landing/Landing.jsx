import "./Landing.css"
import PathCard from '../../components/PathCard/PathCard'
import Section1 from "./sections/Section1"
import HowItWorks from "./sections/HowItWorks"

const Landing = ({user}) => {
  return (
    <main >
      {/* <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <PathCard/> */}
      <Section1/>
      <HowItWorks/>
    </main>
  )
}
 
export default Landing