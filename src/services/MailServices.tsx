import emailjs from "@emailjs/browser";

export const sendEmail = async (email:string,message:string) => {

  const templateParams = {
    email: email,
    message: message,
  };

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    );

    console.log("SUCCESS!", response.status, response.text);
    return true;
  } catch (err) {
    console.error("FAILED...", err);
    return false;
  }
};
