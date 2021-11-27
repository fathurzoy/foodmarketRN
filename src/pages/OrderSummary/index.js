import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import {API_HOST} from '../../config';
import {getData} from '../../utils';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('https://google.com');

  useEffect(() => {
    getData('token').then(res => {
      // console.log('token :', res);
      setToken(res.value);
    });
  }, []);

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    Axios.post(`${API_HOST.url}/checkout`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
        console.log('checkout success: ', res.data);
        setIsPaymentOpen(true);
        setPaymentUrl(res.data.data.payment_url);
      })
      .catch(err => {
        console.log('error checkout: ', err);
      });
    // navigation.replace('SuccessOrder')
  };

  const onNavChange = state => {
    console.log('nav: ', state);
    const urlSuccess =
      'http://foodmarket-backend.buildwithangga.id/midtrans/success?order_id=5333&status_code=201&transaction_status=pending';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.replace('SuccessOrder');
    }
  };
  if (isPaymentOpen === true) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => {
            setIsPaymentOpen(false);
          }}
        />
        <WebView
          source={{uri: paymentUrl}}
          onNavigationStateChange={state => {
            onNavChange(state);
          }}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </>
    );
  }

  return (
    <ScrollView>
      <Header
        title="Order Summary"
        subTitle="You deserve better meal"
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          name={item.name}
          price={item.price}
          items={transaction.totalItem}
          image={{uri: item.picturePath}}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1abc9c"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue label="Phone No." value={userProfile.phoneNumber} />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>

      <View style={styles.button}>
        <Button text="Checkout Now" onPress={() => onCheckout()} />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
