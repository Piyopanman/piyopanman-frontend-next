import { atom } from "recoil";
import { getEvaluationRatio } from "../../api/getEvaluationRatio";

export interface Ratio {
  perfect: number;
  good: number;
  soso: number;
  bad: number;
}

export const evaluationRatioState = atom({
  key: "evaluationRatio",
  default: {
    perfect: 25,
    good: 25,
    soso: 25,
    bad: 25,
  },
  effects_UNSTABLE: [
    ({ setSelf }) => {
      const func = async () => {
        const res = (await getEvaluationRatio()) as Ratio;
        setSelf(res);
      };
      func();
    },
  ],
});
