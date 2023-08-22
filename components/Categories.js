import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'

const Categories = ({imgUrl, title}) => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}

    horizontal
    showsHorizontalScrollIndicator={false}>
        {/* categoryCard */}
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>
      <CategoryCard imgUrl='https://links.papareact.com/wru' title="Testing"/>
    </ScrollView>
  )
}

export default Categories;