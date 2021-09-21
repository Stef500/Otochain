import React, {useState ,useEffect} from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList ,ActivityIndicator} from 'react-native'
import FilmItem from './FilmItem'
import { getData } from './filmsData'

const Search = ({navigation}) =>{


   // const [filteredData,setFilteredData] = useState(allData);
    const [films, setFilms] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch2 = (recherche) => {
        console.log(recherche);
        let value = recherche.toLowerCase();
        let result = [];
        const playListGeneral = 'PL4NcjUGQSQzAMr3NzvjNVZM8FBHX5COct'
        getData( playListGeneral).then(data => {
            console.log("l'objet global retour de youtube:");
            //console.log(data.items);

            //data.items.forEach(snippet.title));
            setFilms([...data.items]);



            //console.log(data.items.snippet.title);

            //console.log(films);
        }
        );
    }

    const RecupTitresPistes = () => {
        const [titresPistes,setTitresPistes] = useState([]);
        for (let j = 0 ; j<films.length ; j ++){
            console.log("Le log commence ici: ");
            //console.log(films[j].snippet.title);
            setTitresPistes([...films[j].snippet.title]);
        }
        return (
            <View>
           <FlatList
                    data={titresPistes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Text>{item} </Text>} //<FilmItem data={item}/>
                    onEndReachedThreshold={0.5}
                />
            </View>
        )
    }

    const getData=(PLAYLIST_ID) => {
        let sortie = []
        const MAX_RESULT = 15;
        // const PLAYLIST_ID = "PL4NcjUGQSQzCBED8JDyNTWBZRKpPs6N5I";
        const API_KEY = "AIzaSyCHqxzlDUex2UUZQhfn_aZTKCPsnjlQLlE";

        return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`).then(
        reponse => reponse.json())

    }
    const   _displayLoading= () => {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }

    const   _loadFilms= (playlistID) => {
        let result = [];
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

    const SearchField=() =>{
        const [recherche,setRecherche] = useState("");

        return(
            <View>
                <Text>Search:</Text>
                <TextInput type="text"   onChangeText={(text)=>setRecherche(text)} onSubmitEditing={()=>handleSearch(recherche)} />
            </View>
        )
    }
    const handleSearch = (recherche) => {
        var results = YouTube.Search.list('id,snippet', {q: recherche, maxResults: 25});
        setFilms([...results]);
        {/* for(var i in results.items) {
            var item = results.items[i];
            Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }*/}
    }

// onSubmitEditing={({ nativeEvent }) => this.setState({ result: nativeEvent.text })}

    console.log("RENDER")
    console.log(isLoading);
    return (
        <View style={styles.main_container}>
          <SearchField/>
            


          <RecupTitresPistes/>

            <TextInput
                        style={styles.textinput}
                        placeholder='Titre du film'
                        onChangeText={(text) => this._searchTextInputChanged(text)}
                    />
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