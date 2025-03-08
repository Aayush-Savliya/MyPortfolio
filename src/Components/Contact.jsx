import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/anlqnrea", userInfo);
      toast.success("Your Message has been sent.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span className=" font-semibold">
          Please Fill Out Form Below to Contact Me.
        </span>
        <br />
        <div className="flex flex-col items-center justify-center mt-7">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/anlqnrea"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl "
          >
            {" "}
            <h1 className="font-semibold text-center">Send Your Message.</h1>
            <div>
              <label className="block text-gray-700 mt-2 mb-1">Full Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="shadow appearance-none rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                id="name"
                placeholder="Enter your fullname"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div lassName="flex flex-col mb-4">
              <label className="block text-gray-70 mt-0.5 mb-1">Email Address</label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="text"
                className="shadow appearance-none  rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                id="email"
                placeholder="Enter your Email Address"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mt-0.5 mb-1">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="shadow rounded-lg appearance-none  py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                id="message"
                type="text"
                placeholder="Please Enter Your Query"
              ></textarea>
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-around items-center">
              <button
                type="submit"
                className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
