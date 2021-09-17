import React from 'react'
import { View, Text } from 'react-native'

interface Props {
    id: number,
    colour: string,
    name: string,
    price: number,
    img:string
}

const ProductCard = (props: Props) => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ProductCard
