export interface MoneyI {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export interface FormDataI {
  income: number;
  setIncome: React.Dispatch<React.SetStateAction<number>>;
  pension: number;
  setPension: React.Dispatch<React.SetStateAction<number>>;
  others: number;
  setOthers: React.Dispatch<React.SetStateAction<number>>;
  dependente: number;
  setDependente: React.Dispatch<React.SetStateAction<string>>;
}
