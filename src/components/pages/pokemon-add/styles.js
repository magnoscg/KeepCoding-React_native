import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff5252',
    },
    inputContainer: {
        margin:20
    },
    label: {
        color: 'black'
    },
    inputView:{
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 4
    },
    input:{
        margin: 10,
        color: 'rgba(255,255,255,0.9)'
    },
    buttonContainer: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 10,
        padding: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',

    },
    buttonLabel: {
        color: 'black',
        fontWeight: '600',
        fontSize:16,
        textAlign: "center"
    },
    activityIndicator: {
        marginLeft: 10,
    },
    imageInputContainer: {
        marginTop: 40,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        height: '30%',
        marginHorizontal: 20,
    },
    imageInputButton: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 6,
        zIndex: 2,

    },
    imageInputLabel: {
        textTransform: "uppercase",
        color: 'white',
    },
    imageInputPreview: {
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})