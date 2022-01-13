import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Avatar, Text } from 'react-native-elements'

const HomeHeader = () => {
  return (
    <View style={{ paddingVertical: 15, paddingHorizontal: 30 }}>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
          <Avatar rounded source={require('../assets/avatar.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="search" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <Text h4 style={{ color: 'white', marginTop: 15 }}>
        Messages
      </Text>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
})
