// Components/FilmItem.js
import { Dimensions } from 'react-native'
import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


class FilmItem extends React.Component {


    render() {
        let deviceWidth = Dimensions.get('window').width
        const item = this.props.data;
        const videoTitle= item.snippet.title;
        console.log(deviceWidth);
        let urlImage ='';
        if (deviceWidth<800){

            urlImage = item.snippet.thumbnails.default.url;
        }
        else{

            urlImage = item.snippet.thumbnails.medium.url;
        }

        console.log(deviceWidth);

        {/*il y a différentes images possibles sur youtube pour une vidéo:
        const urlImage = item.snippet.thumbnails.default.url;
        const urlImage = item.snippet.thumbnails.high.url;
        const urlImage = item.snippet.thumbnails.maxres.url;
        const urlImage = item.snippet.thumbnails.medium.url;
        const urlImage = item.snippet.thumbnails.standard.url;
        il peut être intéressant de décommenter ces lignes pour essayer.
        (Pour qu'elles apparaissent de façon optimale il faut adapter le style)
        etrangement la "standard" ne marche pas pour une raison que je n'explique pas encore.
        */}
        const videoDate = item.contentDetails.videoPublishedAt;
        const videoDescription = item.snippet.description;
        console.log(item);
        return (
            <View style={styles.main_container}>{/*flexDirection: 'row' agencement horizontal*/}
                <Image
                    style={deviceWidth>800? styles.imageMedium : styles.imageDefault}

                    source={{uri: urlImage}}
                />
                <View style={styles.content_container}>{/*Ici : agencement vertical*/}
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{videoTitle}</Text>

                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{videoDescription}</Text>
                        {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>Sorti le {videoDate}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    imageDefault: {
        width: 120,
        height: 80,
        margin: 5,
        backgroundColor: 'gray'
    },
    imageMedium: {
        width: 320,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default FilmItem