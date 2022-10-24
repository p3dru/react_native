import React, {useState} from "react"
import {TextInput, Text, View, TouchableOpacity} from "react-native"            //TouchableOpacity serve para dar efeito de opacidade
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


    function imcCalculator(){                                   //faz o cálculo de imc e seta a const Imc como o retorno do cálculo
        return setImc((weight /(height * height)).toFixed(2))   //to fixed é pra deixar com 2 casas decimais
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()                                     //faz a chamada da função que calcula o imc
            //as linhas abaixam alteram o valor das constantes setadas acima
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu Imc é igual a: ")
            setTextButton("Calcular Novamente")
            return                                              //retorna os estados paras as contantes, apenas altera, não exibe
        }
        /*setam os novos valores passando novos estados, após a chamada da função, ou seja, os valores que foram chamados na função
        já foram exibidos e atualizados, só que é necessário refazer o processo para exibir os novos valores atualizados*/
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha Peso e Altura")
    }


    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"/>
                /*o "placeholder" serve apenas para dar um texto de exemplo no local a ser inserido
                "keyboardType" serve para indicar o tipo de teclado que queremos chamar ao clicar nesse local de input
                O onChangeText serve para alterar o estado da const a cada vez que é digitado algo no teclado
                Value é para que o valor seja exatamente o valor presente na const*/


                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex. 80.750" keyboardType="numeric"/>
                //Mesma explicação das linhas 47, 48, 49 e 50
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}>
                    //onPress aqui, chama a função apartir de quando o botão definido por TouchableOpacity é pressionado
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    /*{textButton} é para que o valor passado no texto seja sempre o valor que consta nessa variável, ou seja, ele
                    torna o texto dinâmico*/
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            /*messageImc e imc são consts definidas em Form/index.js e elas passam o valor das variáveis messageResultImc e resultImc que
            são passadas como props em Form/ResultImc/index.js nas linhas 9 e 10*/
        </View>
    )
}