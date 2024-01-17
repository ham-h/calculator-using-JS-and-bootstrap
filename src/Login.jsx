import { useState } from "react"


const Login = () => {
const [data,setData]=useState([])
const [name,setName]=useState('')
const [pass,setPassword]=useState('')
const fun1=(e)=>{
    const Nmae=e.target.value
    setName(Nmae)

}
const fun2=(e)=>{
    const Paas=e.target.value
    setPassword(Paas)

}
const sub=(e)=>{
    e.preventDefault();
    const newData=([...data,{name,pass}])
    setData(newData)
}
  return (
    <div>
      <label>username</label>
      <input type="text" value={name} onChange={fun1}/>
      <input type="password" value={pass} onChange={fun2} />
      <button onClick={sub}>submit</button>
      <ul>
        {data.map((item,index)=>(
            <li key={index}>
name:{item.name}
<br></br>
password:{item.pass}
</li>
        )
        )}
        
      </ul>
    </div>
  )
}

export default Login
