import React from 'react';
import { Button, View, Text, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import ImageZoom from 'react-native-image-pan-zoom';


function Floor(props) {
	var isThisBuilding = props.isThisBuilding;
	var isThisFloor = props.isThisFloor;
	var isThisRoom = props.isThisRoom;
	
	if (isThisRoom == "The Hub" 
		|| isThisRoom == "The Great Hall" 
		|| isThisRoom == "Cafe Tierra" 
		|| isThisRoom == "Café Tierra"
		|| isThisRoom == "Costa Coffee" 
		|| isThisRoom =="IT Help Desk" ) {
		isThisBuilding = "MB";
		isThisFloor = "G";
	}

	//Check for all main building floors.
	if (isThisBuilding == "MB") {
		switch (isThisFloor) {
			case 'G':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBGroundFloor.png')} 
							style={styles.zoomedImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '1':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBFirstFloor.png')} 
							style={styles.zoomedImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			default:
				return <Text>Invalid Floor.</Text>
		}
	}
	return <Text>Invalid room.</Text>
}

const Map = ({navigation, route}) => {
	const map = route.params.map;
	return (
		<View style={styles.mainView}>
		<Floor isThisBuilding={map.title} isThisFloor={map.floor} isThisRoom={map.roomNumber} />
		</View>
	)
};

const styles = StyleSheet.create({
	mainView:{
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	zoomedImg:{
		marginBottom: 10,
		resizeMode: "cover",
		width: 840,
		height: 600
	}
});

export default Map;