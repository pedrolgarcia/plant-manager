import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function UserIdentification() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  }
})