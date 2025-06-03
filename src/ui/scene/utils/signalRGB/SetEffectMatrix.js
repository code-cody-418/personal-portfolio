import axios from "axios";

export const setEffectMatrix = async () => {
  try {
    const res = await axios.post(
      "http://localhost:16038/api/v1/lighting/effects/-M0UK0pcnuXzoqaS7-48/apply"
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
