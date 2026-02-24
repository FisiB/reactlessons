import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const ButtonScreen=()=>{
    return(
        <View>
            <Text style={StyleSheet.textStyle}>Button Screen</Text>
            <Button
                title="Click me"
                color="purple"
                onPress={()=>console.log('Button Clicked')}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        textAlign:'center',
        marginTop:10,
        fontSize:15,
        marginBottom:10
    }
});

export default ButtonScreen;