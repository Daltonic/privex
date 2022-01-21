import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native'
import { Avatar, Overlay } from 'react-native-elements'
import { setGlobalState, useGlobalState } from '../store'

const UserList = () => {
  const viewport = useWindowDimensions()
  const [showUsers] = useGlobalState('showUsers')

  const toggleOverlay = () => setGlobalState('showUsers', !showUsers)

  return (
    <Overlay
      isVisible={showUsers}
      onBackdropPress={toggleOverlay}
      overlayStyle={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 640,
      }}
    >
      <ScrollView
        style={{
          maxHeight: viewport.height.toFixed(0) - 194,
          padding: 20,
          width: '100%',
        }}
        showsVerticalScrollIndicator={false}
      >
        {Array(15)
          .fill()
          .map((item, i) => (
            <TouchableOpacity
              key={i}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
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

              <Text h5 style={{ fontWeight: 700, marginLeft: 20 }}>
                Adrian Bully
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Overlay>
  )
}

const styles = StyleSheet.create({})

export default UserList
