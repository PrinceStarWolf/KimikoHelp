import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function ListAdmin ({navigation}: {navigation: any}) {


    type ItemData = {
        id: string;
        title: string;
        cmd: string;
        desc: string;
        admin: boolean;
    };
    const DATA: ItemData[] = [
        {
        id: "1",
        title: "!setlanguage",
        cmd: "",
        desc: "Cette commande vous permet de changer la langue utilisée par Kimiko dans votre serveur, attendez que la liste apparaisse et écrivez votre choix.",
        admin: true,
        },
        {
        id: "2",
        title: "!admin",
        cmd: "(add/del) (mention de l'utilisateur)",
        desc: "Cette commande vous permet d'ajouter ou de retirer un joueur comme Aadministrateur bot.",
        admin: true,
        },
        {
        id: "3",
        title: "!sendhelp",
        cmd: "(user/mj/admin/owner)",
        desc: "Cette commande vous permet d'envoyer une liste des commandes du rôle de votre choix dans le salon dans lequel elle est entrée.",
        admin: true,
        },
        {
        id: "4",
        title: "!mj",
        cmd: "(add/del) (mention de l'utilisateur)",
        desc: "Cette commande vous permet de d'ajouter ou de de retirer un joueur comme Maitre du jeu.",
        admin: false,
        },
        {
        id: "5",
        title: "!channelf",
        cmd: "(add/del)",
        desc: "Cette commande bloques les messages RP du bot dans le channel actuel Attention si vous ne le faites pas, les utilisateurs, en mode lock, verront leurs messages se transformer en message Rp dans tous les salons.",
        admin: false,
        },
        {
        id: "6",
        title: "!carac add",
        cmd: "(nom de la carac (ex Force)) (raccourcis de la commande (ex Force = for)) (nombre de face du dés) (-/+)",
        desc: "Cette commande vous permet de créer une caractéristique qui pourra être attribuée au joueur avec les autres commandes. Le - et + servent à définir si le résultat doit être le plus haut ou le plus bas possible.",
        admin: false,
        },
        {
        id: "7",
        title: "!delplayer",
        cmd: "(prénom)",
        desc: "Cette commande vous permet de supprimer un joueur.",
        admin: false,
        },
        {
        id: "8",
        title: "!delnpc",
        cmd: "(prénom)",
        desc: "Cette commande vous permet de supprimer un Pnj.",
        admin: false,
        },
    ];


    function ItemRender ({ title, cmd, desc, admin }) {
        const [adminVal, setAdmin] = useState(false);
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
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#EE005F', '#B62A8F']} style={[styles.Item, {}]}>
                
                <Text style={[styles.itemTextTitle, {paddingBottom: value == false ? 8 : 0}]}>{title}</Text>
                {cmdValue && <Text style={styles.itemTextSubTitle}>{cmd}</Text>} {/* Si 'cmdValue' est 'True', afficher le composant Text et son contenu. */}
                <Text style={[styles.itemText, {paddingBottom: adminVal == false ? 0 : 8}]}>{desc}</Text>
                {admin && <Text style={styles.itemTextAdmin}>ATTENTION! Cette commande est utilisable que par le createur du serveur!</Text>} {/* Si 'admin' est 'True', afficher le composant Text et son contenu. */}

            </LinearGradient>
        </View>
      )
    }

return(
    <SafeAreaView style={[styles.container, {backgroundColor: "#000", flex: 1}]}>
        <View style={styles.upperBar}>
            <Text style={styles.title}>Commande Administrateur</Text>
        </View>
        <FlatList
            nestedScrollEnabled={true}
            data={DATA}
            renderItem={({ item }) => <ItemRender title={item.title} cmd={item.cmd} desc={item.desc} admin={item.admin}/>}
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
itemTextAdmin: {
    paddingTop: 8,
    borderColor: 'white',
    borderTopWidth: 2,
    color: "#FFB74D",
    fontSize: 19
},


})