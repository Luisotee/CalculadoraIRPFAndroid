import { Center, Stack, Text } from "native-base";
import { useState } from "react";
import { MainCard } from "./main-card";

export function ResultScreen({ route }: any) {
  const { income, message, taxes } = route.params;
  const [displayMessage, setdisplayMessage] = useState(message);

  let ifTaxes = false;
  if (taxes > 0) ifTaxes = true;

  return (
    <MainCard>
      <Center>
        <Text fontSize="2xl" color="gray.600">
          Renda anual tributável
        </Text>
        <Text fontSize="xl" bold>
          {income.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
        <Text fontSize="2xl" color="gray.600" mt="10">
          Imposto a pagar
        </Text>
        <Text fontSize="xl" bold>
          {displayMessage}
        </Text>
      </Center>
    </MainCard>
  );
}
