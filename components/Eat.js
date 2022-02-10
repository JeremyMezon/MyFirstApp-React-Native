//El primer paso es importar las librerias de React y los componentes de React-Native
import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";
import MyNameStyle from '../styles/myNameStyles'

//Estilos del componente
const styles = MyNameStyle;

//Componente dentro de otro

const Eat = (props) => {
    const [isHungry, setIsHungry] = useState(true);
    return (
      <View style={styles.eatingContainer}>
        <Text style={isHungry ? styles.hungry : styles.notHungry}>
          Yes, I am {isHungry ? "too hungry" : `eating ${props.food}`}
        </Text>
        <Pressable
          style={isHungry ? styles.eatBtn : styles.hungryBtn}
          onPress={() => setIsHungry(false)}
        >
          <Text style={isHungry ? styles.hungryText : styles.notHungryText}>
            {isHungry ? `I wanna eat ${props.food}` : `I am full`}{" "}
          </Text>
        </Pressable>
      </View>
    );
};

export default Eat;