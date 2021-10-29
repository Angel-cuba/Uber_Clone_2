import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';

const ViewCart = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const items = useSelector((state) => state.cartReducer.selectedItems.items);
	// console.log('items---->', items[0].price);
	const total = items
		.map((item) => Number(item.price.replace('£', '')))
		.reduce((prev, curr) => prev + curr, 0);

	const totalUSD = total.toLocaleString('eu', {
		style: 'currency',
		currency: 'EUR',
	});

	const checkCurrentModal = () => {
		return (
			<View style={styles.modalContainer}>
				<View style={styles.modal}>
					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Text style={{ color: 'white' }}>Checkout</Text>
					</TouchableOpacity>
				</View>
			</View>
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

		bottom: Platform.isPad ? 180 : 60,
		right: Platform.isPad ? '' : 30,

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
		marginTop: 30,
	},
});
