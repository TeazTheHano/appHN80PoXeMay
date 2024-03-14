import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

export default colorStyle = StyleSheet.create({
    white: '#FFFFFF',
    main: '#00A9FF',
    sec1: '#89CFF3',
    sec2: '#A0E9FF',
    sec3: '#CDF5FD',
    orange: '#F78C07',
    yellow: '#F9ED32',
    gray: '#7C838A',
});

export const componentStyle = StyleSheet.create({
    // input 
    textInput: {
        borderRadius: vw(4),
        flex: 1,
        paddingVertical: vw(4),
        fontSize: vw(4),
    },

    
});