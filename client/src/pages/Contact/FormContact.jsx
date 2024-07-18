import React, { useState } from "react";
import { useForm } from "react-hook-form";
import sendEmail from "../../utils/emailService";
import { Toaster, toast } from "sonner";

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await sendEmail(data);
      toast.success("¡Gracias por contactar!", {
        position: "bottom-center",
      });
      reset();
    } catch (error) {
      toast.error("Error al enviar el mensaje. Inténtalo nuevamente.", {
        position: "bottom-center",
        style: {
          background: "#e74c3c",
          fontFamily: "'Raleway', sans-serif",
          color: "#f3f4f6",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" lg:w-1/2 lg:mx-6">
      <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
        <h1 className="text-2xl font-medium text-gray-700 font-notoFont dark:text-gray-200">
          ¡Envíame un mensaje!
        </h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Nombre
            </label>
            <input
              {...register("name", {
                required: true,
                validate: (value) => value.trim() !== "",
              })}
              type="text"
              placeholder="John Doe"
              className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border ${
                errors.name
                  ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300"
              } rounded-md dark:bg-gray-900 dark:text-gray-300 ${
                errors.name
                  ? "dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-300"
                  : "dark:border-gray-600 dark:focus:border-blue-300 dark:focus:ring-blue-300"
              } focus:outline-none focus:ring focus:ring-opacity-40`}
            />
          </div>

          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                validate: (value) => value.trim() !== "",
              })}
              type="email"
              placeholder="ejemplo@example.com"
              className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300"
              } rounded-md dark:bg-gray-900 dark:text-gray-300 ${
                errors.email
                  ? "dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-300"
                  : "dark:border-gray-600 dark:focus:border-blue-300 dark:focus:ring-blue-300"
              } focus:outline-none focus:ring focus:ring-opacity-40`}
            />
          </div>

          <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Mensaje
            </label>
            <textarea
              {...register("message", {
                required: true,
                validate: (value) => value.trim() !== "",
              })}
              className={`block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:border-blue-400 focus:ring-blue-300"
              } rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 ${
                errors.message
                  ? "dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-300"
                  : "dark:border-gray-600 dark:focus:border-blue-300 dark:focus:ring-blue-300"
              } focus:outline-none focus:ring focus:ring-opacity-40 resize-none`}
              placeholder="Mensaje"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md bg-violetaPrincipal hover:bg-blue-500 focus:outline-none focus:ring focus:bg-celestePrincipal focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? "Enviando..." : "¡Enviar!"}
          </button>
          <Toaster position="bottom-right" richColors />
        </form>
      </div>
    </div>
  );
};

export default FormContact;
