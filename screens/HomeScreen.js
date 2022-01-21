import { SafeAreaView, StyleSheet } from 'react-native'
import AddGroup from '../components/AddGroup'
import ChatContainer from '../components/ChatContainer'
import FloatingButton from '../components/FloatingButton'
import HomeHeader from '../components/HomeHeader'
import UserList from '../components/UserList'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <AddGroup />
      <ChatContainer />
      <FloatingButton />
      <UserList />
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
