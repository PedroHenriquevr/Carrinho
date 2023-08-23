import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import topo from '../../../assets/topo.png'
import logo from "../../../assets/logo.png"

const width = Dimensions.get("screen").width;

export default function Carrinho() {
    return(
    <>
        <Image source={ topo } style={style.topo}/>
        <Text style={style.titulo}>Detalhes do Carrinho</Text>
        <View style={style.carrinho}>
        <Text style={style.nome}>Carrinho de Compras</Text>
        <View>
            <Image source={logo}/>
        <Text>Fazenda Etec Cidade do Livro</Text>
        </View>
        <Text>Carrinho de Compras</Text>
        <Text>Uma cesta com produtos selecionados cuidadosamente
            da fazenda direto para a sua cozinha.</Text>
        <Text>R$ 40,00</Text>
    </View>
    </>
    )
}

const style = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        padding: 16,
        fontFamily: "MontSerratItalic"
    },
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontFamily: 'MontSerratBold'
    }
})