import { Button, Overlay, Input } from 'react-native-elements'
import { View, Text, StyleSheet } from 'react-native'
import { useGlobalState, setGlobalState } from '../store'
import { Formik } from 'formik'
import * as Yup from 'yup'

const addGroupFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('A group name is required')
    .min(3, 'Group name needs to be at least 3 characters long'),
  password: Yup.string()
    .required('A password is required')
    .min(6, 'Password needs to be at least 6 characters long'),
})

const AddGroup = () => {
  const [modal] = useGlobalState('modal')

  const toggleOverlay = () => setGlobalState('modal', !modal)

  const onAddGroup = (name, password) => {
    toggleOverlay()
    console.log({ name, password })
  }

  return (
    <Overlay
      isVisible={modal}
      onBackdropPress={toggleOverlay}
      overlayStyle={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 320,
      }}
    >
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={(values) => onAddGroup(values.name, values.password)}
        validationSchema={addGroupFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <Text style={styles.textPrimary}>Add Group</Text>
            <Input
              errorStyle={{ color: 'red' }}
              errorMessage={values.name.length > 1 ? errors.name : ''}
              style={{ borderBottomWidth: 0 }}
              placeholder="Name"
              autoCapitalize="none"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              textContentType="givenName"
            />
            <Input
              errorStyle={{ color: 'red' }}
              errorMessage={values.password.length > 1 ? errors.password : ''}
              style={{ borderBottomWidth: 0 }}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              textContentType="password"
              autoCorrect={false}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button
              style={{ marginTop: 10 }}
              title="Create Group"
              buttonStyle={{ backgroundColor: '#122643' }}
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </Overlay>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
    paddingHorizontal: 15,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
})

export default AddGroup
