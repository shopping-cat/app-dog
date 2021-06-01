import codePush from 'react-native-code-push'



export default codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME })(() => null)