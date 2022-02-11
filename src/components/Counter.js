//El primer paso es importar las librerias de React y los componentes de React-Native
import React, { useState } from "react";
import { Text, View, Pressable, TouchableHighlight, TouchableOpacity } from "react-native";
import MyNameStyle from '../../styles/myNameStyles'

//Estilos del componente
const styles = MyNameStyle;

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [havingDebt, setHavingDebt] = useState(false);

    const counterPlus = (isPlus) => {
      if(isPlus){
        setNumber(number+1);
        number >=0 ? setHavingDebt(false) : setHavingDebt(true);
      }
      else{
        setNumber(number-1);
        number <=0 ? setHavingDebt(true) : setHavingDebt(false);
      }
    }
  
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
          <TouchableOpacity
            style={[styles.btnCounter, styles.paying]}
            onPress={() => { counterPlus(false) }}
          >
            <Text>return a slice</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnCounter, styles.taking]}
            onPress={() => { counterPlus(true) }}
          >
            <Text>Eat a slice</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default Counter