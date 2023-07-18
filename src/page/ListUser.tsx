import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function ListUser ({navigation}: {navigation: any}) {


        type ItemData = {
            id: string;
            title: string;
            cmd: string;
            desc: string;
        };
        const DATA: ItemData[] = [
            {
            id: "1",
            title: "!upload",
            cmd: "(pp/corp) (prénom de votre perso) (numéro si version différente de celle de base)",
            desc: "Cette commande vous permet d'ajouter une image de profil ou de corps à votre personnage (n'oubliez pas de poster une image avec votre message).",
            },
            {
            id: "2",
            title: "!addversion",
            cmd: "(prénom de votre perso) (numéro de 1 à 5)",
            desc: "Cette commande vous permet d'ajouter des versions supplémentaires à votre personnage, pratique si votre personnage change de forme).",
            },
            {
            id: "3",
            title: "!swap",
            cmd: "(prénom de votre perso) (numéro de 1 à 5)",
            desc: "Cette commande vous permet de changer la version de votre personnage (le numéro 0 étant celui de base).",
            },
            {
            id: "4",
            title: "!color",
            cmd: "(couleur en hexadécimal) (prénom de votre perso)",
            desc: "Cette commande vous permet de changer la couleur du bandeau des messages.",
            },
            {
            id: "5",
            title: "$(raccourcis commande)",
            cmd: "",
            desc: "Permet d'effectuer un jet de dé spécifique à l'une de vos caractéristiques/n Pour connaître les raccourcis faites !mycarac elles seront affichées devant les caractéristiques que vous possédez.",
            },
            {
            id: "6",
            title: "!mycarac",
            cmd: "",
            desc: "Permet de voir les caractéristiques de votre personnage principal elle affiche aussi les raccourcis de vos caractéristiques.",
            },
            {
            id: "7",
            title: "!rp",
            cmd: "(prénom du perso) (votre message)",
            desc: "Cette commande vous permet de parler en utilisant l'un de vos persos.",
            },
            {
            id: "8",
            title: "!mrp",
            cmd: "(prénom du perso suivi d'un ':') (votre message) (prénom du second perso suivi d'un ':') (votre message) (ect...)",
            desc: "Cette commande vous permet d'écrire plusieurs messages avec un ou plusieurs persos en une seule commande.",
            },
            {
            id: "9",
            title: "!fastrp",
            cmd: "",
            desc: "Cette commande vous permet d'utiliser le mode FastRp.",
            },
            {
            id: "10",
            title: "(lettre débutant le prénom de votre perso).",
            cmd: "(votre message)",
            desc: "Cette commande vous permet d'écrire un message RP rapidement [FastRp] en spécifiant uniquement le minimum de lettres pour choisir votre perso. (Exemple: a.Salut fera dire Salut au personnage Aurore)",
            },
            {
            id: "11",
            title: "!main",
            cmd: "(prénom du perso)",
            desc: "Permet de définir votre personnage principal.",
            },
            {
            id: "12",
            title: "r/R",
            cmd: "(votre message)",
            desc: "Permet d'écrire un message avec le personnage principal en utilisant un 'R'.",
            },
            {
            id: "13",
            title: "!des",
            cmd: "(votre message)",
            desc: "Permet d'écrire un message de description.",
            },
            {
            id: "14",
            title: "!lock / !unlock",
            cmd: "(perso)",
            desc: "Permet de lock ou unlock un personnage, lorsque que vous êtes en mode lock tout vos messages hors commandes du bot seront transformées en message RP (Vous pouvez changer de personnage en refaisant la commande avec un autre prénom ).",
            },
            {
            id: "15",
            title: "!del / !edit",
            cmd: "(nouveau message)",
            desc: "Permet d'effacer votre dernier message ou de le modifier.",
            },
            {
            id: "16",
            title: "!see",
            cmd: "(perso ou Pnj)",
            desc: "Permet de voir une version agrandie de l'image d'un joueur ou Pnj.",
            },
            {
            id: "17",
            title: "!mylist",
            cmd: "",
            desc: "Afficher une liste de vos personnages.",
            },
            {
            id: "18",
            title: "!r",
            cmd: "(nombre de dés)d(nombre de faces)+/-*(number)",
            desc: "Permet d'effectuer un jet de dés. (Exemple: !r 5d20+5)",
            },
            {
            id: "19",
            title: "!ticket",
            cmd: "(votre message)",
            desc: "Permet de signaler un problème au service de support.",
            },
            {
            id: "20",
            title: "!ask",
            cmd: "(votre message)",
            desc: "Permet de poser une question au service de support.",
            },
        ];


        function ItemRender ({ title, cmd, desc }) {
            const [cmdValue, setValue] = useState(false);

            {/* Si cmd est vide, mettre cmdValue en 'false', sinon, mettre en 'true'. */}
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

                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00DF75', '#00BB9D']} style={[styles.Item, {}]}>

                    <Text style={[styles.itemTextTitle, {paddingBottom: cmdValue == false ? 8 : 0}]}>{title}</Text>
                    {cmdValue && <Text style={styles.itemTextSubTitle}>{cmd}</Text>} {/* Si 'cmdValue' est 'True', afficher le composant Text et son contenu. */}
                    <Text style={styles.itemText}>{desc}</Text>

                </LinearGradient>

            </View>
          )
        }

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: "#000", flex: 1}]}>

            {/* Header */}
            <View style={styles.upperBar}>
                <Text style={styles.title}>Commande Utilisateur</Text>
            </View>

            {/* FlatList */}
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