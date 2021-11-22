import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {getData, useForm} from '../../utils';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {setLoading, signInAction} from '../../redux/action';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    // console.log('form: ', form);
    // Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
    //   .then(res => {
    //     console.log('success', res);
    //   })
    //   .catch(err => {
    //     console.log('error', err);
    //   });
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button
          text="Sign In"
          onPress={() => {
            onSubmit();
          }}
        />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8d92a3"
          textColor="white"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
