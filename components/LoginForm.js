import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable
} from "react-native";
import React from "react";

const users = [
    {
        username: "Jorge",
        password: "jorge123"
    },
    {
        username: "Maria",
        password: "maria123"
    },
    {
        username: "Rogerio",
        password: "rogerio123"
    }
]

export default function LoginForm({ navigation }) {
    const [username, setUsername] = React.useState();
    const [password, setPass] = React.useState();

    const userValidate = () => {
        users.forEach((user) => {
            if (user.username === username && user.password === password) {
                navigation.navigate("Juros", { name: "Juros" });
            }
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setUsername(masked)}
                    placeholder="Username"
                />

                <TextInput 
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setPass(masked)}
                    placeholder="Password"
                    inputMode="numeric"
                />

                <Pressable onPress={userValidate} style={styles.button}>
                    <Text style={{ fontSize: 15, }}>Login</Text>
                </Pressable>
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

        fontSize: 20,

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
})