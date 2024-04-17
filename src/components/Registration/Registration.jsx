// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// import { Navigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'




const Registration = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    // // const [regError, setRegError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorPassword, setErrorPassword] = useState("");
    const navigate = useNavigate();

    // const handleRegistration = e => {

    //     e.preventDefault();
    //     // console.log(e.currentTarget)
    //     const form = new FormData(e.currentTarget)
    //     const name = form.get("name")
    //     const email = form.get("email")
    //     const password = form.get("password")
    //     const photo = form.get("photo")
    //     // console.log(email, password, photo, name)
    //     console.log(name, photo)







    // if (password.length < 6) {
    //     toast.error("Password should be at least 6 characters or longer ")
    //     return;
    // }
    // if (!/[A-Z]/.test(password)) {
    //     alert("Your Password Should be Upper Case");
    //     return;
    // }
    // if (!/[a-z]/.test(password)) {
    //     alert("Your Password Should be Lower Case");
    //     return;
    // }










    //     // Create User
    //     createUser(email, password, name)
    //         .then((result) => {
    //             console.log(result.user)
    //             Swal.fire({
    //                 title: "congratulations!",
    //                 text: "You have Successfully Create an Account!",
    //                 icon: "success"
    //             });
    //             Navigate('/')
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })


    //     // clear
    //     // setRegError('')


    // }


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // const  = (data) => console.log(data)


    const onSubmit = (data) => {

        const { email, password, name, photoUrl } = data;


        if (password.length < 6) {
            setErrorPassword("Password should be at least 6 characters or longer ")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorPassword("Your Password Should be Upper Case");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorPassword("Your Password Should be Lower Case");
            return;
        }


        createUser(email, password)
            .then((userCredential) => {
                updateUserProfile(name, photoUrl)

                Swal.fire({
                    title: "Registration Success",
                    text: "You have Registration Success",
                    icon: "success"
                });
                // Page Change
                navigate('/')
                console.log(userCredential.user)
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.error(error)
            }
            )
    }

    return (
        <div>

            <div className="hero mt-5 mb-9"  >

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                        <p className="py-6">Register now for exclusive access to premium residential properties. Whether you re looking for luxury homes, modern apartments, or cozy retreats, our portfolio offers a variety of options to suit your lifestyle. Secure your dream home today by signing up!</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)} data-aos="fade-up" data-aos-duration="2000">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered  border-blue-300   focus:dark:border-blue-500" required data-aos="fade-up" data-aos-duration="2200" {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered  border-blue-300   focus:dark:border-blue-500" required data-aos="fade-up" data-aos-duration="2500" {...register("photoUrl", { required: true })} />
                                {errors.photoUrl && <span>This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered  border-blue-300   focus:dark:border-blue-500" required data-aos="fade-up" data-aos-duration="2700" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </div>


                            <div className="form-control">
                                <span className="label-text">Password</span>
                                <label className="label flex items-center mt-2 gap-2 input input-bordered border border-blue-300     ">

                                    <input

                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        // className=""
                                        required
                                        data-aos="fade-up" data-aos-duration="2900"
                                        {...register("password", { required: true })}
                                    />


                                    <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                                        {
                                            showPassword ? <FaRegEye className="ml-20" /> : <FaRegEyeSlash className="ml-20" />
                                        }
                                    </span>
                                </label>
                                {
                                    errorPassword && <p>{errorPassword}</p>
                                }




                                <label className="label">
                                    <h1>Already Have Account? <Link to={'/login'} className="link link-hover text-rose-700">Login</Link> </h1>
                                </label>
                                {errors.password && <span>This field is required</span>}
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary" data-aos="fade-up" data-aos-duration="3000">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Registration;