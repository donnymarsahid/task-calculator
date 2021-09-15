import * as React from 'react';
import { Box, Heading, Text, HStack, Button } from 'native-base';
import styles from './style/calculator';

export default function Calculator() {
  return (
    <Box style={styles.box} bg="primary.100">
      <Heading style={styles.heading}>
        <Text color="primary.50" style={styles.textHeading} font="Poppins.semibold.600">
          Display
        </Text>
      </Heading>
      <Heading style={styles.result}>
        <Text color="font.50" style={styles.textResult}>
          100
        </Text>
      </Heading>
      <HStack style={styles.HStack}>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>1</Text>
        </Button>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>2</Text>
        </Button>
        <Button style={styles.btnAction}>
          <Text style={styles.btnText}>-</Text>
        </Button>
        <Button style={styles.btnAction}>
          <Text style={styles.btnText}>+</Text>
        </Button>
      </HStack>
      <HStack style={styles.HStack}>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>3</Text>
        </Button>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>4</Text>
        </Button>
        <Button style={styles.btnAction}>
          <Text style={styles.btnText}>/</Text>
        </Button>
        <Button style={styles.btnAction}>
          <Text style={[styles.btnText, styles.textStar]}>*</Text>
        </Button>
      </HStack>
      <HStack style={styles.HStack}>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>5</Text>
        </Button>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>6</Text>
        </Button>
        <Button style={styles.btnAction}>
          <Text style={styles.btnText}>%</Text>
        </Button>
        <Button style={styles.btnAction}>
          <Text style={styles.btnText}>=</Text>
        </Button>
      </HStack>
      <HStack style={styles.HStack}>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>7</Text>
        </Button>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>8</Text>
        </Button>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>9</Text>
        </Button>
        <Button style={styles.btnNumber}>
          <Text style={styles.btnText}>10</Text>
        </Button>
      </HStack>
    </Box>
  );
}
