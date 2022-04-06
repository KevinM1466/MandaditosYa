import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS } from "./theme";
import { useDispatch } from "react-redux";

const productos = [
	{
		title: "Sandwich McPollo",
		description:
			"Delicioso pollo crujiente cubierto con mayonesa, lechuga iceberg en tiritas. Servido en un pan tostado a la perfección.",
		price: "$13.50",
		image:
			"https://daser-gt.com/wp-content/uploads/2020/09/SandwichMcPollo.png",
	},
	{
		title: "Big Mac",
		description:
			"Comienza con dos patties de 100% carne y la salsa Big Mac, todo dentro de un pan con semillas de ajonjolí. Viene cubierta con pepinillos, crujiente lechuga, cebollas y queso americano.",
		price: "$19.20",
		image:
			"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-desktop?wid=830&hei=456&dpr=off",
	},
	{
		title: "Double Cheeseburger",
		description:
			"La Double Cheeseburger incluye dos patties de 100% pura carne sazonados con una pizca de sal y pimienta. Vienen cubiertos con pepinillos crujientes, cebollas picadas, ketchup, mostaza y dos rebanadas de queso americano derretido.",
		price: "$14.50",
		image:
			"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:product-header-desktop?wid=829&hei=455&dpr=off",
	},
	{
		title: "Double Quarter Pounder®* with Cheese",
		description:
			"Incluye dos patties de 100% carne fresca. Se les agregan dos rebanadas de queso derretido, cebollas en tiras y crujientes pepinillos, todo en un pan con semillas de ajonjolí.",
		price: "$21.50",
		image:
			"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-1:product-header-desktop?wid=829&hei=455&dpr=off",
	},
];

const style = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	titleStyle: {
		fontSize: 19,
		fontWeight: "bold",
	},
});

export default function MenuItems({ restaurantName }) {
	const dispatch = useDispatch();
	const selectedItem = (item, checkboxValue) =>
		dispatch({
			type: "ADD_ITEM",
			payload: {
				...item,
				restaurantName: restaurantName,
				checkboxValue: checkboxValue,
			},
		});

	return (
		<>
			{productos.map((producto, index) => (
				<View key={index}>
					<View style={style.menuItemStyle}>
						<BouncyCheckbox
							iconStyle={{
								borderColor: "lightgray",
								borderRadius: 0,
							}}
							fillColor={COLORS.primary}
							onPress={(checkboxValue) => selectedItem(producto, checkboxValue)}
						/>
						<ProductosInfo producto={producto} />
						<ProductosImage producto={producto} />
					</View>
					<Divider width={0.5} orientation="vertical" />
				</View>
			))}
		</>
	);
}

const ProductosInfo = (props) => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text style={style.titleStyle}>{props.producto.title}</Text>
		<Text>{props.producto.description}</Text>
		<Text>{props.producto.price}</Text>
	</View>
);

const ProductosImage = (props) => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Image
			source={{ uri: props.producto.image }}
			style={{ width: 100, height: 100, borderRadius: 8 }}
		/>
	</View>
);
