export const calculateBmi = (weight, height, method) => {
  let bmiValue;
  if (method === "metric") {
    bmiValue = (weight / (((height / 100) * height) / 100)).toFixed(2);
  } else {
    bmiValue = ((weight / (height * height)) * 703).toFixed(2);
  }

  const bmiMessage = setBMIMessage(bmiValue);
  return [bmiValue, bmiMessage];
};

const setBMIMessage = (finalBMI) => {
  if (finalBMI <= 18.5) {
    return "Underweight";
  }
  if (finalBMI > 18.5 && finalBMI <= 25) {
    return "Normalweight";
  }
  if (finalBMI > 25 && finalBMI <= 30) {
    return "overweight";
  }
  if (finalBMI > 30) {
    return "Obese";
  }
};
