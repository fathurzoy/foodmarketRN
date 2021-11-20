import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Header, ItemListFood, ItemValue} from '../../components';

const OrderSummary = ({navigation}) => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood image={FoodDummy1} items={14} />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1abc9c"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Fathur Rahman" />
        <ItemValue label="Phone No." value="0895 3803 2942" />
        <ItemValue label="Address" value="Jl Maninjau" />
        <ItemValue label="House No." value="58" />
        <ItemValue label="City" value="Depok" />
      </View>

      <View style={styles.button}>
        <Button
          text="Checkout Now"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </View>
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
