import { CardSize } from "../components/card/Card";

export const getCardSize = (index: number): CardSize => {
  if (index % 3 === 0) {
    return "large";
  } else if (index % 2 === 0) {
    return "medium";
  } else {
    return "small";
  }
};
