import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

import Button from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function PlantSelect() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})