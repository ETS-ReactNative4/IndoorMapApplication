import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


const Settings = ({navigation, route}) => {
	const [isSelected, setSelection] = useState(false);

	return (
		<View style={styles.mainView}>
			<Text style={styles.label}>☐ Specify nearest lift when room is searched.</Text>
			<Button
				title="Go Back"
				onPress={() => {
				navigation.goBack()}
				}/>
		</View>
	)
};

const styles = StyleSheet.create({
	mainView:{
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	checkboxContainer: {
		 flexDirection: "row",
		 marginBottom: 20,
	 },
	checkbox: {
		 alignSelf: "center",
	},
	label: {
		margin: 8,
	}
});


export default Settings;