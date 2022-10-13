import React from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t9329tl",
        "template_0vi6msd",
        e.target,
        "vdb5zp0CqPR0oGTss"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6">
      <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
        <h1 className="text-2xl font-medium text-gray-700 font-notoFont dark:text-gray-200">
          Enviame un mensaje!
        </h1>

        <form className="mt-6" onSubmit={sendEmail}>
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Nombre
            </label>
            <input
              name="user-name"
              type="text"
              placeholder="John Doe"
              className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email
            </label>
            <input
              name="user-email"
              type="email"
              placeholder="ejemplo@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Mensaje
            </label>
            <textarea
              name="user-message"
              className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Mensaje"
            />
          </div>

          <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md bg-violetaPrincipal hover:bg-blue-500 focus:outline-none focus:ring focus:bg-celestePrincipal focus:ring-opacity-50">
            Enviar!
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
