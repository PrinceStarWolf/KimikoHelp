import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function ListMJ ({navigation}: {navigation: any}) {


    type ItemData = {
        id: string;
        title: string;
        cmd: string;
        desc: string;
    };
    const DATA: ItemData[] = [
        {
        id: "1",
        title: "!addplayer",
        cmd: "(prénom) (nom) (mention du joueur/ping)",
        desc: "Cette commande vous permet de créer le personnage d'un joueur, n'oubliez pas de mettre une majuscule sur les noms propres..",
        },
        {
        id: "2",
        title: "!ar",
        cmd: "(valeur du dé ou du nom de la caractéristique, si elle a été créée)",
        desc: "Cette commande vous permet de demander un jet à tous les joueurs, le jet s'effectuera automatiquement lorsqu'ils réagirons avec l'émoji dé.",
        },
        {
        id: "3",
        title: "!setcarac",
        cmd: "(raccourcis de la carac) (nombre qu'a le joueur) (prénom du joueur)",
        desc: "Permet d'assigner une caractéristique à un joueur (Exemple : '!setcarac for 85 pierre' fera en sorte que Pierre ait 85 en force.",
        },
        {
        id: "4",
        title: "!seeplayer",
        cmd: "(prénom du joueur)",
        desc: "Permet de visualiser les caractéristiques d'un personnage, ainsi que toutes les images qui y sont associées.",
        },
        {
        id: "5",
        title: "!caraclist",
        cmd: "",
        desc: "Permet de voir l'ensemble des caractéristiques créée.",
        },
        {
        id: "6",
        title: "!playerlist",
        cmd: "",
        desc: "Cette commande vous affiche une liste de tous les personnages créés, si un perso n'a pas d'images, il sera marqué d'une croix.",
        },
        {
        id: "7",
        title: "!desmj",
        cmd: "",
        desc: "Permet d'écrire un message de description de MJ.",
        },
        {
        id: "8",
        title: "!npc",
        cmd: "(prénom) (message)",
        desc: "Cette commande vous permet de créer un message de Pnj, qu'il soit important ou non (Si le Pnj n'est pas très important (ex un garde), utilisez directement cette commande et ne vous embêtez pas à le créer, elle affichera une image par défaut).",
        },
        {
        id: "9",
        title: "!addnpc",
        cmd: "(prénom) (nom)",
        desc: "Cette commande vous permet de créer un Pnj unique qui pourra avoir des images comme les joueurs, n'oubliez pas de mettre une majuscule sur les noms propres. (si vous ne voulez pas de nom de famille mettez 'none').",
        },
        {
        id: "10",
        title: "!uploadnpc",
        cmd: "(pp/corp) (prénom du Pnj)",
        desc: "Cette commande vous permet d'ajouter une image de corps et de profil à un Pnj (n'oubliez pas de poster une image avec votre message)",
        },
        {
        id: "11",
        title: "!colornpc",
        cmd: "(couleur en hexadécimal) (prénom du Pnj)",
        desc: "Cette commande vous permet de changer la couleur du bandeau des messages.",
        },
        {
        id: "12",
        title: "!mainnpc",
        cmd: "(prénom du Pnj)",
        desc: "Cette commande vous permet de définir un Pnj principal.",
        },
        {
        id: "13",
        title: "N/n",
        cmd: "(message)",
        desc: "Cette commande vous permet d'utiliser le Pnj principal.",
        },
        {
        id: "14",
        title: "!npclist",
        cmd: "(perso)",
        desc: "Cette commande vous affiche une liste de tous les Pnj créé, si un Pnj n'a pas d'images, il sera marqué d'une croix.",
        },
    ];


    function ItemRender ({ title, cmd, desc }) {
        const [value, setValue] = useState(false);

        useEffect(() => {
        switch(cmd) {

            case "":
                setValue(false)
                console.log('false')
                break;
        
            default:
                setValue(true)
                console.log('true')
                break;

            }
        },[])
        return (
        <View style={[styles.container, {}]}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FF9900', '#FF675B']} style={[styles.Item, {}]}>
                <Text style={[styles.itemTextTitle, {paddingBottom: value == false ? 8 : 0}]}>{title}</Text>
                {value && <Text style={styles.itemTextSubTitle}>{cmd}</Text>}
                <Text style={styles.itemText}>{desc}</Text>
            </LinearGradient>
        </View>
      )
    }

return(
    <SafeAreaView style={[styles.container, {backgroundColor: "#000", flex: 1}]}>
        <View style={styles.upperBar}>
            <Text style={styles.title}>Commande Maître du Jeu</Text>
        </View>
        <FlatList
            nestedScrollEnabled={true}
            data={DATA}
            renderItem={({ item }) => <ItemRender title={item.title} cmd={item.cmd} desc={item.desc}/>}
            keyExtractor={item => item.id}   
        />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
upperBar: {
    height: 50,
    width: '95%',
    borderColor: 'white',
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
},
container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
},
title: {
    color: 'white',
    fontSize: 25
},
Item: {
    width: '95%',
    padding: 10,
    backgroundColor: '#00BB9D',
    borderRadius: 25,
    marginVertical: 10,
},
itemTextTitle: {
    marginLeft: 10,
    color: 'white',
    fontSize: 25
},
itemTextSubTitle: {
    paddingBottom: 8,
    color: 'white',
    fontSize: 16
},
itemText: {
    paddingTop: 8,
    borderColor: 'white',
    borderTopWidth: 2,
    color: 'white',
    fontSize: 19
},


})