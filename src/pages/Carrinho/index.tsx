import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import topo from '../../../assets/topo.png'

export default function Carrinho() {
    return(
        <Image source={ topo } style={style.topo}/>
    )
}

const style = StyleSheet.create({
    topo: {
        width: "100%"
    }
})