import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ChatContainer from '../components/ChatContainer'
import HomeHeader from '../components/HomeHeader'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ChatContainer />
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
