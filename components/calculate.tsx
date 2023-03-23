import { FormDataI } from "../interface";

export function calculate({ data }: any) {
  data.income = data.income * 12 - data.dependente * 2275.08;

  if (data.income <= 22847.76) {
    data.setMessage(
      "Você está isento do imposto de renda ou é elegivel para reestituição, valor para reestituição: R$ " +
        data.taxes
    );
    data.setTaxes(0);
  } else if (data.income <= 33919.8) {
    let sumIncome = data.income - 22847.76;
    let sumTaxes = sumIncome * 0.075;
    data.taxes = sumTaxes;
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " +
        data.taxes
    );
  } else if (data.income <= 45012.6) {
    let sumIncome = data.income - 22847.76 - 11072.04;
    let sumTaxes = sumIncome * 0.15 + 830.4;
    data.taxes = sumTaxes;
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " +
        data.taxes
    );
  } else if (data.income <= 55976.16) {
    let sumIncome = data.income - 22847.76 - 11072.04 - 11092.8;
    let sumTaxes = sumIncome * 0.225 + 830.4 + 1663.92;
    data.taxes = sumTaxes;
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " +
        data.taxes
    );
  } else if (data.income > 55976.16) {
    let sumIncome = data.income - 22847.76 - 11072.04 - 11092.8 - 10963.56;
    let sumTaxes = sumIncome * 0.275 + 830.4 + 1663.92 + 2466.8;
    data.taxes = sumTaxes;
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " +
        data.taxes
    );
  }
}
