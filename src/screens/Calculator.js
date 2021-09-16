import * as React from 'react';
import { Box, Heading, Text, HStack, Button, Pressable } from 'native-base';
import styles from './style/calculator';

export default function Calculator({ navigation }) {
  return (
    <Box style={styles.box} bg="primary.100">
      <Heading style={styles.heading}>
        <Text color="primary.50" style={styles.textHeading} font="Poppins.semibold.600">
          Display
        </Text>
        <Pressable
          onPress={() => navigation.navigate('Hello')}
          style={{
            backgroundColor: '#487eb0',
            height: 40,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            margin: 20,
          }}
        >
          <Text>halo</Text>
        </Pressable>
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
          <Text style={styles.btnText}>0</Text>
        </Button>
      </HStack>
    </Box>
  );
}
