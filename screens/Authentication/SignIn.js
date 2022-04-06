import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { AuthLayout } from "../";
import {
	CustomSwitch,
	FormInput,
	TextButton,
	TextIconButton,
} from "../../components";
import { utils } from "../../utils";

const SignIn = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");

	const [showPass, setShowPass] = useState(false);
	const [saveMe, setSaveMe] = useState(false);

	const iniciarSesion = async () => {
		if (!email || !password) {
			console.log("No puede dejar los campos vacios");
			Alert.alert("¡Mandaditos Ya!", "No puede dejar los campos vacios");
		} else {
			try {
				const respuesta = await fetch(
					"http://192.168.0.7:7005/api/autenticacion/inicioSesion",
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							Usuario: email,
							Contrasena: password,
						}),
					}
				);

				const json = await respuesta.json();
				console.log(json);
				if (json.msj === "Bienvenido") {
					Alert.alert(
						"¡Mandaditos Ya!",
						json.msj + "\nToken: " + json.data.token,
						[{ text: "OK", onPress: () => navigation.navigate("Home") }]
					);
				} else {
					Alert.alert("¡Mandaditos Ya!", json.msj);
				}
				const data = json.data;
				if (data.token) {
					const token = data.token;
					console.log(token);
					await AsyncStorage.setItem("Token", token);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};
	function isEnableSignIn() {
		return email != "" && password != "" && emailError == "";
	}

	return (
		<AuthLayout
			title="Bienvenido"
			subtitle="¡Bienvenido de nuevo, se te ha echado de menos!">
			<View
				style={{
					flex: 1,
					marginTop: SIZES.height > 800 ? SIZES.padding * 2 : SIZES.radius,
				}}>
				{/* Form Inputs */}
				<FormInput
					label="Correo"
					keyboardType="email-address"
					autoCompleteType="email"
					value={email}
					onChange={(value) => {
						utils.validateEmail(value, setEmailError);
						setEmail(value);
					}}
					errorMsg={emailError}
					appendComponent={
						<View
							style={{
								justifyContent: "center",
							}}>
							<Image
								source={
									email == "" || (email != "" && emailError == "")
										? icons.correct
										: icons.cancel
								}
								style={{
									height: 20,
									width: 20,
									tintColor:
										email == ""
											? COLORS.gray
											: email != "" && emailError == ""
											? COLORS.green
											: COLORS.red,
								}}
							/>
						</View>
					}
				/>

				<FormInput
					label="Contraseña"
					secureTextEntry={!showPass}
					autoCompleteType="password"
					containerStyle={{
						marginTop: SIZES.radius,
					}}
					value={password}
					onChange={(value) => setPassword(value)}
					appendComponent={
						<TouchableOpacity
							style={{
								width: 40,
								alignItems: "flex-end",
								justifyContent: "center",
							}}
							onPress={() => setShowPass(!showPass)}>
							<Image
								source={showPass ? icons.eye_close : icons.eye}
								style={{
									height: 20,
									width: 20,
									tintColor: COLORS.gray,
								}}
							/>
						</TouchableOpacity>
					}
				/>

				{/* Save me & Forgot pass */}
				<View
					style={{
						flexDirection: "row",
						marginTop: SIZES.radius,
						justifyContent: "space-between",
					}}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<CustomSwitch
							label="Guardar"
							value={saveMe}
							onChange={(value) => setSaveMe(value)}
						/>
					</View>
					<TextButton
						label="¿Has olvidado tu contraseña?"
						buttonContainerStyle={{
							backgroundColor: null,
						}}
						labelStyle={{
							color: COLORS.gray,
							...FONTS.body4,
						}}
						onPress={() => navigation.navigate("ForgotPassword")}
					/>
				</View>

				{/* Sign In & Sign Up */}
				<TextButton
					label="Iniciar Sesión"
					disabled={isEnableSignIn() ? false : true}
					buttonContainerStyle={{
						height: 55,
						alignItems: "center",
						marginTop: SIZES.padding,
						borderRadius: SIZES.radius,
						backgroundColor: isEnableSignIn()
							? COLORS.primary
							: COLORS.transparentPrimary,
					}}
					onPress={iniciarSesion}
				/>

				{/* Sign Up */}
				<View
					style={{
						flexDirection: "row",
						marginTop: SIZES.radius,
						justifyContent: "center",
					}}>
					<Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
						¿No tienes una cuenta?{" "}
					</Text>
					<TextButton
						label="Registrate"
						buttonContainerStyle={{
							backgroundColor: null,
						}}
						labelStyle={{
							color: COLORS.primary,
							...FONTS.h3,
						}}
						onPress={() => navigation.navigate("SignUp")}
					/>
				</View>
			</View>

			{/* Footer */}
			<View>
				<TextIconButton
					containerStyle={{
						height: 50,
						alignItems: "center",
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.blue,
					}}
					icon={icons.fb}
					iconPosition="LEFT"
					iconStyle={{
						tintColor: COLORS.white,
					}}
					label="Continuar con Facebook"
					labelStyle={{
						marginLeft: SIZES.radius,
						color: COLORS.white,
					}}
					onPress={() => navigation.replace("Home")}
				/>

				<TextIconButton
					containerStyle={{
						height: 50,
						alignItems: "center",
						marginTop: SIZES.radius,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.lightGray2,
					}}
					icon={icons.google}
					iconPosition="LEFT"
					iconStyle={{
						tintColor: COLORS.red,
					}}
					label="Continuar con Google"
					labelStyle={{
						marginLeft: SIZES.radius,
					}}
					onPress={() => navigation.replace("Home")}
				/>
			</View>
		</AuthLayout>
	);
};

export default SignIn;
