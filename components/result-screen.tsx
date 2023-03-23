import { Stack, Text } from "native-base";
import { MainCard } from "./main-card";

export function ResultScreen({ route }: any) {
  const { income, message, taxes } = route.params;

  let ifTaxes = false;
  if (taxes > 0) ifTaxes = true;

  return (
    <MainCard>
      <Stack p={2}>
        <Text fontSize="xl">
          A sua renda anual tributável é de{" "}
          {income.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
        <Text mt="10" fontSize="xl">
          {message}
        </Text>
        {ifTaxes ? (
          <Text mt="10" fontSize="xl">
            {taxes.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        ) : (
          <Text></Text>
        )}
      </Stack>
    </MainCard>
  );
}
