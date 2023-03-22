import { Box, Button, FormControl, Select, Stack, Text } from "native-base";
import React from "react";
import CurrencyInput from "react-native-currency-input";
import { MoneyI } from "../interface";

export function FormAll() {
  const [income, setIncome] = React.useState(Number);
  const [pension, setPension] = React.useState(Number);
  const [others, setOthers] = React.useState(Number);

  return (
    <Stack p="2">
      <FormControl isRequired>
        <FormControl.Label>Renda anual </FormControl.Label>
        <MoneyInput value={income} setValue={setIncome} />
        <FormControl.HelperText>Item obrigatório</FormControl.HelperText>
      </FormControl>

      <FormControl mt="5" isRequired>
        <FormControl.Label>Dependentes </FormControl.Label>
        <Select placeholder="Dependentes">
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
        <FormControl.HelperText>Item obrigatório</FormControl.HelperText>
      </FormControl>

      <FormControl mt="5">
        <FormControl.Label>Pensão alimentícia </FormControl.Label>
        <MoneyInput value={pension} setValue={setPension} />
        <FormControl.HelperText>Item opcional</FormControl.HelperText>
      </FormControl>

      <FormControl mt="5">
        <FormControl.Label>Outras deduções </FormControl.Label>
        <MoneyInput value={others} setValue={setOthers} />
        <FormControl.HelperText>Item opcional</FormControl.HelperText>
      </FormControl>

      <Button mt="5">CALCULAR</Button>
    </Stack>
  );
}

function MoneyInput({ value, setValue }: MoneyI) {
  return <CurrencyInput value={value} onChangeValue={setValue} prefix="R$  " />;
}
