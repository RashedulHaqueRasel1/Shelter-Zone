import { FaComments } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPricetag } from "react-icons/io";
import { useParams, useLoaderData, NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types"; 


const PropertyDetails = () => {


    const property = useLoaderData();
    // console.log(property)

    const { id } = useParams();
    const idInt = parseInt(id)
    const details = property.find((b) => b.id === idInt)

    // console.log(details)


    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image,
        } = details;



    return (
        <div className="mx-auto container">

            <Helmet>
                <title>{estate_title}</title>
            </Helmet>

            <img src={image} alt="" className="object-cover mt-8 w-full h-80 rounded sm:h-[700px] lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{estate_title}</h3>
                <p className="text-xl dark:text-gray-600  " data-aos="fade-up" data-aos-duration="2900">{description}</p>

                <div className="  flex-wrap justify-between dark:text-gray-600">
                    <div className="flex space-x-2 mt-5 " data-aos="fade-up" data-aos-duration="2900">

                        <IoIosPricetag className="text-xl  " />
                        <span className="text-[18px]">Price: {price}</span>

                    </div>
                    <div className="flex space-x-2 mt-5" data-aos="fade-up" data-aos-duration="2900">

                        <FaComments className="text-[18px]  "></FaComments>
                        <span className="text-[18px]">Area: {area}</span>

                    </div>

                </div>


                {/* Location */}
                <div className="flex space-x-2 mt-8 dark:text-gray-600" data-aos="fade-up" data-aos-duration="2900">

                    <FaLocationDot className="text-[18px]  "></FaLocationDot>
                    <span className="text-[18px]">{location}</span>
                </div>


                {/* facilities */}

                <div className="grid grid-cols-3 mt-3 font-bold" data-aos="fade-up" data-aos-duration="2900">
                    {
                        facilities.map((tag) => <div key={tag.id}>
                            <p className="p-4 rounded-3xl  dark:text-gray-600 bg-slate-300" style={{ boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 90px' }}># {tag}</p>
                        </div>)
                    }
                </div>


                <div className="  btn  btn-secondary">
                    <NavLink to={'/'}>
                        <div className="flex">
                            <IoMdArrowRoundBack className="mr-2 text-[18px]"></IoMdArrowRoundBack>
                            <span className="text-[18px]">Back</span>
                        </div>
                    </NavLink>
                </div>
            </div>











        </div>
    );
};

export default PropertyDetails;
PropertyDetails.propTypes = {
    PropertyDetails: PropTypes.object
 }