import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import Topo from './components/Topo';
import Detalhe from "./components/Detalhe";



export default function Carrinho() {
    return(
    <>
        <Topo/>
        <View style={style.carrinho}>
        <Detalhe/>
    </View>
    </>
    )
}

const style = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    
})