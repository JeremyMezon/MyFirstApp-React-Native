//El primer paso es importar las librerias de React y los componentes de React-Native
import { Text, View } from "react-native";
import MyNameStyle from '../styles/myNameStyles';
import Greetings from "./Greetings";
import Eat from "./Eat";
import Counter from "./Counter";

//Estilos del componente
const styles = MyNameStyle;

//Luego creamos nuestro componente de funcion donde renderiza todo lo que le retornemos
const FirstView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First App</Text>
      <Greetings name="Anonymous" />
      <View style={styles.eatSpace}>
        <Eat food="Pizza" />
      </View>
      <View style={styles.counterSpace}>
        <Counter />
      </View>
    </View>
  );
};

export default FirstView;
