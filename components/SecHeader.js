import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "../pages/styles";
import logo from '../assets/logo3.png';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SecHeader({cartValue,toCart,prevPage}) {
  
  return (
    <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={prevPage}>
          <Ionicons name="md-chevron-back" style={{marginLeft: '8%'}} size={32} color="black" />
          </Pressable>
            <Image source={logo} style={styles.img} />
        </View>
        <View style={styles.icons}>
            <View style={styles.cart}>
              <Pressable onPress={toCart}>
                <Ionicons name="md-cart" size={32} color="black" />
              </Pressable>
            
            {cartValue>0&&<View style={styles.value}>
                    <Text style={styles.valueText}>{cartValue}</Text>
                </View>
            }
            </View>
            <Ionicons name="md-ellipsis-vertical" size={32} color="black" />
        </View>
    </View>
  );
}
