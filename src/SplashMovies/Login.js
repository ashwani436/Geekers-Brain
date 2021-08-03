import React,{useState} from 'react';
// import Movie from '../SplashMovies/Movie';
import {Redirect} from 'react-router-dom';


const Login=()=> {

  // const history=useHistory(); 
    const[mail,setMail]=useState('');
    const[password,setPassword]=useState('');
    const[login,setLogin]=useState(false);

    const sumbitForm=(e)=>{
        e.preventDefault();
        // history.push("/add",{mail,password});
    };
    
    if(login){
        return (<Redirect to="/movie"/>
        )
    };
 
  

    return (

  <div>
  <form style={{marginLeft:"300px"}} onSubmit={sumbitForm}>
  <div className="my-5 mx-5 mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control" id="exampleInputEmail1" style={{maxWidth:"50%"}} aria-describedby="emailHelp"
    value={mail}
    onChange={(e)=>setMail(e.target.value)}
    required
    />
        
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="my-2 mx-5 mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" style={{maxWidth:"50%"}} id="exampleInputPassword1"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    required
    />
  </div>
  <div className="mx-5 mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="mx-5 btn btn-primary" onClick={()=>setLogin(true)}>Submit</button>
</form>
</div>
    )
}

export default Login;
