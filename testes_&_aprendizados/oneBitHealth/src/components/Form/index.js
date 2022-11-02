import React, {useState} from "react"
import {TextInput, Text, View, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList} from "react-native"            //TouchableOpacity serve para dar efeito de opacidade
import ResultImc from "./ResultImc"
import styles from "./style"



export default function Form(){
    /*as consts serão usadas como valores e alteração de estado os "setTalCoisa"
    (2° item do array) server para alterar valores das consts e o talCoisa (1° 
    item do array) são valores já setados (ou valores correntes) passados em
    useState(), useState(null) passa um valor nulo para o 1° item do array*/ 
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    //const [errorMessageWeight, setErrorMessageWeight] = useState(null)
    //const [errorMessageHeight, setErrorMessageHeight] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator(){                                  //faz o cálculo de imc e seta a const Imc como o retorno do cálculo
        let heightFormat = height.replace(",",".")
        let weightFormat = weight.replace(",",".")
        let totalImc = ((weightFormat /(heightFormat * heightFormat)).toFixed(2))   //to fixed é pra deixar com 2 casas decimais
        setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)
    }

    function verificationHeight(){
        if(height == null){
            Vibration.vibrate();
            setErrorMessageHeight("Campo Obrigatório*")
        }
    }

    function verificationWeight(){
        if(weight == null){
            Vibration.vibrate();
            setErrorMessageWeight("Campo Obrigatório*")
        }
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo Obrigatório*")
        }

    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()                                     //faz a chamada da função que calcula o imc
            //as linhas abaixam alteram o valor das constantes setadas acima
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu Imc é igual a: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)                      //retorna os estados paras as contantes, apenas altera, não exibe
        }
        else{
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha Peso e Altura")
        }
        /*setam os novos valores passando novos estados, após a chamada da função, ou seja, os valores que foram chamados na função
        já foram exibidos e atualizados, só que é necessário refazer o processo para exibir os novos valores atualizados*/
    }


    return(
        <View style={styles.formContext}>
            {imc == null ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"/>
                    
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 80.750" keyboardType="numeric"/>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            :
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({item}) => {
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultImcItemList}>Resultado Imc =</Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item) => {
                item.id
            }}/>
        </View>
    );
}