import React from 'react';
import { Button, View, Text, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import ImageZoom from 'react-native-image-pan-zoom';
import { mb_G_rooms, mb_1_rooms, mb_2_rooms, mb_3_rooms, mb_4_rooms, mb_5_rooms, mb_6_rooms, mb_7_rooms } from '../rooms.js';


function Floor(props) {
	var isThisBuilding = props.isThisBuilding;
	var isThisFloor = props.isThisFloor;
	var isThisRoom = props.isThisRoom.toUpperCase();


	//This is case insensitive
	if (isThisRoom != null) {
		if ( isThisRoom.match(/Hub/i) 
			|| isThisRoom.match(/Great Hall/i) 
			|| isThisRoom.match(/Tierra/i) 
			|| isThisRoom.match(/Costa/i) 
			|| isThisRoom.match(/Help Desk/i) ) 
			{
				isThisBuilding = "MB";
				isThisFloor = "G";
			}
	}

	//This is case insensitive
	if (isThisRoom != null) {
		if (isThisRoom.match(/abs/i)
			|| isThisRoom.match(/Wright/i)
			|| isThisRoom.match(/Sumpner/i)) {
			isThisBuilding = "MB";
			isThisFloor = "6";
		}
	}

	//Check for all main building floors.
	if (isThisBuilding == "MB") {
		switch (isThisFloor) {
			case 'G':
				if (mb_G_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the ground floor.</Text>
                }
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
							style={styles.zoomedMBImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '1':
				if (mb_1_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the first floor.</Text>
				}
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
							style={styles.zoomedMBImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '2':
				if (mb_2_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the second floor.</Text>
				}
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
							source={require('../assets/MainBuildingFloors/MBSecondFloor.png')} 
							style={styles.zoomedMBImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '3':
				if (mb_3_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the third floor.</Text>
				}
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
							source={require('../assets/MainBuildingFloors/MBThirdFloor.png')} 
							style={styles.zoomedMBImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '4':
				if (mb_4_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the fourth floor.</Text>
				}                
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
							source={require('../assets/MainBuildingFloors/MBFourthFloor.png')} 
							style={styles.zoomedMBImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '5':
				if (mb_5_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the fifth floor.</Text>
				}                
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
							source={require('../assets/MainBuildingFloors/MBFifthFloor.png')} 
							style={styles.zoomedMBImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '6':
				if (mb_6_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the sixth floor.</Text>
				}
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
							source={require('../assets/MainBuildingFloors/MBSixthFloor.png')} 
							style={styles.zoomedMBImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '7':
				if (mb_7_rooms.indexOf(isThisRoom) == -1) {
					return <Text>This room does not exist on the seventh floor.</Text>
				}                
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
							source={require('../assets/MainBuildingFloors/MBSeventhFloor.png')} 
							style={styles.zoomedMBImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			default:
				return <Text>Invalid Floor.</Text>
		}
	}

	//Check for all NorthWing floors.
	if (isThisBuilding == "NW") {
		switch (isThisFloor) {
			case 'G':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Groundfloor.png')} 
							style={styles.zoomedNWImg}
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
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Firstfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '2':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Secondfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '3':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Thirdfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '4':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Fourthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '5':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Fifthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '6':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Sixthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '7':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Seventhfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '8':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Eighthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case '9':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Ninthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			case 'X':
				return (
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Tenthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
					</ImageZoom>
				</View>
				)
				break;
			default:
				return <Text>Invalid Floor.</Text>
		}
	}

	//Check for all SouthWing floors.
	if (isThisBuilding == "SW") {
		switch (isThisFloor) {
			case 'G':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Groundfloor.png')} 
							style={styles.zoomedNWImg}
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
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Firstfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '2':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Secondfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '3':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Thirdfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '4':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Fourthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '5':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Fifthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '6':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Sixthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '7':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Seventhfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '8':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Eighthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case '9':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Ninthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case 'X':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Tenthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
					</View>
				)
				break;
			case 'E':
				return ( 
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Eleventhfloor.png')} 
							style={styles.zoomedNWImg}
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
	zoomedMBImg:{
		marginBottom: 10,
		resizeMode: "cover",
		width: 840,
		height: 600
	},
	zoomedNWImg:{
		marginBottom: 10,
		resizeMode: "cover",
		width: 600,
		height: 864
	}
});

export default Map;