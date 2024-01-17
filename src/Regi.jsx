import { Link, Outlet } from "react-router-dom"


const Regi = () => {
  return (
    <div>
        <label>username</label>
      <input type="text" />
      <label>password</label>
      <input type="password" />
     <Link to='/log'> <button>login</button></Link>
     
<Outlet/>
    </div>
  )
}

export default Regi
