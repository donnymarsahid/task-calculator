import * as React from 'react';
import { Box, Text } from 'native-base';
import styles from './style/calculator';

export default function DetailSoc({ route }) {
  return (
    <Box style={styles.box} bg="primary.100">
      <Text>{route.params.value || 'Not Found'}</Text>
    </Box>
  );
}
