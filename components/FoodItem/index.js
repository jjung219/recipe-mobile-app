import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Button from '../Button';

import recipes from './recipes.js';

const FoodItem = () => {
  // const foodList = recipes.map(recipe => {
  //   return (
  //     <View style={styles.foodContainer}>
  //       <ImageBackground 
  //         source={recipe.image}
  //         style={styles.image}
  //       />

  //       <View style={styles.titles}>
  //         <Text style={styles.title}>{recipe.name}</Text>
  //         <Text style={styles.subtitle}>{recipe.duration}min</Text>
  //       </View>

  //       <Button />
  //   </View>
  //   )
  // })
  return (
    <View style={styles.foodContainer}>
      <ImageBackground 
        source={require('../../assets/Images/choco_chip_cookie.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Chocolate Chip Cookies</Text>
        <Text style={styles.subtitle}>35min</Text>
      </View>

      <Button />
    </View>
  );
};

export default FoodItem;