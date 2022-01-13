import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-web'

const ChatContainer = () => {
  return (
    <View style={styles.container}>
      <Stories />
      {Array(15)
        .fill()
        .map((item, i) => (
          <ChatList key={i} />
        ))}
    </View>
  )
}

const Stories = () => (
  <ScrollView
    style={{ flexGrow: 0 }}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  >
    {Array(7)
      .fill()
      .map((item, i) => (
        <View key={i} style={{ alignItems: 'center', marginHorizontal: 5 }}>
          <Avatar
            size={60}
            rounded
            source={{
              uri: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg',
            }}
          />
          <Text style={{ fontWeight: 600 }}>Jany Lee</Text>
        </View>
      ))}
  </ScrollView>
)

const ChatList = () => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    }}
  >
    <Avatar
      size={50}
      rounded
      source={{
        uri: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg',
      }}
    />

    <View
      style={{
        flex: 1,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text h5 style={{ fontWeight: 700 }}>
          Adrian Bully
        </Text>
        <Text style={{ color: 'gray' }}>
          {'It was great hanging out today with a really long text!'.slice(
            0,
            40
          ) + '...'}
        </Text>
      </View>

      <Text style={{ color: 'gray' }}>12:09</Text>
    </View>
  </TouchableOpacity>
)

export default ChatContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    overflow: 'hidden',
    paddingHorizontal: 15,
  },
})
