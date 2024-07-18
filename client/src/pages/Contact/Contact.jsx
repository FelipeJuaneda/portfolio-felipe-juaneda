import React from "react";
import FormContact from "./FormContact";

const Contact = () => {
  const networks = [
    {
      id: 1,
      iclass: "ri-linkedin-fill",
      to: "https://www.linkedin.com/in/felipe-juaneda-8b7103190/",
    },
    {
      id: 2,
      iclass: "ri-github-fill",
      to: "https://github.com/FelipeJuaneda",
    },
    {
      id: 3,
      iclass: "ri-instagram-fill",
      to: "https://www.instagram.com/felipejuaneda/",
    },
  ];

  const contacts = [
    {
      id: "direc",
      iClassName: "mx-2 text-2xl text-white ri-map-pin-line",
      value: "Belgrano 773, Córdoba, Argentina",
      to: "https://www.google.com/maps/place/Belgrano+773,+C%C3%B3rdoba/@-31.4238735,-64.1919614,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a28633a360b5:0x941372e4f44cc230!8m2!3d-31.4238735!4d-64.1919614",
    },
    {
      id: "number",
      iClassName: "mx-2 text-2xl text-white ri-phone-line",
      value: "+542664319381",
      to: "tel:+542664319381",
    },
    {
      id: "mail",
      iClassName: "mx-2 text-2xl text-white ri-mail-line",
      value: "felipejua9@gmail.com",
      to: "mailto:felipejua9@gmail.com",
    },
  ];

  const sectionStyle = {
    background:
      "rgb(110, 7, 243) linear-gradient(180deg, rgba(110, 7, 243, 1) 38%, rgba(103, 87, 222, 1) 72%, rgba(91, 233, 185, 1) 100%)",
  };

  return (
    <section className="min-h-screen" id="contact" style={sectionStyle}>
      <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto 550:px-0 550:py-3">
        <div className="flex-1 w-full m-auto lg:flex lg:items-center">
          <div className="text-white lg:w-1/2 lg:mx-6 550:px-6">
            <h1 className="text-3xl font-semibold capitalize lg:text-5xl font-notoFont">
              Contactos!
            </h1>

            <div className="mt-6 space-y-4 md:mt-8">
              {contacts.map((contact) => (
                <p key={contact.id} className="flex items-center -mx-2">
                  <i className={contact.iClassName} />
                  <a
                    href={contact.to}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-white truncate font-notoFont"
                  >
                    {contact.value}
                  </a>
                </p>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <div className="flex mt-4 -mx-1.5 gap-4 550:justify-evenly">
                {networks.map((network) => (
                  <a
                    key={network.id}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-white transition-colors duration-300 hover:text-blue-500"
                    href={network.to}
                  >
                    <i className={`text-3xl fill-current ${network.iclass}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default Contact;
