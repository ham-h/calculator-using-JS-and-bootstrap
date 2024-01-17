
import { Link, Outlet } from "react-router-dom"
const Reg = () => {
  return (
    <div>
    <Link to='/regi'><button>regster</button></Link>

    <Outlet/>
    </div>
  )
}

export default Reg
