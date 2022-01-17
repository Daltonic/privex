import React from 'react'
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-web'

const ChatContainer = () => {
  return (
    <View style={styles.container}>
      <Stories />
      <ChatList />
    </View>
  )
}

const Stories = () => (
  <ScrollView
    style={[
      styles.shadow,
      {
        flexGrow: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingVertical: 15,
      },
    ]}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  >
    {Array(20)
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

const ChatList = () => {
  const viewport = useWindowDimensions()

  return (
    <ScrollView
      style={{ maxHeight: viewport.height.toFixed(0) - 194, marginTop: 50, paddingTop: 15 }}
      showsVerticalScrollIndicator={false}
    >
      {Array(15)
        .fill()
        .map((item, i) => (
          <TouchableOpacity
            key={i}
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
                    30
                  ) + '...'}
                </Text>
              </View>

              <Text style={{ color: 'gray' }}>12:09</Text>
            </View>
          </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default ChatContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30,
    overflow: 'hidden',
    paddingHorizontal: 15,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffsetWidth: 0,
    shadowOffsetHeight: 2,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
    zIndex: 9999
  },
})
