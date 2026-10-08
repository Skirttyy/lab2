import { Pressable, View, StyleSheet, Image, Text, Alert } from "react-native"

export default function Story({ username, isMyself, darkTheme }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => Alert.alert('Story', `Ai apasat pe story-ul de la ${username}`)} style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}>
                <View style={styles.circle}>
                    <View style={styles.gap}>
                        <Image style={styles.image} source={{uri: `https://i.pravatar.cc/120?u=${username}`}}/>
                    </View>
                </View>
            </Pressable>
            <Text style={ darkTheme ? {color: "#ffffff"} : ""}>{isMyself ? "Story-ul meu" : username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    circle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        experimental_backgroundImage:
        'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
    },
    gap: {
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 27
    }
})