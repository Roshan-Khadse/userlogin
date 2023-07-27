import { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

class Registration extends Component{
    state={username:'',userErr:false,email:'',emailErr:false,errorMessage:'',password:'',passwordErr:false,showLoginMsg:false,errorLoginMsg:''}

    onSubmitSuccess=async ()=>{

        const {username,email,password}=this.state
        const userDetails={username,email,password}
        console.log(userDetails)
       fetch("http://localhost:3000/user",
       {
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(userDetails)
       }
       ).then((res)=>{
        console.log("success")
       }).catch((res)=>{
        console.log("fail")
       })

       this.setState({
        username:'',
        password:'',
        email:''
       })
    }


    onSubmitForm=event=>{
        event.preventDefault()
        const {username,password,email}=this.state
        if (username!=='' && password!=='' && email!==''){
            this.setState({showLoginMsg:true})
            this.onSubmitSuccess()
        }
        else{
            this.setState({errorLoginMsg:'Login Required'})
        }
      }
    onChangePassword=event=>{
        const {password}=this.state
        this.setState({
            password:event.target.value
        })
        
        if(password.length<4 || password.length>8){
            this.setState({passwordErr:true,errorMessage:'Enter valid password'})
        }
        else{
            this.setState({passwordErr:false})
        }
    }
    
    onChangeEmail=event=>{
        const {email}=this.state
        this.setState({email:event.target.value})
        if (email.endsWith('.com')){
        this.setState({emailErr:false})
        }
       // else{
       //     this.setState({emailErr:true,errorMessage:'Enter Valid Email'})
       // }

    }

    onChangeUser=event=>{
        const {username}=this.state
     this.setState({username:event.target.value})
    
     if (username.length<=4){
        this.setState({userErr:true,errorMessage:'Enter valid user name'})
     }
     else{
        this.setState({userErr:false})
     }
    }

    
    render(){
        const {username,userErr,errorMessage,emailErr,email,password,passwordErr,showLoginMsg,errorLoginMsg}=this.state
    return(
        <div className="login-container">
            <form className="form-container" onSubmit={this.onSubmitForm}>
                <h1 className="heading">User Registration</h1>
                <label htmlFor="username" className="input-text" >USER NAME</label>
                <input type="text" id="username" className="input-field"placeholder="User Name" onChange={this.onChangeUser} value={username}/>
                {userErr?<p className='error-message'>*{errorMessage}</p>:null}
                <label htmlFor="email" className="input-text">EMAIL ID</label>
                <input type="text" id="email" className="input-field" value={email} placeholder="Email ID" onChange={this.onChangeEmail}/>
                {emailErr?<p className='error-message'>*{errorMessage}</p>:null}
                <label htmlFor="password" className="input-text">PASSWORD</label>
                <input type="password" id="password" className="input-field" placeholder="Password" value={password} onChange={this.onChangePassword}/>
                {passwordErr?<p className='error-message'>*{errorMessage}</p>:null}
                <div>
                <button type="submit" className="submit-button">Submit</button>
                {showLoginMsg?<p className='suceess-msg'>Submit Successful</p>:<p className='error-message'>{errorLoginMsg}</p>}
                </div>
                <Link to={'/login'}>
                <p>Already User? Do Sign In</p>
                </Link>
            </form>
        </div>
    )
    }
}
export default Registration