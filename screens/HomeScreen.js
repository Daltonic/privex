import { SafeAreaView, StyleSheet } from 'react-native'
import AddGroup from '../components/AddGroup'
import ChatContainer from '../components/ChatContainer'
import HomeHeader from '../components/HomeHeader'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <AddGroup />
      <ChatContainer />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122643',
  },
})
