import React from "react"
import {View, Text} from "react-native"
import styles from "./style"

export default function ResultImc(props){                                       //pra galera de python: as props aqui são os args
    return(
        <View style={styles.resultImc}>
            //nas duas linhas abaixo temos dois resultados exibíveis que fazem parte da mesma view, uma view renderizando dois elementos
            <Text style={styles.information}>{props.messageResultImc}</Text>    
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}