import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { FormInput, TextButton } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
	const [email, setEmail] = React.useState("");
	const [emailError, setEmailError] = React.useState("");

	function isEnableSendEmail() {
		return email != "" && emailError == "";
	}

	const recuperarContrasena = async () => {
		if (!email) {
			console.log("No puede dejar los campos vacios");
			Alert.alert("¡Mandaditos Ya!", "No puede dejar los campos vacios");
		} else {
			try {
				const respuesta = await fetch(
					"http://192.168.0.7:7005/api/autenticacion/recuperarContrasena",
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							Usuario: email,
						}),
					}
				);

				const json = await respuesta.text();
				console.log(json);
				Alert.alert("¡Mandaditos Ya!", json);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<AuthLayout
			title="Recuperación de contraseña"
			subtitle="Por favor, introduzca su dirección de correo electrónico para recuperar su contraseña"
			titleContainerStyle={{
				marginTop: SIZES.padding * 2,
			}}>
			<View
				style={{
					flex: 1,
					marginTop: SIZES.padding * 2,
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

				<View
					style={{
						flexDirection: "row",
						marginTop: SIZES.radius,
						justifyContent: "center",
					}}>
					<Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
						¿Ya tienes una cuenta?{" "}
					</Text>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
							Inicia Sesión
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			{/* Sign In & Sign Up */}
			<TextButton
				label="Enviar Correo"
				disabled={isEnableSendEmail() ? false : true}
				buttonContainerStyle={{
					height: 55,
					alignItems: "center",
					marginTop: SIZES.padding,
					borderRadius: SIZES.radius,
					backgroundColor: isEnableSendEmail()
						? COLORS.primary
						: COLORS.transparentPrimary,
				}}
				onPress={recuperarContrasena}
			/>
		</AuthLayout>
	);
};

export default ForgotPassword;
