import type { FormData } from "../pages/contact/index";

const postCantact = async (body: FormData) => {
  await fetch("https://piyopanman.pythonanywhere.com/daily/contact/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify(body),
  });
  return;
};

export default postCantact;
