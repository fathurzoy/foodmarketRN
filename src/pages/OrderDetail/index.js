import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';

const OrderDetail = () => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          name="Sop Bumil"
          price="300.000"
          items={14}
          image={FoodDummy1}
          items={14}
        />
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

      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue label="#FM209391" value="Paid" valueColor="#1abc9c" />
      </View>

      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          onPress={() => navigation.replace('SuccessOrder')}
          color="#D9436E"
          textColor="white"
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

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
