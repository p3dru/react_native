import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    boxTitle:{
        alignItems:"center",            //centraliza na horizontal
        justifyContent:"center",        //centraliza na vertical
        padding: 10,                    //pra adicionar espaço
    },
    textTitle:{
        color:"#FF0043",                //define a cor
        fontSize: 24,                   //tamanho
        fontWeight: "bold",             //define o modo "negrito"
    },
});

export default styles                   //exporta a contante styles para que possa ser utilizada em outros arquivos