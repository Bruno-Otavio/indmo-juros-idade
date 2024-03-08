import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable
} from "react-native";
import React from "react";

export default function Juros() {
    const [value, setValue] = React.useState();
    const [tax, setTax] = React.useState();
    const [total, setTotal] = React.useState();

    const [year, setYear] = React.useState();
    const [curYear, setCurYear] = React.useState();
    const [age, setAge] = React.useState();

    const calculateTax = () => {
        let total = parseInt(value) + (parseInt(value) * parseInt(tax) / 100);
        setTotal(total);
    }

    const calculateAge = () => {
        let age = parseInt(curYear) - parseInt(year);
        setAge(age);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculo de Juros</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={setValue}
                    placeholder="Valor à ser taxado"
                    inputMode="numeric"
                />
                
                <TextInput 
                    style={styles.textInput}
                    onChangeText={setTax}
                    placeholder="Porcentagem da taxa"
                    inputMode="numeric"
                />

                <Pressable onPress={calculateTax} style={styles.button}>
                    <Text>Cálcular</Text>
                </Pressable>

                <Text style={{ marginTop: 15 }}>
                    Valor final: {(total == undefined) ? "R$" : `R$${total}`}
                </Text>
            </View>

            <Text style={styles.title}>Cálculo de Idade</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={setYear}
                    placeholder="Ano em que você nasceu"
                    inputMode="numeric"
                />
                
                <TextInput 
                    style={styles.textInput}
                    onChangeText={setCurYear}
                    placeholder="Ano atual"
                    inputMode="numeric"
                />

                <Pressable onPress={calculateAge} style={styles.button}>
                    <Text>Calcular</Text>
                </Pressable>

                <Text style={{ marginTop: 15 }}>
                    Idade: {age}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    },

    title: {
        fontSize: 30,
    },

    form: {
        width: 250,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },

    textInput: {
        width: "75%",
        height: "15%",

        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,

        marginTop: 15,

        fontSize: 15,

        borderColor: "#50C4ED",
        borderWidth: 1,
        borderRadius: 10
    },
    
    button: {
        marginTop: 25,
        padding: 10,
        paddingRight: 25,
        paddingLeft: 25,

        backgroundColor: "#50C4ED"
    }
});