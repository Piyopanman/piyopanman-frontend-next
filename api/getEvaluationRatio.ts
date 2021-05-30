import { Ratio } from "../recoil/atoms/evaluationRatio";

export const getEvaluationRatio = async () => {
  const res = await fetch("https://piyopanman.pythonanywhere.com/daily/ratio/");
  const json = (await res.json()) as Ratio;
  return json;
};
