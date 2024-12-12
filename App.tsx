/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title?:string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
function App(): React.JSX.Element {
  const [numOne, setNumOne] = useState<number | ''>('');
  const [numTwo, setNumTwo] = useState<number | ''>('');
  const [result, setResult] = useState<number | string>('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleCalculation = (operation: string) => {
    if (numOne === '' || numTwo === '') {
      setResult('Enter valid numbers');
      return;
    }

    const numberOne = Number(numOne);
    const numberTwo = Number(numTwo);

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
    <ScrollView style={backgroundStyle}>
      <View style={styles.highlight}>
        <Text style={styles.heading}>Calculator</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Enter First Number</Text>
          <TextInput
            placeholder="Enter number here"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={value => setNumOne(value)}
            value={numOne.toString()}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Enter Second Number</Text>
          <TextInput
            placeholder="Enter number here"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={value => setNumTwo(value)}
            value={numTwo.toString()}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Button style={styles.button} title="Add" onPress={() => handleCalculation('add')} />
          <Button style={styles.button} title="Subtract" onPress={() => handleCalculation('subtract')} />
          <Button style={styles.button} title="Multiply" onPress={() => handleCalculation('multiply')} />
          <Button style={styles.button} title="Divide" onPress={() => handleCalculation('divide')} />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Result: {result}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 120,
    fontSize: 20,
    backgroundColor:'red'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    backgroundColor:'red'
  },
  input:{
    backgroundColor: 'white'
  },
  heading:{
    fontWeight:'bold',
    fontSize: 60,
    paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    backgroundColor:'white'
  }
});

export default App;
