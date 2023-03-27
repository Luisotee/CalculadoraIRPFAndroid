import { FormDataI } from "../interface";

export function calculateYearly({ data }: any) {
  let taxableIncome = data.income - data.dependente * 2275.08 - data.others;
  let educationCost;
  let sumTaxes = 0;
  let message = "";

  if (data.education > 3561.5 + data.dependente * 3561.5) {
    educationCost = 3561.5 + data.dependente * 3561.5;
    taxableIncome -= educationCost;
  } else {
    educationCost = data.education;
    taxableIncome -= educationCost;
  }

  if (taxableIncome <= 22847.76) {
    message = sumTaxes.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else if (taxableIncome <= 33919.8) {
    let sumIncome = taxableIncome - 22847.76;
    sumTaxes = sumIncome * 0.075;

    message = sumTaxes.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else if (taxableIncome <= 45012.6) {
    let sumIncome = taxableIncome - 22847.76 - 11072.04;
    sumTaxes = sumIncome * 0.15 + 830.4;
    message = sumTaxes.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else if (taxableIncome <= 55976.16) {
    let sumIncome = taxableIncome - 22847.76 - 11072.04 - 11092.8;
    let sumTaxes = sumIncome * 0.225 + 830.4 + 1663.92;
    message = sumTaxes.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else if (taxableIncome > 55976.16) {
    let sumIncome = taxableIncome - 22847.76 - 11072.04 - 11092.8 - 10963.56;
    sumTaxes = sumIncome * 0.275 + 830.4 + 1663.92 + 2466.8;
    message = sumTaxes.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  const res = [taxableIncome, sumTaxes, message];

  return res;
}
