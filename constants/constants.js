const onboarding_screens = [
	{
		id: 1,
		backgroundImage: require("../assets/images/background_01.png"),
		bannerImage: require("../assets/images/favourite_food.png"),
		title: "Elije tu compra",
		description:
			"Elije cualquier comercio de tu zona y te lo llevamos hasta tu casa",
	},
	{
		id: 2,
		backgroundImage: require("../assets/images/background_02.png"),
		bannerImage: require("../assets/images/hot_delivery.png"),
		title: "Entrega a domicilio",
		description:
			"Hacemos que los pedidos sean más rápidos, simples y económicos, sin importar si realiza el pago en línea o en efectivo",
	},
	{
		id: 3,
		backgroundImage: require("../assets/images/background_01.png"),
		bannerImage: require("../assets/images/great_food.png"),
		title: "Receive the Great Food",
		description:
			"Recibirás tus pedidos en el menor tiempo posible. Y obtener créditos de entrega gratis para cada pedido.",
	},
];

const screens = {
	main_layout: "Principal",
	home: "Inicio",
	search: "Buscar",
	cart: "Tarjeta",
	favourite: "Favoritos",
	notification: "Notificaciones",
	my_wallet: "Mi Billetera",
};

const bottom_tabs = [
	{
		id: 0,
		label: screens.home,
	},
	{
		id: 1,
		label: screens.search,
	},
	{
		id: 2,
		label: screens.cart,
	},
	{
		id: 3,
		label: screens.favourite,
	},
	{
		id: 4,
		label: screens.notification,
	},
];

const delivery_time = [
	{
		id: 1,
		label: "10 Mins",
	},
	{
		id: 2,
		label: "20 Mins",
	},
	{
		id: 3,
		label: "30 Mins",
	},
];

const ratings = [
	{
		id: 1,
		label: 1,
	},
	{
		id: 2,
		label: 2,
	},
	{
		id: 3,
		label: 3,
	},
	{
		id: 4,
		label: 4,
	},
	{
		id: 5,
		label: 5,
	},
];

const tags = [
	{
		id: 1,
		label: "Hamburguesa",
	},
	{
		id: 2,
		label: "Comida Rapida",
	},
	{
		id: 3,
		label: "Pizza",
	},
	{
		id: 4,
		label: "Asiatica",
	},
	{
		id: 5,
		label: "Dessert",
	},
	{
		id: 6,
		label: "Breakfast",
	},
	{
		id: 7,
		label: "Vegetable",
	},
	{
		id: 8,
		label: "Taccos",
	},
];

const track_order_status = [
	{
		id: 1,
		title: "Pedido Confirmada",
		sub_title: "Tu pedido ha sido recibida",
	},
	{
		id: 2,
		title: "Preparando orden",
		sub_title: "Tu pedido esta siendo preparado",
	},
	{
		id: 3,
		title: "Entrega en progreso",
		sub_title: "Tu pediso esta en camino",
	},
	{
		id: 4,
		title: "Entragado",
		sub_title: "¡Pedido entregado!",
	},
];

const tips = [
	{
		id: 1,
		label: "No Tips",
		value: 0,
	},
	{
		id: 2,
		label: "$5",
		value: 5,
	},
	{
		id: 3,
		label: "$10",
		value: 10,
	},
	{
		id: 4,
		label: "$15",
		value: 15,
	},
	{
		id: 5,
		label: "$20",
		value: 20,
	},
];

const gender = [
	{
		id: 0,
		label: "Hombre",
		value: "Hombre",
	},
	{
		id: 1,
		label: "Mujer",
		value: "Mujer",
	},
];

const state = [
	{
		id: 0,
		label: "Sarawak",
		value: "Sarawak",
	},
	{
		id: 1,
		label: "Sabah",
		value: "Sabah",
	},
	{
		id: 2,
		label: "Johor",
		value: "Johor",
	},
	{
		id: 3,
		label: "Kedah",
		value: "Kedah",
	},
	{
		id: 4,
		label: "Kelantan",
		value: "Kelantan",
	},
	{
		id: 5,
		label: "Penang",
		value: "Penang",
	},
];

const GOOGLE_MAP_API_KEY = "AIzaSyCDKR1HdEML1HyHZmmyzHUQAv5P8IU7NQ0";

export default {
	onboarding_screens,
	screens,
	bottom_tabs,
	delivery_time,
	ratings,
	tags,
	track_order_status,
	tips,
	gender,
	state,
	GOOGLE_MAP_API_KEY,
};
