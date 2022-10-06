import React from "react";
import "./Contact.css";

const Contact = () => {
  const network = [
    {
      key: 1,
      iclass: "ri-linkedin-fill",
      to: "https://www.linkedin.com/in/felipe-juaneda-8b7103190/",
    },
    {
      key: 2,
      iclass: "ri-github-fill",
      to: "https://github.com/FelipeJuaneda",
    },
    {
      key: 3,
      iclass: "ri-instagram-fill",
      to: "https://github.com/FelipeJuaneda",
    },
  ];
  
  const contacts = [
    {
      key: "direc",
      iClassName: "mx-2 text-2xl text-white ri-map-pin-line",
      value: "Belgrano 773, Cordoba, Argentina",
    },
    {
      key: "number",
      iClassName: "mx-2 text-2xl text-white ri-phone-line",
      value: "(266) 563-7401",
    },
    {
      key: "mal",
      iClassName: "mx-2 text-2xl text-white ri-mail-line",
      value: "felipejua9@gmail.com",
    },
  ];
  return (
    <div>
      <section className="min-h-screen " id="gradiantSection">
        <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
          <div className="flex-1 w-full m-auto lg:flex lg:items-center ">
            <div className="text-white lg:w-1/2 lg:mx-6">
              <h1 className="text-3xl font-semibold capitalize lg:text-5xl font-notoFont">
                Contactos!
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                {contacts.map((e) => {
                  return (
                    <p key={e.key} className="flex items-center -mx-2">
                      <i className={e.iClassName} />
                      <span className="mx-2 text-white truncate w-72 font-notoFont">
                        {e.value}
                      </span>
                    </p>
                  );
                })}
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300 font-notoFont">Seguime!</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  {network.map((e) => {
                    return (
                      <a
                        key={e.key}
                        target="_blank"
                        rel="noreferrer"
                        className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                        href={e.to}
                      >
                        <i className={`text-3xl fill-current ${e.iclass}`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-2xl font-medium text-gray-700 font-notoFont dark:text-gray-200">
                  Enviame un mensaje!
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Nombre
                    </label>
                    <input
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
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      placeholder="Mensaje"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md bg-violetaPrincipal hover:bg-blue-500 focus:outline-none focus:ring focus:bg-celestePrincipal focus:ring-opacity-50">
                    Enviar!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
