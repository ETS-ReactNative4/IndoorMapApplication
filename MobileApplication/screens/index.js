import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Index = ( {navigation, route} ) => {
	return (
		<View style={styles.mainView}>
			<Image
				style={styles.imageStyle}
				source={require('../assets/logo.png')}
			/>
			<View style={styles.space} />
			<Text style={styles.appText}>Map Navigation System</Text>
			<View style={styles.space} />
			<TouchableOpacity style={styles.appButtonContainer}
				title="Instructions"
				onPress={() => {
				navigation.navigate("Instructions", {instructions: {
					title:	"Instructions"
				}
				})
				}}>
				<Text style={styles.appButtonText}>Instructions</Text>
			</TouchableOpacity>
			<View style={styles.space} />
			<TouchableOpacity style={styles.appButtonContainer}
				title="Search"
				onPress={() => {
				navigation.navigate("Search", {search: {
					title:	"Search"
				}
				})
				}}>
				<Text style={styles.appButtonText}>Search</Text>
			</TouchableOpacity>
			<View style={styles.space} />
			<TouchableOpacity style={styles.appButtonContainer}
				title="Settings"
				onPress={() => {
				navigation.navigate("Settings", {settings: {
					title:	"Settings"
				}
				})
				}}>
				<Text style={styles.appButtonText}>Settings</Text>
            </TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	mainView:{
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#FFFFFF'
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
		textTransform: "uppercase",
		position: 'absolute',
        top: '20%'
    },
	space: {
		width: 20,
        height: 20
	},
	imageStyle: {
        position: 'absolute',
		top: 0
    }
});

export default Index;