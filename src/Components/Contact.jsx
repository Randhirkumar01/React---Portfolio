import Button from "./Templates/Button";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formAction = "https://formspree.io/f/movdeezg";

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4">
      <h1 className="font-semibold text-xl sm:text-2xl text-center mb-4">
        If you have any questions or feedback, feel free to reach out!
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        action={formAction}
        method="POST"
        className="w-full sm:w-3/4 lg:w-2/5 flex flex-col gap-4
          bg-[#cbd5e1] text-[#0A0A0A] rounded-md shadow-md p-6"
      >
        {/* NAME */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label htmlFor="name" className="font-semibold w-24">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="flex-1 border border-emerald-400 rounded p-2"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <label htmlFor="email" className="font-semibold w-24">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="flex-1 border border-emerald-400 rounded p-2"
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <label htmlFor="message" className="font-semibold w-24">
            Message
          </label>
          <textarea
            {...register("message", { minLength: 10 })}
            id="message"
            rows="3"
            className="flex-1 border border-emerald-400 rounded p-2 resize-none"
          ></textarea>
        </div>

        {/* BUTTON */}
        <div className="mt-4 flex justify-center">
          <Button title="Contact Me" />
        </div>
      </form>
    </div>
  );
}
