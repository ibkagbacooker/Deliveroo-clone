import { View, Text, SafeAreaView,Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon ,AdjustmentsVerticalIcon,ChevronDownIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';
const HomeScreen = () => {
    const navigation= useNavigation(); 
    const [featuredCategories, setFeaturedCategories] = useState([])
   
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(()=>{
      client.fetch( 
        `
        *[_type == "featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
          }
         `
        ).then((data)=>{
           setFeaturedCategories(data);
        });
        
      }, []);
  
  // console.log( featuredCategories);
  return (
    <SafeAreaView style={{paddingTop:35}} className="bg-white pt-5">
      {/* <Text> */}
        <View className="flex flex-row pb-3  items-center mx-4  space-x-2">
          <Image
              source = {{
                  uri: "https://links.papareact.com/wru",
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
       
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs ">
            Deliver Now!</Text> 
          <Text className="font-bold text-xl">
            Current Location    
          <ChevronDownIcon size={20} color="#00ccbb"/>
          </Text> 
        </View>
            <UserIcon size={35} color="#00ccbb"/>
        </View>  
        {/* {search} */ }
        <View className="flex-row item-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
              <MagnifyingGlassIcon color="gray" size={20} />
              <TextInput placeholder='Restaurants and cuisines' keyboardType="default"/> 
          </View>
          


              <AdjustmentsVerticalIcon color="#00ccbb"/>
        </View>
      {/* </Text> */}
      {/* {body} */}
      <ScrollView className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom:100,
      }}>
      {/* Categories */}
      <Categories />
      
      
      {/* Featured */}

      {featuredCategories?.map(Category=>(
        <FeaturedRow
        key = {Category._id}
        id = {Category._id}
        title={Category.name}
        description={Category.short_description}
        
      />
      ))}
      



      
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;