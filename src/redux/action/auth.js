import Axios from 'axios';
import {setLoading} from '.';
import {showMessage, storeData} from '../../utils';

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        // console.log('data success: ', res.data);
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        const profile = res.data.data.user;
        //data user
        storeData('userProfile', profile);
        //data token
        storeData('token', {value: token});
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);

          Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
            // .then(resUpload => {
            //   console.log('success upload: ', resUpload);
            // })
            .catch(err => {
              showMessage('Upload photo tidak berhasil');
            });
        }
        dispatch(setLoading(false));
        // showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        console.log('sign up error: ', err?.response?.data?.message);
        dispatch(setLoading(false));

        showMessage(err?.response?.data?.message);
      });
  };
