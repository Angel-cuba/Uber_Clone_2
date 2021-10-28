import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ViewCart = () => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<TouchableOpacity
					style={{
						marginTop: 20,
						backgroundColor: 'black',
						alignItems: 'center',
						padding: 14,
						borderRadius: 30,
						width: Platform.isPad ? 400 : 300,
						position: 'relative',
					}}
				>
					<Text style={{ color: 'red', fontSize: 20 }}>View cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ViewCart;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		position: 'absolute',
		bottom: Platform.isPad ? 180 : 80,
		zIndex: 999,
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
	},
});
