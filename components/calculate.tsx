import { FormDataI } from "../interface";

export function calculate({ data }: any) {
  let income = data.income * 12 - data.dependente * 2275.08;

  if (income <= 22847.76) {
    data.setMessage(
      "Você está isento do imposto de renda ou é elegivel para reestituição, valor para reestituição: R$ " +
        data.taxes
    );
    data.setTaxes(0);
  } else if (income <= 33919.8) {
    let sumIncome = data.income - 22847.76;
    let sumTaxes = sumIncome * 0.075;
    data.setTaxes(sumTaxes);
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " + sumTaxes
    );
  } else if (income <= 45012.6) {
    let sumIncome = data.income - 22847.76 - 11072.04;
    let sumTaxes = sumIncome * 0.15 + 830.4;
    data.setTaxes(sumTaxes);
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " + sumTaxes
    );
  } else if (income <= 55976.16) {
    let sumIncome = data.income - 22847.76 - 11072.04 - 11092.8;
    let sumTaxes = sumIncome * 0.225 + 830.4 + 1663.92;
    data.setTaxes(sumTaxes);
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " + sumTaxes
    );
  } else if (income > 55976.16) {
    let sumIncome = data.income - 22847.76 - 11072.04 - 11092.8 - 10963.56;
    let sumTaxes = sumIncome * 0.275 + 830.4 + 1663.92 + 2466.8;
    data.setTaxes(sumTaxes);
    data.setMessage(
      "É necessário realizar o pagamento do imposto de renda de R$ " + sumTaxes
    );
  }
  data.setIncome(income);
}
