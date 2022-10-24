import React from "react"                                           //importa o react em si
import {View, Text} from "react-native"                             //importa elementos que são utilizados no arquivo, as "tags" <View> e <Text>
import styles from "./style"


export default function Title(){                                    //declara uma função exportável e com isso, pode ser utilizada em outros arquivos
    return(
        <View style={styles.boxTitle}>                              
            <Text style={styles.textTitle}>OneBitHealth</Text>      //Para gerar uma exibição no react, é necessário criar uma view
            /*em style={styles.textTitle} funciona assim: "style=", invoca o tipo de estilo a ser utilizado,
            styles.tipo serve para chamar a const styles que definimos anteriormente no arquivo em Title/style.js e a definição de
            estilo definida nele. A estrutura básica ficaria assim: style=constDeEstilização.metodoDaConstaDeEstilização
            */
        </View>
    )
}