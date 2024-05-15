import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../constans'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';


export default function Destinations() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {
        destinationData.map((item, index) => { //dung ngoac () thay cho {} thi ko can return neu dung {} nhu code thi phai cos return dong ben duoi
            return (
                <Destinationcard navigation={navigation} item={item} key={index}/>
            )
        })
      }
    </View>
  )
}

export const Destinationcard = ({index, navigation, item}) => {
    let isEven = index % 2 === 0;
    const [isFavourite, toggleFavourite] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Destination', {...item})}
            style={styles.Destinationcard}
        >
            <Image source={item.image} style={styles.avatar}/>
            <TouchableOpacity 
                onPress={() =>toggleFavourite(!isFavourite)}
                style={styles.heartIcon}
            >
                <AntDesign name='heart' size={20} color={isFavourite ? 'red' : 'white'}/>
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    Destinationcard: {
        justifyContent: 'flex-end',
        position: 'relative',
        padding: 16,
        paddingVertical: 24,
        gap: 5,
        marginBottom: 20,
        width: wp(44),
        height: wp(65)
    },
    avatar: {
        position: 'absolute',
        width: wp(44),
        height: wp(65),
        borderRadius: 25,
    },
    heartIcon: {
        position: 'absolute',
        top: 16,
        right: 16,
        borderRadius: 50,
        padding: 12,
        backgroundColor: 'black',
    },
    title: {
        fontSize: wp(5),
        fontWeight: 'bold',
        color: 'white',
    }
})