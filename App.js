import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/components/Botao';
import Display from './src/components/Display';

export default class App extends React.Component {

  state = {
    displayValue: '0'
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.button}>
          <Botao label='AC' />
          <Botao label='/' />
          <Botao label='7' />
          <Botao label='8' />
          <Botao label='9' />
          <Botao label='*' />
          <Botao label='4' />
          <Botao label='5' />
          <Botao label='6' />
          <Botao label='-' />
          <Botao label='1' />
          <Botao label='2' />
          <Botao label='3' />
          <Botao label='+' />
          <Botao label='0' />
          <Botao label='.' />
          <Botao label='=' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
