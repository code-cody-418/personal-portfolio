import axios from "axios";

export const setEffectStars = async () => {
  try {
    const res = await axios.post(
      "http://localhost:16038/api/v1/lighting/effects/-MHsbJ8VCYF7jSVKHpj5/apply"
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
