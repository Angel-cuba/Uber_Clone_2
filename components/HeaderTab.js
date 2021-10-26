import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HeaderTab = () => {
	const [activeTab, setActiveTab] = useState('Delivery');

	return (
		<View style={styles.headerButton}>
			{/* Header Button */}
			<HeaderButton
				text="Delivery"
				btnColor="black"
				textColor="white"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<HeaderButton
				text="Pickup"
				btnColor="white"
				textColor="black"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</View>
	);
};

const HeaderButton = (props) => (
	<TouchableOpacity
		style={[
			styles.touchable,
			{ backgroundColor: props.activeTab === props.text ? 'black' : 'white' },
		]}
		onPress={() => props.setActiveTab(props.text)}
	>
		<Text style={[styles.text, { color: props.activeTab === props.text ? 'white' : 'black' }]}>
			{props.text}
		</Text>
	</TouchableOpacity>
);

export default HeaderTab;

const styles = StyleSheet.create({
	headerButton: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginVertical: 20,
	},
	touchable: {
		paddingVertical: 6,
		paddingHorizontal: 16,
		// marginTop: 10,
		borderRadius: 30,
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
