import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SegmentedButtons } from "react-native-paper";
import kimaage from '../img/Kimikob.png'


export default function Home({navigation}: {navigation: any}) {
    const [value, setValue] = React.useState('FR');

    return(
        <View style={styles.container}>

            
            {/* Header avec Logo et Text de bienvenue */}
            <View style={[styles.sectionContainer, {}]}>

                <Image style={styles.img} source={kimaage} ></Image> 
                <Text style={styles.title}>Bienvenue sur le guide de Kimiko!</Text>
                <Text style={styles.text}>Trouver ici une liste des commandes selon vos besoins.</Text>

            </View>

            <View style={[styles.sectionContainer, {flex: 2,}]}>

                {/* Pressable pour naviguer vers listUser.tsx */}
                <LinearGradient style={[styles.press, {}]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00DF75', '#00BB9D']}>
                    <Pressable style={[styles.pressIn, {}]} onPress={() => navigation.navigate('User' as never)}>

                        <Text style={styles.title}>Utilisateur</Text>
                        <Text style={styles.text}>Créer et jouer un personnage</Text>
                        
                    </Pressable>
                </LinearGradient>

                {/* Pressable pour naviguer vers listMJ.tsx */}
                <LinearGradient style={[styles.press, {}]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF9900', '#FF675B']}>
                    <Pressable style={[styles.pressIn, {}]} onPress={() => navigation.navigate('MJ' as never)}>

                        <Text style={styles.title}>Maitre du Jeu</Text>
                        <Text style={styles.text}>Géstion des joueurs et NPC</Text>
                        
                    </Pressable>
                </LinearGradient>

                {/* Pressable pour naviguer vers listAdmin.tsx */}
                <LinearGradient style={[styles.press, {}]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#EE005F', '#B62A8F']}>
                    <Pressable style={[styles.pressIn, {}]} onPress={() => navigation.navigate('Admin' as never)}>

                        <Text style={styles.title}>Administrateur</Text>
                        <Text style={styles.text}>Géstion du Bot</Text>

                    </Pressable>
                </LinearGradient>

                {/* Boutton segmenter de React-Native-Paper, permettant de changer de langue. */}
                <SegmentedButtons
                    style={styles.seg}
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                    {
                        value: 'EN',
                        label: 'English',
                        style: {backgroundColor: value === 'EN' ? 'white' : 'grey'}
                    },
                    {
                        value: 'FR',
                        label: 'Français',
                        style: {backgroundColor: value === 'FR' ? 'white' : 'grey'}
                    },
                    ]}
                 />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000", 
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 180,
        width: 180
    },
    title: {
        color: 'white',
        fontSize: 25
    },
    text: {
        color: 'white',
        fontSize: 15
    },
    press: {
        flex: 1,
        width: '90%',
        backgroundColor: '#212121',
        marginVertical: 10,
        borderRadius: 25,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    pressIn: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    seg: {
        width: '90%',
        marginVertical: 10,

    },
  });