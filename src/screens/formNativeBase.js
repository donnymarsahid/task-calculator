import * as React from "react";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";
import { fontWeight } from "styled-system";

export default function FormNativeBase() {
  return (
    <Box
      safeArea
      bg="primary.100"
      flex={1}
      p={10}
      w="100%"
      justifyContent="center"
      mx="auto"
    >
      <Heading size="lg" color="primary.600">
        Welcome
      </Heading>
      <Heading size="xs" color="muted.400">
        Sign in to Contionue
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
          >
            Email
          </FormControl.Label>
          <Input />
        </FormControl>

        <FormControl mb={5}>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
          >
            Password
          </FormControl.Label>
          <Input type="password" />
        </FormControl>
      </VStack>
    </Box>
  );
}
