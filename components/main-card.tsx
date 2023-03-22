import React from "react";
import {
  VStack,
  Box,
  Divider,
  Text,
  Center,
  Container,
  HStack,
  Stack,
} from "native-base";
import { FormAll } from "./forms";

export function MainCard() {
  return (
    <Center>
      <Container p="0" mt="5" w="100%">
        <HStack w="100%">
          <Box alignItems="center" w="100%">
            <Box
              mt="8"
              w="100%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <FormAll />
            </Box>
          </Box>
        </HStack>
      </Container>
    </Center>
  );
}
