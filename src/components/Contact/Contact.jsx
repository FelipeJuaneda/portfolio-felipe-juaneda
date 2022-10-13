import React from "react";
import "./Contact.css";
import FormContact from "./FormContact";

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
      to: "https://www.google.com/maps/place/Belgrano+773,+C%C3%B3rdoba/@-31.4238735,-64.1919614,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a28633a360b5:0x941372e4f44cc230!8m2!3d-31.4238735!4d-64.1919614",
    },
    {
      key: "number",
      iClassName: "mx-2 text-2xl text-white ri-phone-line",
      value: "(266) 563-7401",
      to: "tel:+542664319381",
    },
    {
      key: "mal",
      iClassName: "mx-2 text-2xl text-white ri-mail-line",
      value: "felipejua9@gmail.com",
      to: "mailto:felipejua9@gmail.com",
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
                      <a
                        href={e.to}
                        className="mx-2 text-white truncate w-72 font-notoFont"
                      >
                        {e.value}
                      </a>
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

            <FormContact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
