import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../components/HomeHeader'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})
