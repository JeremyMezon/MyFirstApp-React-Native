import React from 'react';
import {View,Image,Text,TouchableOpacity,TextInput} from 'react-native';
import loginStyles from '../../styles/loginStyles';

const styles = loginStyles;

export const Login = () =>{

    return(
        <View style={styles.loginContainer}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require("../../assets/loginLogo.png")} 
                    style={styles.responsiveImg,styles.logoLogin} 
                />
            </View>
            <View style={styles.loginComponents}>
                <TextInput style={styles.inputLogin} placeholder="Username" />
                
                <TextInput secureTextEntry="true" style={styles.inputLogin} placeholder="Password" />
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.textLoginButton}>Let me In</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}