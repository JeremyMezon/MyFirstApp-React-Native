//El primer paso es importar las librerias de React y los componentes de React-Native
import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import MyNameStyle from '../styles/myNameStyles'

//Estilos del componente
const styles = MyNameStyle;

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [havingDebt, setHavingDebt] = useState(false);
  
    return (
      <View style={styles.counterContainer}>
        <Text
          style={[
            styles.counterText,
            number == 0 ? styles.black : havingDebt ? styles.red : styles.green,
          ]}
        >
          {number.toLocaleString()}
        </Text>
        <View style={styles.btnCounterContainer}>
          <Pressable
            style={[styles.btnCounter, styles.paying]}
            onPress={() => {
              if (number <= 0) {
                setHavingDebt(true);
              } else {
                setHavingDebt(false);
              }
              setNumber(number - 1);
            }}
          >
            <Text>return a slice</Text>
          </Pressable>
          <Pressable
            style={[styles.btnCounter, styles.taking]}
            onPress={() => {
              if (number >= 0) {
                setHavingDebt(false);
              } else {
                setHavingDebt(true);
              }
              setNumber(number + 1);
            }}
          >
            <Text>Eat a slice</Text>
          </Pressable>
        </View>
      </View>
    );
};

export default Counter