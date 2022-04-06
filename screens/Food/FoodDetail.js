import React from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";

import {
	Header,
	IconButton,
	CartQuantityButton,
	IconLabel,
	LineDivider,
	Rating,
	StepperInput,
	TextButton,
} from "../../components";
import {
	FONTS,
	SIZES,
	COLORS,
	icons,
	images,
	dummyData,
	MenuItems,
} from "../../constants";
import { createStore } from "redux";
import reducer from "../../redux/reducers/index";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../redux/store";

const store = configureStore();

const FoodDetail = ({ navigation, route }) => {
	const [foodItem, setFoodItem] = React.useState([]);
	const [qty, setQty] = React.useState(1);

	React.useEffect(() => {
		let { foodItem } = route.params;
		setFoodItem(foodItem);
	}, []);

	// Render

	function renderHeader() {
		return (
			<Header
				title="DETALLES"
				containerStyle={{
					height: 50,
					marginHorizontal: SIZES.padding,
					marginTop: 40,
				}}
				leftComponent={
					<IconButton
						icon={icons.back}
						containerStyle={{
							width: 40,
							height: 40,
							justifyContent: "center",
							alignItems: "center",
							borderWidth: 1,
							borderRadius: SIZES.radius,
							borderColor: COLORS.gray2,
						}}
						iconStyle={{
							width: 20,
							height: 20,
							tintColor: COLORS.gray2,
						}}
						onPress={() => navigation.goBack()}
					/>
				}
				rightComponent={<CartQuantityButton quantity={3} />}
			/>
		);
	}

	function renderDetails() {
		return (
			<View
				style={{
					marginTop: SIZES.radius,
					marginBottom: SIZES.padding,
					paddingHorizontal: SIZES.padding,
				}}>
				{/* Food Card */}
				<View
					style={{
						height: 190,
						borderRadius: 15,
						backgroundColor: COLORS.lightGray2,
					}}>
					{/* Calories & Favourite */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: SIZES.base,
							paddingHorizontal: SIZES.radius,
						}}>
						{/* Calories */}
						<View style={{ flexDirection: "row" }}>
							<Image
								source={icons.calories}
								style={{
									height: 30,
									width: 30,
								}}
							/>
							<Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
								{foodItem?.calories} calories
							</Text>
						</View>

						{/* Favourite */}
						<Image
							source={icons.love}
							style={{
								height: 20,
								width: 20,
								tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
							}}
						/>
					</View>

					{/* Food Image */}
					<Image
						source={foodItem?.image}
						resizeMode="contain"
						style={{
							height: 170,
							width: "100%",
						}}
					/>
				</View>

				{/* Food Info */}
				<View
					style={{
						marginTop: SIZES.padding,
					}}>
					{/* Name & Description */}
					<Text style={{ ...FONTS.h1 }}>{foodItem?.name}</Text>

					<Text
						style={{
							marginTop: SIZES.base,
							color: COLORS.darkGray,
							textAlign: "justify",
							...FONTS.body3,
						}}>
						{foodItem?.description2}
					</Text>

					{/* Ratings & Duration & Shipping */}
					<View
						style={{
							flexDirection: "row",
							marginTop: SIZES.padding,
						}}>
						{/* Ratings */}
						<IconLabel
							containerStyle={{
								backgroundColor: COLORS.primary,
							}}
							icon={icons.star}
							label="4.5"
							labelStyle={{
								color: COLORS.white,
							}}
						/>

						{/* Duration */}
						<IconLabel
							containerStyle={{
								marginLeft: SIZES.radius,
								paddingHorizontal: 0,
							}}
							icon={icons.clock}
							iconStyle={{
								tintColor: COLORS.black,
							}}
							label="30 Mins"
						/>

						{/* Shipping */}
						<IconLabel
							containerStyle={{
								marginLeft: SIZES.radius,
								paddingHorizontal: 0,
							}}
							icon={icons.dollar}
							iconStyle={{
								tintColor: COLORS.black,
							}}
							label="Envio gratis"
						/>
					</View>
				</View>
			</View>
		);
	}

	function renderProductItems() {
		return <MenuItems restaurantName={route.params.name} />;
	}

	// Funcion agregar  carrito

	//

	function renderFooter() {
		return (
			<View
				style={{
					flexDirection: "row",
					height: 120,
					alignItems: "center",
					paddingHorizontal: SIZES.padding,
					paddingBottom: SIZES.radius,
				}}>
				<TextButton
					buttonContainerStyle={{
						flex: 1,
						flexDirection: "row",
						height: 60,
						marginLeft: SIZES.radius,
						paddingHorizontal: SIZES.radius,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.primary,
					}}
					label="Comprar ahora"
					onPress={() => navigation.navigate("MyCart")}
				/>
			</View>
		);
	}

	return (
		<ReduxProvider store={store}>
			<View
				style={{
					flex: 1,
					backgroundColor: COLORS.white,
				}}>
				{/* Header */}
				{renderHeader()}

				<ScrollView showsVerticalScrollIndicator={false}>
					{/* Food Details */}
					{renderDetails()}

					<LineDivider />

					{/* Restaurant */}
					{renderProductItems()}
				</ScrollView>

				{/* Footer */}
				<LineDivider />

				{renderFooter()}
			</View>
		</ReduxProvider>
	);
};

export default FoodDetail;
