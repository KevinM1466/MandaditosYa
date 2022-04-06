import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { FormInput, TextButton, TextIconButton } from "../../components";
import { utils } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";

const SignUp = ({ navigation }) => {
	const [email, setEmail] = React.useState("");
	const [nombre, setNombre] = React.useState("");
	const [apellido, setApellido] = React.useState("");
	const [telefono, setTelefono] = React.useState("");
	const [direccion, setDireccion] = React.useState("");
	const [tipoUsuario, setTipoUsuario] = React.useState(1);
	const [estadoUsuario, setEstadoUsuario] = React.useState("AC");
	const [password, setPassword] = React.useState("");
	const [showPass, setShowPass] = React.useState(false);

	const [emailError, setEmailError] = React.useState("");
	const [usernameError, setUsernameError] = React.useState("");
	const [passwordError, setPasswordError] = React.useState("");

	function isEnableSignUp() {
		return (
			email != "" && password != "" && emailError == "" && passwordError == ""
		);
	}

	const guardar = async () => {
		if (!nombre || !apellido || !direccion || !email || !password) {
			console.log("No puede dejar los campos vacios");
			Alert.alert("¡Mandaditos Ya!", "No puede dejar los campos vacios");
		} else {
			try {
				const respuesta = await fetch(
					"http://192.168.0.7:7005/api/clientes/guardar",
					{
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							NombreCliente: nombre,
							ApellidoCliente: apellido,
							TelefonoCliente: telefono,
							Direccion: direccion,
							Usuario: email,
							Contrasena: password,
							TipoUsuario: tipoUsuario,
							EstadoUsuario: estadoUsuario,
						}),
					}
				);

				const json = await respuesta.text();
				console.log(json);
				Alert.alert("¡Mandaditos Ya!", json, [
					{ text: "OK", onPress: () => navigation.navigate("SignIn") },
				]);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<ScrollView>
			<AuthLayout
				title="Empecemos"
				subtitle="¡Crea una cuenta para continuar!"
				titleContainerStyle={{
					marginTop: SIZES.height > 800 ? SIZES.radius : 0,
				}}>
				<View
					style={{
						flex: 1,
						marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius,
					}}>
					{/* Form Inputs */}
					<FormInput
						label="Nombre"
						keyboardType="default"
						autoCompleteType="name"
						value={nombre}
						onChange={(value) => {
							setNombre(value);
						}}
						errorMsg={usernameError}
						appendComponent={
							<View
								style={{
									justifyContent: "center",
								}}>
								<Image
									source={
										nombre == "" || (nombre != "" && usernameError == "")
											? icons.correct
											: icons.cancel
									}
									style={{
										height: 20,
										width: 20,
										tintColor:
											nombre == ""
												? COLORS.gray
												: nombre != "" && usernameError == ""
												? COLORS.green
												: COLORS.red,
									}}
								/>
							</View>
						}
					/>

					<FormInput
						label="Apellido"
						keyboardType="default"
						autoCompleteType="name"
						value={apellido}
						onChange={(value) => {
							setApellido(value);
						}}
						errorMsg={usernameError}
						appendComponent={
							<View
								style={{
									justifyContent: "center",
								}}>
								<Image
									source={
										apellido == "" || (apellido != "" && usernameError == "")
											? icons.correct
											: icons.cancel
									}
									style={{
										height: 20,
										width: 20,
										tintColor:
											apellido == ""
												? COLORS.gray
												: apellido != "" && usernameError == ""
												? COLORS.green
												: COLORS.red,
									}}
								/>
							</View>
						}
					/>

					<FormInput
						label="Telefono"
						keyboardType="number-pad"
						autoCompleteType="name"
						value={telefono}
						onChange={(value) => {
							setTelefono(value);
						}}
						errorMsg={usernameError}
						appendComponent={
							<View
								style={{
									justifyContent: "center",
								}}>
								<Image
									source={
										telefono == "" || (telefono != "" && usernameError == "")
											? icons.correct
											: icons.cancel
									}
									style={{
										height: 20,
										width: 20,
										tintColor:
											telefono == ""
												? COLORS.gray
												: telefono != "" && usernameError == ""
												? COLORS.green
												: COLORS.red,
									}}
								/>
							</View>
						}
					/>

					<FormInput
						label="Direccion"
						keyboardType="default"
						autoCompleteType="street-address"
						value={direccion}
						onChange={(value) => {
							setDireccion(value);
						}}
						errorMsg={usernameError}
						appendComponent={
							<View
								style={{
									justifyContent: "center",
								}}>
								<Image
									source={
										direccion == "" || (direccion != "" && usernameError == "")
											? icons.correct
											: icons.cancel
									}
									style={{
										height: 20,
										width: 20,
										tintColor:
											direccion == ""
												? COLORS.gray
												: direccion != "" && usernameError == ""
												? COLORS.green
												: COLORS.red,
									}}
								/>
							</View>
						}
					/>

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
						onChange={(value) => {
							utils.validatePassword(value, setPasswordError);
							setPassword(value);
						}}
						errorMsg={passwordError}
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

					{/* Sign Up & Sign In */}
					<TextButton
						label="Registrarse"
						disabled={isEnableSignUp() ? false : true}
						buttonContainerStyle={{
							height: 55,
							alignItems: "center",
							marginTop: SIZES.padding,
							borderRadius: SIZES.radius,
							backgroundColor: isEnableSignUp()
								? COLORS.primary
								: COLORS.transparentPrimary,
						}}
						onPress={guardar}
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
						<TextButton
							label="Inicia Sesión"
							buttonContainerStyle={{
								backgroundColor: null,
							}}
							labelStyle={{
								color: COLORS.primary,
								...FONTS.h3,
							}}
							onPress={() => navigation.goBack()}
						/>
					</View>
				</View>

				{/* Footer */}
			</AuthLayout>
		</ScrollView>
	);
};

export default SignUp;
