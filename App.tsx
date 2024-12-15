import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [numOne, setNumOne] = useState<string>('');
  const [numTwo, setNumTwo] = useState<string>('');
  const [result, setResult] = useState<number | string>('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    padding: 20,
  };

  const handleCalculation = (operation: string) => {
    if (numOne === '' || numTwo === '') {
      setResult('Please enter valid numbers');
      return;
    }

    const numberOne = parseFloat(numOne);
    const numberTwo = parseFloat(numTwo);

    if (isNaN(numberOne) || isNaN(numberTwo)) {
      setResult('Invalid input. Enter numeric values.');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(numberOne + numberTwo);
        break;
      case 'subtract':
        setResult(numberOne - numberTwo);
        break;
      case 'multiply':
        setResult(numberOne * numberTwo);
        break;
      case 'divide':
        setResult(numberTwo !== 0 ? numberOne / numberTwo : 'Cannot divide by zero');
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Calculator</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter First Number</Text>
            <TextInput
              placeholder="Enter number here"
              style={styles.input}
              keyboardType="numeric"
              onChangeText={value => setNumOne(value)}
              value={numOne}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter Second Number</Text>
            <TextInput
              placeholder="Enter number here"
              style={styles.input}
              keyboardType="numeric"
              onChangeText={value => setNumTwo(value)}
              value={numTwo}
            />
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button title="Add" onPress={() => handleCalculation('add')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Subtract" onPress={() => handleCalculation('subtract')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Multiply" onPress={() => handleCalculation('multiply')} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Divide" onPress={() => handleCalculation('divide')} />
            </View>
          </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Result:</Text>
            <Text style={styles.resultValue}>{result}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonWrapper: {
    flexBasis: '48%',
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: '600',
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});

export default App;
