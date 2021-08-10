import "./Landing.css"
import PathCard from '../../components/PathCard/PathCard'
import Section1 from "./sections/section1"
import HowItWorks from "./sections/HowItWorks"
import Team from "./sections/Team"

const Landing = ({user}) => {
  return (
    <main >
      {/* <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <PathCard/> */}
      <Section1/>
      <HowItWorks/>
      <Team/>
    </main>
  )
}
 
export default Landing