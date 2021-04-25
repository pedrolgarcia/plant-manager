import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import Header from '../components/Header'
import EnvironmentButton from '../components/EnvironmentButton'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import api from '../services/api'

interface EnvironmentsProps {
  key: string;
  title: string;
}

export default function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);

  useEffect(() => {
    async function fetchEnvironments() {
      const { data } = await api.get('plants_environments');
      setEnvironments([{ key: 'all', title: 'Todos' }, ...data]);
    }

    fetchEnvironments();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 30
  }
})