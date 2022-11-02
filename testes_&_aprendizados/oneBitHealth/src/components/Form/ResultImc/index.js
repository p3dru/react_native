import React from "react"
import {View, Text, TouchableOpacity, Share} from "react-native"
import styles from "./style"

export default function ResultImc(props){  //pra galera de python: as props aqui são os args

    const onShare = async() => {
        const result = await Share.share({
            message: "Meu IMC hoje é de: " + props.resultImc,
        })
    }

    return(
        <View style={styles.resultImc}>
            <View style={styles.boxSharedButton}>
            <Text style={styles.information}>{props.messageResultImc}</Text>    
            <Text style={styles.numberImc}>{props.resultImc}</Text> 
                <TouchableOpacity  onPress = {onShare} style={styles.shared}>
                <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}