import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import { Avatar, Input, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MessageContainer />
    </SafeAreaView>
  )
}

const Header = () => (
  <View
    style={[styles.flexify, { paddingHorizontal: 15, paddingVertical: 25 }]}
  >
    <TouchableOpacity activeOpacity={0.5}>
      <Icon name="arrow-left" size={18} color="white" />
    </TouchableOpacity>

    <View style={[styles.flexify, { flex: 1, marginLeft: 15 }]}>
      <View style={styles.flexify}>
        <Avatar rounded source={require('../assets/avatar.jpg')} />
        <Text style={{ color: 'white', fontWeight: 600, marginLeft: 10 }}>
          Darlington Gospel
        </Text>
      </View>

      <View style={styles.flexify}>
        <TouchableOpacity activeOpacity={0.5} style={{ marginRight: 25 }}>
          <Icon name="video" size={18} color="white" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="phone-alt" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

const MessageContainer = () => {
  const viewport = useWindowDimensions()

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: 'white',
          maxHeight: viewport.height.toFixed(0) - 162,
          padding: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 5,
          }}
        >
          <Text h6 style={{ fontWeight: 600, fontSize: 12 }}>
            12/01/2022
          </Text>
        </View>
        <Message isLeft={true} />
        <Message />
        <Message />
        <Message isLeft={true} />
        <Message isLeft={true} />
        <Message />
      </ScrollView>

      <View style={[styles.flexify, styles.positAtBottom, styles.shadow]}>
        <TouchableOpacity
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            borderRadius: 50,
            backgroundColor: '#122643',
          }}
          activeOpacity={0.5}
        >
          <Icon name="plus" size={12} color="white" />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Input
            placeholder="Write a message..."
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>

        <TouchableOpacity
          style={{
            paddingVertical: 5,
            paddingHorizontal: 7,
            borderRadius: 50,
            backgroundColor: '#c5c5c5',
          }}
          activeOpacity={0.5}
        >
          <Icon name="arrow-right" size={12} color="black" />
        </TouchableOpacity>
      </View>
    </>
  )
}

const Message = ({ isLeft }) => {
  return isLeft ? (
    <View style={[styles.flexify, styles.spaceMsg]}>
      <Avatar rounded source={require('../assets/avatar.jpg')} />

      <View style={[styles.msgBg, { marginLeft: 10 }]}>
        <Text style={{ fontWeight: 800, fontSize: 13, color: '#4c4c4c' }}>
          Darlington Gospel
        </Text>
        <Text style={{ fontWeight: 600, marginVertical: 5 }}>
          Some really lengthy messages, without a shadow of doubt.
        </Text>
        <Text style={{ fontWeight: 600 }}>12:05</Text>
      </View>
    </View>
  ) : (
    <View style={[styles.flexify, styles.spaceMsg]}>
      <View
        style={[styles.msgBg, { backgroundColor: '#c5c5c5', marginRight: 10 }]}
      >
        <Text style={{ fontWeight: 800, fontSize: 13, color: '#4c4c4c' }}>
          Darlington Gospel
        </Text>
        <Text styles={{ fontWeight: 600, marginVertical: 5 }}>
          Some really lengthy messages, without a shadow of doubt.
        </Text>
        <Text>12:05</Text>
      </View>

      <Avatar rounded source={require('../assets/avatar.jpg')} />
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122643',
  },
  flexify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  msgBg: {
    flex: 1,
    backgroundColor: '#efefef',
    borderRadius: 20,
    padding: 10,
  },
  spaceMsg: {
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffsetWidth: 0,
    shadowOffsetHeight: 2,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  positAtBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
})
