import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

const ViewCart = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
	// console.log('items---->', items[0].price);
	//console.log(restaurantName);
	const total = items
		.map((item) => Number(item.price.replace('£', '')))
		.reduce((prev, curr) => prev + curr, 0);

	const totalUSD = total.toLocaleString('eu', {
		style: 'currency',
		currency: 'EUR',
	});

	const checkCurrentModal = () => {
		return (
			<>
				<View style={styles.priceModalContainer}>
					<View style={styles.modalCheckOutContainer}>
						<Text style={styles.restaurantName}>{restaurantName}</Text>
						{items.map((item, index) => (
							<OrderItem key={index} item={item} />
						))}
						<View style={styles.subTotalContainer}>
							<Text style={styles.subtotalText}>SubTotal</Text>
							<Text>{totalUSD}</Text>
						</View>
					</View>
				</View>
			</>
		);
	};

	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setModalVisible(false)}
			>
				{checkCurrentModal()}
			</Modal>
			{total ? (
				<View style={styles.mainContainer}>
					<View style={styles.container}>
						<TouchableOpacity
							style={{
								marginTop: 20,
								backgroundColor: 'black',
								flexDirection: 'row',
								justifyContent: 'flex-end',
								alignItems: 'center',
								padding: 16,
								borderRadius: 30,
								position: 'relative',
							}}
							onPress={() => setModalVisible(true)}
						>
							<Text style={{ color: 'red', fontSize: 19 }}>View cart </Text>
							<Text style={{ color: 'white', fontSize: 20 }}>{totalUSD}</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
		</>
	);
};

export default ViewCart;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		position: 'absolute',
		width: Platform.isPad ? 400 : 320,
		bottom: Platform.isPad ? 80 : 60,
		right: Platform.isPad ? 200 : 30,

		zIndex: 999,
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%',
	},
	modal: {
		backgroundColor: 'black',
		padding: 10,
		borderRadius: 30,
		width: 150,
		alignItems: 'center',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// marginTop: 30,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	// Style for the modal with price
	priceModalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.6)',
		height: '100%',
	},
	modalCheckOutContainer: {
		backgroundColor: 'white',
		padding: 16,
		height: 500,
		borderWidth: 1,
	},
	restaurantName: {
		textAlign: 'center',
		fontWeight: '600',
		fontSize: 18,
		marginBottom: 10,
	},
	subTotalContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginHorizontal: 20,
		paddingLeft: 10,
	},
	subtotalText: {
		textAlign: 'left',
		fontWeight: '700',
		fontSize: 15,
		marginBottom: 10,
	},
});
