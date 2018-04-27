import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Platform,
} from 'react-native';

import UserInput from './UserInput';
import Tr from "../../data/Translations";

import usernameImg from '../../icons/username.png';
import passwordImg from '../../icons/password.png';

const behavior = (Platform.OS === 'ios') ? 'position' : 'padding';

const FormSignup = props => {
	const {
		todos,
		actions,
		formData,
		userData
	} = props;
	const { currentLang } = userData;

	const _onChangeEmailSignup = value => {
		actions.changeEmailSignup(value);
	};

	const _onChangePasswordSignup = value => {
		actions.changePasswordSignup(value);
	};

	return (
		<KeyboardAvoidingView behavior={behavior}
			style={styles.container}>
			<UserInput source={usernameImg}
				onChangeText={_onChangeEmailSignup}
				value={formData.emailSignup}
				placeholder='Email'
				autoCapitalize={'none'}
				returnKeyType={'done'}
				autoCorrect={false} />
			<UserInput source={passwordImg}
				onChangeText={_onChangePasswordSignup}
				value={formData.passwordSignup}
				secureTextEntry={true}
				placeholder={Tr.passwordInput[currentLang]}
				returnKeyType={'done'}
				autoCapitalize={'none'}
				autoCorrect={false} />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	}
});

export default FormSignup;
