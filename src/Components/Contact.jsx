import Button from "./Templates/Button";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const formAction = "https://formspree.io/f/movdeezg";

  return (
      <div className="h-[67.1vh] text-white flex flex-col items-center justify-center">
        <h1 className="font-semibold text-2xl">
          If you have any questions or feedback, feel free to reach out!
        </h1>
        <form
          onSubmit={handleSubmit((data) => {
            useForm(data);
            console.log(data);
          })}
          action={formAction}
          method="POST"
          className="w-2/5 flex flex-col items-center justify-center my-3.25 gap-3.75 bg-[#cbd5e1]
          text-[#0A0A0A] rounded-md shadow-md p-3"
        >
          <div className="flex items-center justify-center gap-6 text-lg font-semibold">
            <label htmlFor="name">Name:</label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              className="border border-emerald-400 rounded p-2"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-6 text-lg font-semibold">
            <label htmlFor="email">Email:</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              className="border border-emerald-400 rounded p-2"
              required
            />
          </div>
          <div className="flex items-center justify-center gap-6 text-lg font-semibold">
            <label htmlFor="message">Message:</label>
            <textarea
              {...register("message")}
              id="message"
              name="message"
              minLength="10"
              maxLength="50"
              rows="2"
              className="border border-emerald-400 rounded p-2 tracking-tight leading-none"
              required
            ></textarea>
          </div>
          <Button title="Contact Me" />
        </form>
      </div>
  );
}
