import {Link, Outlet} from 'react-router-dom'
import { useState} from 'react'
export default function Login(){
  const [data, setData] =useState({username:'', password:''})
  const [error, setError] = useState({})
    const styles={
      container:{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              height:'100vh'
      },
      login_card:{
            width:'300px',
            border:'1px',
            margin:'10px',
            padding:'20px',
            boxShadow:'0px 3px 8px gray',
      },
    register:{
        textDecoration:'none',
        color:'black',
        fontFamily:'Roboto'

    }
      
    }
     const handleInput=(e)=>{
       let {name, value} = e.target
       setData((prev)=>({...prev, [name]:value}))
     }
     const  handleSubmit= async(e)=>{
      e.preventDefault()
       if(data.username===""){
         setError({username:"please enter username"})
       } else {
          setError({username:''})
       }
       if(data.password===""){
         setError({password:'please enter password'})
       } else{
         setError({password:''})
       }
       
      }
      
     return(
         <>
       <form style={styles.container} onSubmit={handleSubmit}>
        <div style={styles.login_card}>
           <div className="d-flex flex-column">
             <label className="form-label ms-2">username</label>
             <input type="text"  className="form-control w-100" style={{height:'35px'}} onChange={handleInput} name="username" placeholder="username"  autoComplete='off'/>
             {error && <p style={{color:'red'}}>{error.username}</p>}
           </div>
           <div className="d-flex flex-column">
              <label className='m-2'>password</label>
              <input type="password"  className="form-control w-100" style={{height:'35px'}} onChange={handleInput} name="password" placeholder="password" autoComplete='off' />
              {error && <p style={{color:'red'}}>{error.password}</p>}
           </div>
          <div className="d-flex justify-content-space-around">
            <p  className="me-4"><Link to="/register" style={styles.register}> Register here ?</Link></p>
            <p > <Link to="/forgotpassword" style={styles.register}>forgot password?</Link></p>
          </div>
           <button className="btn btn-danger w-100 mt-1" type="submit">Login</button>
        </div>
         <Outlet />
       </form>
            
         </>
     )
}