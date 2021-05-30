import { atom } from "recoil";

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
});
