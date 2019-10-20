import React, { Component } from 'react';

import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native'

const WIDTH = Dimensions.get('window').width
export default class Home extends Component {
    static navigationOptions =
        {
            title: 'Numbers To Words',

            headerStyle: {

                backgroundColor: '#000272'

            },

            headerTintColor: '#fff',

        };
    constructor() {
        super();
        this.state =
            {
                number: ''
            };
    }

    convert = () => {
        var amount = this.state.number;
        var words = new Array();
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        if (n_length <= 9) {
            var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++ , j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++ , j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    if(value==1)
                    words_string += "Crore "
                    else
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    if(value==1)
                    words_string+="Lakh "
                    else
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        Alert.alert('', words_string, [{ text: 'OK', onPress: () => console.log('OK Pressed') }])

    }

    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" backgroundColor="#000272" />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter Number'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        keyboardType={'numeric'}
                        onChangeText={(number) => this.setState({ number: number })}
                        value={this.state.number}
                    />
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this.convert.bind(this)}>
                    <Text style={styles.text}>Convert</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 60,
        paddingLeft: 6,
        marginTop: 100,
        width: 250,
        marginLeft: 70,
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        width: WIDTH - 150,
        height: 60,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        marginLeft: 80,
        marginTop: 100,
    },
    btnLogin: {
        width: 'auto',
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: "center",
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },
});