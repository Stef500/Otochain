// Components/Search.js

import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList ,ActivityIndicator} from 'react-native'
import FilmItem from './FilmItem'
import { getData } from './filmsData'

const Search = ({navigation}) =>{
    const [films, setFilms] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);


 const   _displayLoading= () => {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel
                    de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le
                    chargement soit bien visible */}
                </View>
            )
        }
    }

 const   _loadFilms= (playlistID) => {
     setIsLoading(true);
        getData(playlistID ).then(data => {
            console.log("l'objet global retour de youtube:");
            console.log(data);
            setFilms([...data.items ]);
            setIsLoading(false);

        })

        console.log("Les films:");
        console.log(films);


    }




        console.log("RENDER")
        console.log(isLoading);
        return (
            <View style={styles.main_container}>
                <View></View>
                {/*<TextInput
                        style={styles.textinput}
                        placeholder='Titre du film'
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                    />*/}
                <Text style={styles.textinput} >Veuillez selectionner votre pathologie:</Text>
                <Button title='Labyrinthite' onPress={() => _loadFilms('PL4NcjUGQSQzCBED8JDyNTWBZRKpPs6N5I')}/>

                <Button title="Perte d'audition" onPress={() => _loadFilms('PL4NcjUGQSQzA_RZjrkJIVT53nSDFjmd0l')}/>
                <Button title='Otite moyenne' onPress={() => _loadFilms('PL4NcjUGQSQzDvwCqd2FSd0MrrblFUcmrP')}/>
                <Button title='Oreille du nageur' onPress={() => _loadFilms('PL4NcjUGQSQzDPlr5oONjnxvcXYoe-0cHs')}/>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem data={item}/>}

                    onEndReachedThreshold={0.5}

                />
                {_displayLoading()}
            </View>
        )

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {

        height: 50,
        justifyContent:'center',
        backgroundColor : 'orange',
        alignItems: 'center',

        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 200,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search