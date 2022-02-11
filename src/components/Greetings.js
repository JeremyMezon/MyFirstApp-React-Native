//El primer paso es importar las librerias de React y los componentes de React-Native
import React, { useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import MyNameStyle from '../../styles/myNameStyles'

//Estilos del componente
const styles = MyNameStyle;

const Greetings = (props) => {
    const [haveName, setIfHaveName] = useState(false);
    const [name, setName] = useState(props.name);
    return (
      <View style={styles.greetingContainer}>
        <Text style={haveName ? styles.greeting : styles.none}>
          Hi! my name is
          <Text style={{ fontWeight: "bold" }}> {name}</Text>
        </Text>
        <View style={!haveName ? styles.nameContainer : styles.none}>
          <TextInput
            style={styles.inputName}
            placeholder="What is your name?"
            onChangeText={(newText) => setName(newText)}
          />
          <Pressable
            style={styles.btnHaveName}
            onPress={() => setIfHaveName(true)}
          >
            <Text style={styles.textSend}>OK</Text>
          </Pressable>
        </View>
      </View>
    );
};

export default Greetings;