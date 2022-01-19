import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { provider, signInWithPopup, getAuth } from '../firebase'
import { CONSTANTS } from '../CONSTANTS'
import { CometChat } from '@cometchat-pro/react-native-chat'

const LoginScreen = () => {
  const signUpWithCometChat = (data) => {
    const authKey = CONSTANTS.Auth_Key
    const user = new CometChat.User(data.uid)
    user.setName(data.displayName)
    user.setAvatar(data.photoURL)
    CometChat.createUser(user, authKey)
      .then((res) => {
        console.log('User signed up...', res)
        CometChat.login(data.uid, authKey)
          .then((u) => console.log(u))
          .catch((error) => console.log(error))
      })
      .catch((error) => {
        console.log(error)
        alert(error.message)
      })
  }

  const loginWithCometChat = (data) => {
    const authKey = CONSTANTS.Auth_Key
    CometChat.login(data.uid, authKey)
      .then((u) => console.log('User Logged in...', u))
      .catch((error) => {
        if (error.code === 'ERR_UID_NOT_FOUND') {
          signUpWithCometChat(data)
        } else {
          console.log(error)
        }
      })
  }

  const signInPrompt = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
        loginWithCometChat(user)
      })
      .catch((error) => console.log(error))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgfy}
        source={{
          uri: 'https://images.pexels.com/photos/3137056/pexels-photo-3137056.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
      >
        <View style={styles.wrapper}>
          <Image style={styles.logo} source={require('../assets/privex.png')} />
          <Text style={{ color: '#fff' }}>
            Your fully functional secured chat app solution.
          </Text>

          <Pressable titleSize={20} style={styles.button}>
            <Text style={styles.buttonText} onPress={signInPrompt}>
              Log In with Google
            </Text>
          </Pressable>

          <Pressable style={{ marginTop: 20 }}>
            <Text style={{ color: 'white' }}>New User? Sign up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgfy: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'rgba(18, 38, 67, 0.96);',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#0caa92',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 600,
    fontSize: 20,
  },
})
