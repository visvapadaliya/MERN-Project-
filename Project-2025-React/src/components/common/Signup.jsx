import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export const Signup = () => {
  
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate();

    

    const submitHandler=async(data)=>{

        console.log(data);

        data.role="67c4099abeafc7e4ca0f3a7d";

        const res=await axios.post("/user",data);
    
        console.log(res.data);

        
        if(res.status===201)
        {
            toast.success('User Added Susscefully....', {
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
            // alert("User Added Susscefully....")
                navigate("/login")
            

        }
        else{

            toast.success('User Not Added....', {
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

            // alert("User Not added");
        }

    };

    const validationSchema ={
        nameValidation:{

            required:{
                value:true,
                message:"UserName is Required *"
            },
            minLength:{
                value:5,
                message:"Minimum 5 characters "
            }
        },
        contactValidation:{
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Invalid Contact Number"
            },
    
            required:{
                value:true,
                message:"Please Enter The Phone Number *"
            }
        },
        passwordValidation: {
            required: {
                value: true,
                message: "Password is Required *"
            },
            minLength: {
                value: 6,
                message: "Password must be at least 8 characters long"
            },
            pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must include at least one uppercase letter, one number, and one special character"
            }
        },
        emailValidation:{
            required:{
                value:true,
                message:"Email is Required...*"
            },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email Address"
            },

        }
    }
  return (
    <div className='body'>

<ToastContainer
                position="top-center"
                autoClose={5000}
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

        <div class="registration-container">
        
                        <h1>SIGN UP</h1>

                        {/* <div class="radio-group">
                            <input type="radio" id="user" name="user-type" value="User" {...register("Who are you ?")} checked />
                        
                            <label for="user" className='label'>User</label>

                            

                            <input type="radio" id="admin" name="user-type" value="Admin" {...register("Who are you ?")} />
                            <label for="admin" className='label'>Admin</label>
                    </div>
                    <br /> */}
        
            <div class="input-group">
                    <input type="text" class="input-box" placeholder="Firstname" {...register("firstName")} required/>
            </div>
            <div class="input-container">
                    <input type="text" class="input-box" placeholder="Lastname" {...register("lastName")}/>
            </div>
            <div class="input-container">
                    <input type="text" class="input-box" placeholder="Username" {...register("username",validationSchema.nameValidation)}/>
                    <span class="validation">
                        {
                                errors.username?.message
                        }
                    </span>
                    <i class="fa-solid fa-user"></i>
                    
            </div>
            <div class="input-container">
                    <input type="text" class="input-box" placeholder="example@gmail.com" {...register("email",validationSchema.emailValidation)} />
                    <span class="validation">
                        {
                            errors.email?.message
                        }
                    </span>
                    <i class="fa-solid fa-envelope"></i>
                    
            </div>
             <div class="input-container">
                            <input type="password" name="pass" id="" class="input-box" placeholder="password" {...register("password",validationSchema.passwordValidation)} />
                            <span class="validation">
                            {
                                errors.password?.message
                            }
                            </span>
                            <i class="fa-solid fa-lock"></i>
                    </div>
            <div class="input-container">
                    <input type="tel" class="input-box" name="contact_no" id="" placeholder="+91" {...register("contact_no",validationSchema.contactValidation)}/>
                    <span class="validation">
                        {
                            errors.contact_no?.message
                        }
                    </span>
                    <i class="fa-solid fa-phone"></i>
                    
            </div>

            
                    <br/>
            
            <div>



            <button type="submit" class="button">Register</button>
        </div>
        <br />
        <div>
            <h5 style={{textAlign:"center"}}>Do Have Any Account? 
                <Link to="/login" style={{fontSize:"20px",margin:"0px 15px"}}>SignIn</Link>
            </h5>
                        
        </div>
        </div>
    </div>

        </form>
        
    </div>


  )
}
