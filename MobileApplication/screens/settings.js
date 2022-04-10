import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const Settings = ({navigation, route}) => {
	const [isSelected, setSelection] = useState(false);

	return (
		<View style={styles.mainView}>
			<Text style={styles.label}>☐ Specify nearest lift when room is searched.</Text>
				<View style={styles.space} />
				<TouchableOpacity
					style={styles.appButtonContainer}
					title="Go Back"
					onPress={() => {
						navigation.goBack()
					}
					}>
					<Text style={styles.appButtonText}>Go Back</Text>
				</TouchableOpacity>
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
		fontSize: 16,
		color: "#000",
		alignSelf: "center",
	},
		appButtonContainer: {
			elevation: 8,
			backgroundColor: "#009688",
			borderRadius: 10,
			paddingVertical: 10,
			paddingHorizontal: 12
		},
		appButtonText: {
			fontSize: 18,
			color: "#fff",
			fontWeight: "bold",
			alignSelf: "center",
			textTransform: "uppercase"
		},
		appText: {
			fontSize: 18,
			color: "#000",
			fontWeight: "bold",
			alignSelf: "center",
		},
		space: {
			width: 20,
			height: 20
		},
});


export default Settings;