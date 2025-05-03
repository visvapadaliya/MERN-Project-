import axios from 'axios';
import React from 'react'
import '../../assets/form.css'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';



export const Login = () => {

    const {register,handleSubmit,formState:{errors}} =useForm()
    const navigate=useNavigate();

    console.log(errors);

   
    const submitHandler = async(data) =>{

        console.log(data);

       const res=await axios.post("/user/login",data);
        console.log(res.data);

        if(res.status==200){
            toast.success('Login Succsefully....', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });

                
                localStorage.setItem("id",res.data.data._id)
                localStorage.setItem("role",res.data.data.role.role_name);

                if(res.data.data.role.role_name === "USER"){
                    navigate("/"); 
                  }
                else if(res.data.data.role_name === "ADMIN"){
                    navigate("/admin")
                  }
                  else{
                    navigate("/");
                  }
                
                
        }
        else{
            alert("Email Or Password Not Valid");
        }
    }

    
        
    
  return (
    
    <div className='body'>

<ToastContainer
                position="top-center"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <form onSubmit={handleSubmit(submitHandler)}>

    
            <div class="login_form">
                    <div class="login-container">
                        <div>
                            <h1>LOGIN</h1>
                        </div>
                        <div>
                            {/* <h3>Who Are You?</h3> */}
                            <br />
                        </div>

                        {/* <div class="radio-group">
                            <input type="radio" id="user" name="user-type" value="User" {...register("Who are you ?")} checked />
                        
                            <label for="user" className='label'>User</label>



                            <input type="radio" id="admin" name="user-type" value="Admin" {...register("Who are you ?")} />
                            <label for="admin" className='label'>Admin</label>
                    </div> */}
                    <br />

                    <div class="input-container">
                    <input type="text" class="input-box" placeholder="example@gmail.com" {...register("email")} required/>
                    <i class="fa-solid fa-envelope"></i>
                    
                    </div>

                    <div class="input-container">
                            <input type="password" name="pass"  class="input-box" placeholder="password" {...register("password")} required/>
                            <i class="fa-solid fa-lock"></i>
                    </div>

                    <div class="forgot">
                        <a href="#">Forgot Password ?</a>
                    </div>
                    
                  
                
                    

                    <div>
                            <button class="button" type="submit">login</button>
                            
                    </div>
                    <br />
                    <div>
                         <h4 style={{textAlign:"center"}}>Do't Any Account? 
                                        <Link to="/signup" style={{fontSize:"20px",margin:"0px 15px"}}>SignUp</Link>

                          </h4>
                    </div>
                </div> 
            </div>
            </form>
    </div>
  )
}
