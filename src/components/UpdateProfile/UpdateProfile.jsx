
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useNavigate} from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'





const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, photoUrl } = data;
            updateUserProfile(name, photoUrl)

            navigate(location?.state ? location.state : '/')
            Swal.fire({
                title: "Update Success",
                text: "Update Profile Successfully",
                icon: "success"
              });

      }

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="w-full card shrink-0 mt-24 mb-28 h-96  max-w-sm shadow-2xl bg-base-100   p-8 space-y-3 rounded-xl container mx-auto" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} data-aos="fade-up" data-aos-duration="2000">
                <h1 className="text-2xl font-bold text-center">Update Profile </h1>
                {/* <TextField id="outlined-basic" className="" label="Name" variant="outlined" /> */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6  ">
                    <div className="space-y-1 text-sm mt-2">
                        <label htmlFor="name" className="block d ">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" className="input input-bordered w-full border-blue-300   focus:dark:border-blue-500" required {...register("name", { required: true })}/>
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="PhotoUrl" className="block  ">Photo URL</label>
                        <input type="PhotoUrl" name="PhotoUrl" id="PhotoUrl" placeholder="Photo URL" className="input input-bordered w-full   border-blue-300   focus:dark:border-blue-500" required {...register("photoUrl", { required: true })}/>
                        {errors.photoUrl && <span>This field is required</span>}

                    </div>
                    <button className="btn w-full hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3" data-aos="fade-up" data-aos-duration="3000">Update</button>
                </form>




            </div>


        </div>
    );
};

export default UpdateProfile;