import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Search = ({navigation, route}) => {
	return (
		<View style={styles.mainView}>
		<Text>Search</Text>
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
	}
});


export default Search;