import axios from "axios";

const sendEmail = async (data) => {
  try {
    const response = await axios.post(
      "https://portfolio-felipe-juaneda-api.vercel.app/api/send",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Error al enviar el mensaje: ${error.response.data}`);
    } else if (error.request) {
      throw new Error(
        "Error al enviar el mensaje: No se recibió respuesta del servidor."
      );
    } else {
      throw new Error(`Error al enviar el mensaje: ${error.message}`);
    }
  }
};

export default sendEmail;
