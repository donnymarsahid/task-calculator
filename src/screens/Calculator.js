import React, { useState } from "react";
import { Box, Heading, Text, Pressable } from "native-base";
import styles from "./style/calculator";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [count, setCount] = useState(0);

  const inputValue = (value) => {
    if (count === 0) {
      setCount(value);
    } else {
      setCount(count + "" + value);
    }
  };

  const countResult = () => {
    let countEval = eval(count);
    setCount(countEval);
  };

  return (
    <Box style={styles.boxContainer} bg="primary.50">
      <Heading style={styles.heading}>
        <Text style={styles.textHeading}>Display</Text>
      </Heading>
      <Box style={styles.result}>
        <Text style={styles.textResult}>{count}</Text>
        <Pressable onPress={() => setCount(0)} style={styles.btnClear}>
          <Text color="primary.200">clear</Text>
        </Pressable>
      </Box>
      <Box style={styles.boxInput}>
        <Pressable
          onPress={() => inputValue(1)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>1</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue(2)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>2</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue("-")}
          bg="primary.200"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>-</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue("+")}
          bg="primary.200"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>+</Text>
        </Pressable>
      </Box>
      <Box style={styles.boxInput}>
        <Pressable
          onPress={() => inputValue(3)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>3</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue(4)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>4</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue("/")}
          bg="primary.200"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>/</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue("*")}
          bg="primary.200"
          style={styles.btn}
        >
          <Text style={[styles.textBtn, styles.textStar]}>*</Text>
        </Pressable>
      </Box>
      <Box style={styles.boxInput}>
        <Pressable
          onPress={() => inputValue(5)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>5</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue(6)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>6</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue("%")}
          bg="primary.200"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>%</Text>
        </Pressable>
        <Pressable onPress={countResult} bg="primary.200" style={styles.btn}>
          <Text style={styles.textBtn}>=</Text>
        </Pressable>
      </Box>
      <Box style={styles.boxInput}>
        <Pressable
          onPress={() => inputValue(7)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>7</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue(8)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>8</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue(9)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>9</Text>
        </Pressable>
        <Pressable
          onPress={() => inputValue(0)}
          bg="primary.100"
          style={styles.btn}
        >
          <Text style={styles.textBtn}>0</Text>
        </Pressable>
      </Box>
    </Box>
  );
}
