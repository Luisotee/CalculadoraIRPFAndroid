import { Stack, Text } from "native-base";
import { MainCard } from "./main-card";

export function ResultScreen({ route }: any) {
  const data = route.params;
  console.log(data);
  return (
    <MainCard>
      <Stack p={2}>
        <Text fontSize="xl">{data}</Text>
      </Stack>
    </MainCard>
  );
}
