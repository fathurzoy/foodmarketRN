import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {showMessage, useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    }; //combine dari registerReducer
    // console.log('data register: ', data);
    dispatch(setLoading(true));

    dispatch(signUpAction(data, photoReducer, navigation));
    // Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
    //   .then(res => {
    //     console.log('data success: ', res.data);
    //     if (photoReducer.isUploadPhoto) {
    //       const photoForUpload = new FormData();
    //       photoForUpload.append('file', photoReducer);

    //       Axios.post(
    //         'http://foodmarket-backend.buildwithangga.id/api/user/photo',
    //         photoForUpload,
    //         {
    //           headers: {
    //             Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
    //             'Content-Type': 'multipart/form-data',
    //           },
    //         },
    //       )
    //         .then(resUpload => {
    //           console.log('success upload: ', resUpload);
    //         })
    //         .catch(err => {
    //           showMessage('Upload photo tidak berhasil');
    //         });
    //     }
    //     dispatch(setLoading(false));
    //     showMessage('Register Success', 'success');
    //     navigation.replace('SuccessSignUp');
    //   })
    //   .catch(err => {
    //     console.log('sign up error: ', err?.response?.data?.message);
    //     dispatch(setLoading(false));

    //     showMessage(err?.response?.data?.message);
    //   });
  };

  // const showToast = (message, type) => {
  //   showMessage({
  //     message: message,
  //     type: type === 'success' ? 'success' : 'danger',
  //     backgroundColor: type === 'success' ? '#1abc9c' : '#d9435e',
  //   });
  // };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it's valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            onPress={() => {
              onSubmit();
            }}
          />
          <Gap height={12} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8d92a3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
