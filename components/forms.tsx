import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Select,
  Stack,
  Text,
} from "native-base";
import React, { useState } from "react";
import CurrencyInput from "react-native-currency-input";
import { MoneyI } from "../interface";
import { calculate } from "./calculate";
import { MainCard } from "./main-card";

export function FormAll() {
  const navigation = useNavigation();
  const [income, setIncome] = useState(Number);
  const [pension, setPension] = useState(Number);
  const [others, setOthers] = useState(Number);
  const [dependente, setDependente] = useState(String);
  const [taxes, setTaxes] = useState(Number);
  const [message, setMessage] = useState(String);

  const data = {
    income: income,
    setIncome: setIncome,
    pension: pension,
    setPension: setPension,
    others: others,
    setOthers: setOthers,
    dependente: dependente,
    setDependente: setDependente,
    taxes: taxes,
    setTaxes: setTaxes,
    message: message,
    setMessage: setMessage,
  };

  function handleCalculate() {
    const res = calculate({ data });
    console.log(res);
    navigation.navigate("ResultScreen", {
      income: res[0],
      message: res[2],
      taxes: res[1],
    });
    cleanAll();
  }

  function cleanAll() {
    setIncome(0);
    setPension(0);
    setOthers(0);
    setDependente(0);
    setTaxes(0);
    setMessage("");
  }

  return (
    <MainCard>
      <Stack p="2">
        <FormControl isRequired>
          <FormControl.Label>Sálario bruto </FormControl.Label>
          <MoneyInput value={data.income} setValue={data.setIncome} />
          <FormControl.HelperText>Item obrigatório</FormControl.HelperText>
        </FormControl>
        <FormControl mt="5">
          <FormControl.Label>Dependentes </FormControl.Label>
          <Select
            placeholder="Dependentes"
            onValueChange={(value) => data.setDependente(value)}
            defaultValue="0"
            selectedValue={data.dependente}
          >
            <Select.Item label="0" value="0" />
            <Select.Item label="1" value="1" />
            <Select.Item label="2" value="2" />
            <Select.Item label="3" value="3" />
            <Select.Item label="4" value="4" />
            <Select.Item label="5" value="5" />
            <Select.Item label="6" value="6" />
            <Select.Item label="7" value="7" />
            <Select.Item label="8" value="8" />
            <Select.Item label="9" value="9" />
            <Select.Item label="10" value="10" />
          </Select>
          <FormControl.HelperText>Item opcional</FormControl.HelperText>
        </FormControl>
        <FormControl mt="5">
          <FormControl.Label>Pensão alimentícia </FormControl.Label>
          <MoneyInput value={data.pension} setValue={data.setPension} />
          <FormControl.HelperText>Item opcional</FormControl.HelperText>
        </FormControl>
        <FormControl mt="5">
          <FormControl.Label>Outras deduções </FormControl.Label>
          <MoneyInput value={data.others} setValue={data.setOthers} />
          <FormControl.HelperText>Item opcional</FormControl.HelperText>
        </FormControl>
        <HStack space={8} justifyContent="center">
          <Button mt="5" size="lg" colorScheme="secondary" onPress={cleanAll}>
            Limpar
          </Button>
          <Button mt="5" size="lg" onPress={handleCalculate}>
            Calcular
          </Button>
        </HStack>
      </Stack>
    </MainCard>
  );
}

function MoneyInput({ value, setValue }: MoneyI) {
  return <CurrencyInput value={value} onChangeValue={setValue} prefix="R$  " />;
}
