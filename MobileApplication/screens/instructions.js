import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';

const Instructions = ({navigation, route}) => {
	return (
		<View style={styles.mainView}>
			<ScrollView>
				<View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
				<Text style={styles.appText}>This page details instructions on how to use the mobile application.</Text>
			<Text style={styles.appText}>To search for a particular room, press the 'Search' button either on the home page, or
			on the hamburger menu. To search for main building floors, please provide the building name and
					the room number, for example: "MB101".</Text>
				<Image
					source={require('../assets/Instructions1.png')}
					style={styles.image}
				/>
			<Text style={styles.appText}>For northwing floors, use "NW", and for southwing floors, use "SW".
			To specify the tenth and or eleventh floor, use 'X' for ten, and 'E' for eleven. For example: "SWE24" to search
						for 1124 in the southwing.</Text>
                    </View>
				<Text style={styles.appText}>
					On the map, the icon and rooms indicate the type of room it is. Yellow rooms are all accessible rooms whereas grey ones are not.
                    Lifts will always have a 'lift' icon and is highlighted in a blue colour as seen below.
				</Text>
				<Image
					source={require('../assets/Instructions2.png')}
					style={styles.image}
				/>
				<Text style={styles.appText}>
                    Stairs are highlighted in green lines and also have a 'stairs' icon.
				</Text>
				<Image
					source={require('../assets/Instructions3.png')}
					style={styles.image}
				/>
				<Text style={styles.appText}>
					Toilets are highlighted in light blue and have specific icons based on the type of toilet.
				</Text>
				<Image
					source={require('../assets/Instructions4.png')}
					style={styles.image}
				/>
				<Text style={styles.appText}>
					Click on the 'Go Back' screen or the hamburger menu to get started!
				</Text>
			<View style={styles.space} />
			<TouchableOpacity
				style={styles.appButtonContainer}
				title="Go Back"
				onPress={() => {
				navigation.goBack()}
				}>
				<Text style={styles.appButtonText}>Go Back</Text>
				</TouchableOpacity>
				<View style={styles.space} />
			</ScrollView>
		</View>
	)
};

const styles = StyleSheet.create({
	mainView: {
		width: 400,
		height: 100,
		flexDirection: 'row',
        justifyContent: 'flex-end',
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	image: {
		flex: 1, borderWidth: 1, borderColor: '#000000', alignSelf: 'center'
    },
	appButtonContainer: {
		width: 200,
		alignSelf: 'center',
		textAlign: 'center',
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
		textAlign: 'center',
		textTransform: "uppercase"
	},
	appText: {
		margin: 10,
		textAlign: "center",
		fontSize: 16,
		color: "#000",
		fontWeight: "bold",
	},
	space: {
		width: 20,
		height: 20
	},
	bigspace: {
		width: 50,
		height: 50
	}
});


export default Instructions;