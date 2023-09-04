import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect, useMemo, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/RestaurantSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItems } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid'
const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    const groupedItems = items.reduce((results, item) =>{
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);

  }, [items]);

  console.log(groupedItemsInBasket);
  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <Text className = "text-lg font-bold text-center">Basket</Text>
            <Text className = "text-center text-">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className = "rounded-full bg-gray-100 absolute top-3 right-5"
          >

            <XCircleIcon  color = "#00ccbb" height={50} width={50}/>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen