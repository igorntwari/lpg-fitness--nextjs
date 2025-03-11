// Fonts

import { Montserrat, Questrial } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "600", "700"],
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});

export { montserrat, questrial };

// Images
export { default as fitness1 } from "./images/fitness-1.png";
export { default as weightLift } from "./images/weight-lifting.png";
export { default as privateTraining } from "./images/private-training.png";
export { default as buildMuscle } from "./images/build-muscle.png";
export { default as about } from "./images/about.png";

export { default as trainer1 } from "./images/trainer-1.png";
export { default as trainer2 } from "./images/trainer-2.png";
export { default as trainer3 } from "./images/trainer-3.jpg";
export { default as trainer4 } from "./images/trainer-4.jpg";
export { default as trainer5 } from "./images/trainer-5.jpg";
export { default as trainer6 } from "./images/trainer-6.jpg";
export { default as trainer7 } from "./images/trainer-7.jpg";

// SVG
export { default as InfoShape } from "./svg/info-shape";
