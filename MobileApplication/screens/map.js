import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {
	mb_G_rooms, mb_1_rooms, mb_2_rooms, mb_3_rooms, mb_4_rooms, mb_5_rooms, mb_6_rooms, mb_7_rooms,
	nw_G_rooms, nw_1_rooms, nw_2_rooms, nw_3_rooms, nw_4_rooms, nw_5_rooms, nw_6_rooms, nw_7_rooms, nw_8_rooms, nw_9_rooms, nw_10_rooms,
	sw_G_rooms, sw_1_rooms, sw_2_rooms, sw_3_rooms, sw_4_rooms, sw_5_rooms, sw_6_rooms, sw_7_rooms, sw_8_rooms, sw_9_rooms, sw_10_rooms, sw_11_rooms
} from '../rooms.js';

//onMove = {(e) => console.log(e.positionX, e.positionY, e.scale)}

function WasSearched(props) {
	var navigation = props.navigate;
	var room = props.room;
	if (!room.match(/000/i)){
		return (
			<View style={styles.bottom}>
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
		);
	}
    return <View></View>;
}

//Retrieve the index of the array of objects if it contains a name
function getIndex(rooms, name) {
	for (var i = 0; i < array.length; i++) {
		if (rooms[i].name.toUpperCase() === name.toUpperCase()) {
			return i;
		}
	}
	return -1;
}

function Floor(props) {
	var isThisBuilding = props.isThisBuilding;
	var isThisFloor = props.isThisFloor;
	var isThisRoom = props.isThisRoom.toUpperCase();
	var navigation = props.navigate;


	//This is case insensitive
	if (isThisRoom != null) {
		if ( isThisRoom.match(/Hub/i) 
			|| isThisRoom.match(/Great Hall/i) 
			|| isThisRoom.match(/Tierra/i) 
			|| isThisRoom.match(/Costa/i) 
			|| isThisRoom.match(/Help Desk/i)
			|| isThisRoom.match(/Conference/i)
			|| isThisRoom.match(/Council/i)
			|| isThisRoom.match(/Sartander/i))
			{
				isThisBuilding = "MB";
				isThisFloor = "G";
		}
		if (isThisRoom.match(/EPS Reception/i)) {
			isThisBuilding = "MB";
			isThisFloor = "1";
		}
		if (isThisRoom.match(/abs/i)
			|| isThisRoom.match(/Wright/i)
			|| isThisRoom.match(/Sumpner/i)
			|| isThisRoom.match(/Student Support/i)
			|| isThisRoom.match(/UG/i)) {
			isThisBuilding = "MB";
			isThisFloor = "6";
		}
		if (isThisRoom.match(/Final Year/i)) {
			isThisBuilding = "NW";
			isThisFloor = "2";
		}
		if (isThisRoom.match(/Reception/i)
			|| isThisRoom.match(/Entrance/i)) {
			isThisBuilding = "SW";
			isThisFloor = "G";
		}
		if (isThisRoom.match(/Placement/i)) {
			isThisBuilding = "SW";
			isThisFloor = "1";
		}
		if (isThisRoom.match(/Digital/i)
			|| isThisRoom.match(/Graphic/i)
			|| isThisRoom.match(/Pr/i)
			|| isThisRoom.match(/Publications/i)
			|| isThisRoom.match(/International/i)
			|| isThisRoom.match(/Market/i)
			|| isThisRoom.match(/Liasion/i)) {
			isThisBuilding = "SW";
			isThisFloor = "2";
		}
	}

    
	//Check for all main building floors.
	if (isThisBuilding == "MB") {
		switch (isThisFloor) {
			case 'G':
				var index = getIndex(mb_G_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the ground floor of the main building.</Text>
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
				}
				var x = mb_G_rooms[index].x;
				var y = mb_G_rooms[index].y;
				var scale = mb_G_rooms[index].scale;
				var duration = mb_G_rooms[index].duration;                
				return (
					<View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBGroundFloor.png')} 
							style={styles.zoomedMBImg}
							/>
						</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
                    </View>
                    
				)
				break;
			case '1':
				var index = getIndex(mb_1_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the first floor of the main building.</Text>
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
				}
				var x = mb_1_rooms[index].x;
				var y = mb_1_rooms[index].y;
				var scale = mb_1_rooms[index].scale;
				var duration = mb_1_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBFirstFloor.png')} 
							style={styles.zoomedMBImg}
							/>
							</ImageZoom>
						</View>
					<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '2':
				var index = getIndex(mb_2_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the second floor of the main building.</Text>
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
				}
				var x = mb_2_rooms[index].x;
				var y = mb_2_rooms[index].y;
				var scale = mb_2_rooms[index].scale;
				var duration = mb_2_rooms[index].duration;                
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBSecondFloor.png')} 
							style={styles.zoomedMBImg}
							/>
							</ImageZoom>
						</View>
					<WasSearched navigate={navigation} room={isThisRoom} />                        
				</View>
				)
				break;
			case '3':
				var index = getIndex(mb_3_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the third floor of the main building.</Text>
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
				}
				var x = mb_3_rooms[index].x;
				var y = mb_3_rooms[index].y;
				var scale = mb_3_rooms[index].scale;
				var duration = mb_3_rooms[index].duration;
				return (
                <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBThirdFloor.png')} 
							style={styles.zoomedMBImg}
							/>
							</ImageZoom>
						</View>
					<WasSearched navigate={navigation} room={isThisRoom} />                        
				</View>
				)
				break;
			case '4':
				var index = getIndex(mb_4_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the fourth floor of the main building.</Text>
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
				}
				var x = mb_4_rooms[index].x;
				var y = mb_4_rooms[index].y;
				var scale = mb_4_rooms[index].scale;
				var duration = mb_4_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBFourthFloor.png')} 
							style={styles.zoomedMBImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />                        
				</View>
				)
				break;
			case '5':
				var index = getIndex(mb_5_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the fifth floor of the main building.</Text>
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
				}
				var x = mb_5_rooms[index].x;
				var y = mb_5_rooms[index].y;
				var scale = mb_5_rooms[index].scale;
				var duration = mb_5_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBFifthFloor.png')} 
							style={styles.zoomedMBImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '6':
				var index = getIndex(mb_6_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the sixth floor of the main building.</Text>
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
				}
				var x = mb_6_rooms[index].x;
				var y = mb_6_rooms[index].y;
				var scale = mb_6_rooms[index].scale;
				var duration = mb_6_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBSixthFloor.png')} 
							style={styles.zoomedMBImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '7':
				var index = getIndex(mb_7_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the seventh floor of the main building.</Text>
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
				}
				var x = mb_7_rooms[index].x;
				var y = mb_7_rooms[index].y;
				var scale = mb_7_rooms[index].scale;
				var duration = mb_7_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={840}
                       imageHeight={600}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/MainBuildingFloors/MBSeventhFloor.png')} 
							style={styles.zoomedMBImg}
							/>
							</ImageZoom>
					</View>
					<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			default:
				return (
					<View style={styles.mainView}>
						<Text style={styles.appText}>Error!</Text>
						<View style={styles.space} />
						<Text style={styles.appSecondText}>This floor does not exist in the main building.</Text>
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
		}
	}

	//Check for all NorthWing floors.
	if (isThisBuilding == "NW") {
		switch (isThisFloor) {
			case 'G':
				var index = getIndex(nw_G_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space}/>
							<Text style={styles.appSecondText}>This room does not exist on the ground floor of the northwing.</Text>
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
				}
				var x = nw_G_rooms[index].x;
				var y = nw_G_rooms[index].y;
				var scale = nw_G_rooms[index].scale;
				var duration = nw_G_rooms[index].duration;
				return (
                    <View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Groundfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '1':
				var index = getIndex(nw_1_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the first floor of the northwing.</Text>
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
				}
				var x = nw_1_rooms[index].x;
				var y = nw_1_rooms[index].y;
				var scale = nw_1_rooms[index].scale;
				var duration = nw_1_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Firstfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '2':
				var index = getIndex(nw_2_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the second floor of the northwing.</Text>
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
				}
				var x = nw_2_rooms[index].x;
				var y = nw_2_rooms[index].y;
				var scale = nw_2_rooms[index].scale;
				var duration = nw_2_rooms[index].duration;
				return (
					<View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Secondfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '3':
				var index = getIndex(nw_3_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the third floor of the northwing.</Text>
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
				}
				var x = nw_3_rooms[index].x;
				var y = nw_3_rooms[index].y;
				var scale = nw_3_rooms[index].scale;
				var duration = nw_3_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Thirdfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '4':
				var index = getIndex(nw_4_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the fourth floor of the northwing.</Text>
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
				}
				var x = nw_4_rooms[index].x;
				var y = nw_4_rooms[index].y;
				var scale = nw_4_rooms[index].scale;
				var duration = nw_4_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
						enableCenterFocus={false}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}
					   useNativeDriver={true}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Fourthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '5':
				var index = getIndex(nw_5_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the fifth floor of the northwing.</Text>
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
				}
				var x = nw_5_rooms[index].x;
				var y = nw_5_rooms[index].y;
				var scale = nw_5_rooms[index].scale;
				var duration = nw_5_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Fifthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '6':
				var index = getIndex(nw_6_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the sixth floor of the northwing.</Text>
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
				}
				var x = nw_6_rooms[index].x;
				var y = nw_6_rooms[index].y;
				var scale = nw_6_rooms[index].scale;
				var duration = nw_6_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Sixthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '7':
				var index = getIndex(nw_7_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the seventh floor of the northwing.</Text>
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
				}
				var x = nw_7_rooms[index].x;
				var y = nw_7_rooms[index].y;
				var scale = nw_7_rooms[index].scale;
				var duration = nw_7_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Seventhfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '8':
				var index = getIndex(nw_8_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the eighth floor of the northwing.</Text>
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
				}
				var x = nw_8_rooms[index].x;
				var y = nw_8_rooms[index].y;
				var scale = nw_8_rooms[index].scale;
				var duration = nw_8_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Eighthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case '9':
				var index = getIndex(nw_9_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the ninth floor of the northwing.</Text>
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
				}
				var x = nw_9_rooms[index].x;
				var y = nw_9_rooms[index].y;
				var scale = nw_9_rooms[index].scale;
				var duration = nw_9_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Ninthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			case 'X':
				var index = getIndex(nw_10_rooms, isThisRoom);                
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the tenth floor of the northwing.</Text>
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
				}
				var x = nw_10_rooms[index].x;
				var y = nw_10_rooms[index].y;
				var scale = nw_10_rooms[index].scale;
				var duration = nw_10_rooms[index].duration;
				return (
                    <View>
				<View style={styles.mainView}>
					<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={950}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/NorthWingFloors/NorthWing_Tenthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
				</View>
				)
				break;
			default:
				return (
					<View style={styles.mainView}>
						<Text style={styles.appText}>Error!</Text>
						<View style={styles.space} />
						<Text style={styles.appSecondText}>This floor does not exist in the north wing.</Text>
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
		}
	}

	//Check for all SouthWing floors.
	if (isThisBuilding == "SW") {
		switch (isThisFloor) {
			case 'G':
				var index = getIndex(sw_G_rooms, isThisRoom);
                if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the ground floor of the south wing.</Text>
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
				}
				var x = sw_G_rooms[index].x;
				var y = sw_G_rooms[index].y;
				var scale = sw_G_rooms[index].scale;
                var duration = sw_G_rooms[index].duration;
                
				return (
                    <View>
					<View style={styles.mainView}>
							<ImageZoom cropWidth={Dimensions.get('window').width}
								cropHeight={Dimensions.get('window').height}
								imageWidth={600}
								imageHeight={950}
								maxScale={2.5}
								minScale={1}
								enableCenterFocus={false}
								useNativeDriver={true}
								centerOn={{ x:x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Groundfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
                        <WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '1':
				var index = getIndex(sw_1_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the first floor of the south wing.</Text>
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
				}
				var x = sw_1_rooms[index].x;
				var y = sw_1_rooms[index].y;
				var scale = sw_1_rooms[index].scale;
				var duration = sw_1_rooms[index].duration;
				return (
                    <View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}
					   centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Firstfloor.png')} 
							style={styles.zoomedNWImg}
							/>
						</ImageZoom>
						</View>
                        <WasSearched navigate={navigation} room={isThisRoom} />
                    </View>
				)
				break;
			case '2':
				var index = getIndex(sw_2_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the second floor of the south wing.</Text>
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
				}
				var x = sw_2_rooms[index].x;
				var y = sw_2_rooms[index].y;
				var scale = sw_2_rooms[index].scale;
				var duration = sw_2_rooms[index].duration;
				return (
                    <View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}
					   centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Secondfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '3':
				var index = getIndex(sw_3_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the third floor of the south wing.</Text>
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
				}
				var x = sw_3_rooms[index].x;
				var y = sw_3_rooms[index].y;
				var scale = sw_3_rooms[index].scale;
				var duration = sw_3_rooms[index].duration;
				return (
                    <View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}
					   centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Thirdfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '4':
				var index = getIndex(sw_4_rooms, isThisRoom);                
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the fourth floor of the south wing.</Text>
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
				}
				var x = sw_4_rooms[index].x;
				var y = sw_4_rooms[index].y;
				var scale = sw_4_rooms[index].scale;
				var duration = sw_4_rooms[index].duration;
				return (
					<View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
					   useNativeDriver={true}
					   centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Fourthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '5':
				var index = getIndex(sw_5_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the fifth floor of the south wing.</Text>
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
				}
				var x = sw_5_rooms[index].x;
				var y = sw_5_rooms[index].y;
				var scale = sw_5_rooms[index].scale;
				var duration = sw_5_rooms[index].duration;
				return (
					<View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
						cropHeight={Dimensions.get('window').height}
						imageWidth={600}
						imageHeight={864}
						maxScale={2.5}
						minScale={1}
						enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Fifthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '6':
				var index = getIndex(sw_6_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the sixth floor of the south wing.</Text>
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
				}
				var x = sw_6_rooms[index].x;
				var y = sw_6_rooms[index].y;
				var scale = sw_6_rooms[index].scale;
				var duration = sw_6_rooms[index].duration;
				return (
                    <View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
						cropHeight={Dimensions.get('window').height}
						imageWidth={600}
						imageHeight={864}
						maxScale={2.5}
						minScale={1}
						enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Sixthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '7':
				var index = getIndex(sw_7_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the seventh floor of the south wing.</Text>
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
				}
				var x = sw_7_rooms[index].x;
				var y = sw_7_rooms[index].y;
				var scale = sw_7_rooms[index].scale;
				var duration = sw_7_rooms[index].duration;
				return (
					<View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}
						onMove={(e) => console.log(e.positionX, e.positionY, e.scale)}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Seventhfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '8':
				var index = getIndex(sw_8_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the eighth floor of the south wing.</Text>
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
				}
				var x = sw_8_rooms[index].x;
				var y = sw_8_rooms[index].y;
				var scale = sw_8_rooms[index].scale;
				var duration = sw_8_rooms[index].duration;
				return (
                    <View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
							cropHeight={Dimensions.get('window').height}
							imageWidth={600}
							imageHeight={864}
							maxScale={2.5}
							minScale={1}
							enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Eighthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case '9':
				var index = getIndex(sw_9_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the ninth floor of the south wing.</Text>
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
				}
				var x = sw_9_rooms[index].x;
				var y = sw_9_rooms[index].y;
				var scale = sw_9_rooms[index].scale;
				var duration = sw_9_rooms[index].duration;
				return (
					<View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Ninthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case 'X':
				var index = getIndex(sw_10_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the tenth floor of the south wing.</Text>
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
				}
				var x = sw_10_rooms[index].x;
				var y = sw_10_rooms[index].y;
				var scale = sw_10_rooms[index].scale;
				var duration = sw_10_rooms[index].duration;
				return (
					<View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
						useNativeDriver={true}
						centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Tenthfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			case 'E':
				var index = getIndex(sw_11_rooms, isThisRoom);
				if (index == -1) {
					return (
						<View style={styles.mainView}>
							<Text style={styles.appText}>Error!</Text>
							<View style={styles.space} />
							<Text style={styles.appSecondText}>This room does not exist on the eleventh floor of the south wing.</Text>
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
				}
				var x = sw_11_rooms[index].x;
				var y = sw_11_rooms[index].y;
				var scale = sw_11_rooms[index].scale;
				var duration = sw_11_rooms[index].duration;
				return (
                    <View>
					<View style={styles.mainView}>
						<ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={600}
                       imageHeight={864}
					   maxScale={2.5}
					   minScale={1}
					   enableCenterFocus={false}
							useNativeDriver={true}
							centerOn={{ x: x, y: y, scale: scale, duration: duration }}>
							<Image 
							source={require('../assets/SouthWingFloors/SouthWing_Eleventhfloor.png')} 
							style={styles.zoomedNWImg}
							/>
							</ImageZoom>
						</View>
						<WasSearched navigate={navigation} room={isThisRoom} />
					</View>
				)
				break;
			default:
				return (
					<View style={styles.mainView}>
						<Text style={styles.appText}>Error!</Text>
						<View style={styles.space} />
						<Text style={styles.appSecondText}>This floor does not exist in the south wing.</Text>
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
		}
	}


	return (
		<View style={styles.mainView}>
			<Text style={styles.appText}>Error!</Text>
			<View style={styles.space} />
			<Text style={styles.appSecondText}>The room that you tried to search for does not exist.</Text>
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
}


const Map = ({navigation, route}) => {
	const map = route.params.map;
	return (
		<View style={styles.mainView}>
			<Floor navigate={navigation} isThisBuilding={map.title} isThisFloor={map.floor} isThisRoom={map.roomNumber} />
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
		height: 950
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
	appSecondText: {
		fontSize: 15,
		color: "#000",
        textAlign: "center",
		alignSelf: "center",
	},
	space: {
		width: 20,
		height: 20
	},
	hugespace: {
		width: 500,
		height: 500
	},
});

export default Map;