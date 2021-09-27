import React, {useState, useEffect} from 'react'
import {StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator} from 'react-native'
import FilmItem from './FilmItem'
import {getData} from './filmsData'
import async from "async";

const Search = ({navigation}) => {


    // const [filteredData,setFilteredData] = useState(allData);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let searchTxt = "";

   async function _loadFilms(playlistID) {
        let result = [];
        setIsLoading(true);
        await getData(playlistID).then(data => {
            setFilms([...data.items]);
            setIsLoading(false);
        })
    }

    const getData = (PLAYLIST_ID) => {
        const MAX_RESULT = 15;
        const API_KEY = "AIzaSyCHqxzlDUex2UUZQhfn_aZTKCPsnjlQLlE";

        async function fetchData() {
            return await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`).then(
                reponse => reponse.json());
        }

        return fetchData();
    }
    const _displayLoading = () => {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement :
                     small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }


    const _onChangeSearch = (nameText) => {
        searchTxt = nameText;
        console.log(searchTxt);
    }

    const handleSearch = (recherche) => {
        _loadFilms(recherche);
        films.forEach((item => (console.log(item.snippet.title))));
    }

    console.log("========================================================================")
    console.log("==================Ceci est un Render complet============================")
    console.log("==================de la fenetre Search.js===============================")
    console.log("========================================================================")
    console.log(isLoading);
    return (
        <View style={styles.main_container}>
            <TextInput
                style={styles.textinput}
                placeholder='Pathologie'
                onChangeText={(text) => _onChangeSearch(text)}
            />
            <Button title='Envoyer' onPress={() => handleSearch('PL4NcjUGQSQzAMr3NzvjNVZM8FBHX5COct')}/>
            <Text style={styles.textinput}>Selection par bouttons:{'\n'}Veuillez selectionner votre pathologie:</Text>
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
        marginTop: 50
    },
    textinput: {

        height: 50,
        justifyContent: 'center',
        backgroundColor: 'orange',
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