import React from "react"                                           //importa o react em si
import {View, Text} from "react-native"                             //importa elementos que são utilizados no arquivo, as "tags" <View> e <Text>
import styles from "./style"


export default function Title(){                                    //declara uma função exportável e com isso, pode ser utilizada em outros arquivos
    return(
        <View style={styles.boxTitle}>                              
            <Text style={styles.textTitle}>OneBitHealth</Text>
        </View>
    )
}