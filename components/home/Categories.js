import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { items } from '../../constExport/arrayMenuItems';

const Categories = () => {
	return (
		<View style={{ backgroundColor: 'white', paddingVertical: 10, paddingLeft: 20 }}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{/* loop starts here */}
				{items.map((item, index) => (
					<View key={index} style={styles.container}>
						<Image source={item.image} style={styles.image} />
						<Text style={styles.text}>{item.text}</Text>
					</View>
				))}
				{/* loop ends here */}
			</ScrollView>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		resizeMode: 'contain',
	},
	text: {
		fontSize: 14,
		fontWeight: '900',
	},
	container: {
		alignItems: 'center',
		marginRight: 30,
	},
});
