
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Card, Text, TextInput } from 'react-native-paper';
import theme from '../../theme/theme'
import { Button, Icon } from '@rneui/base';
import { AddProduct } from "../../Services/ProductosSrv";
import uuid from 'react-native-uuid';
export function AddProd({ route, navigation }) {
    const [tituloaux, setTitulo] = useState("");
    const [precioaux, setPrecio] = useState("");
    const [categoriaaux, setCategoria] = useState("");
    const [Peso, setPeso] = useState("");
    const [Idaux, setId] = useState(uuid.v4());






    const AñadirProducto = () => {


        AddProduct({
            id: Idaux,
            price: precioaux,
            Category: categoriaaux,
            title: tituloaux,
            weigth:Peso
        });
    }



    return <View style={styles.container}>
        <Card>
            <Card.Cover source={{ uri: 'https://img.freepik.com/psd-premium/maqueta-botella-agua-dulce_358694-279.jpg?w=4000' }} />
            <Card.Title title={tituloaux} subtitle={categoriaaux} />
            <Card.Content>
                {/* <Text variant="titleLarge">{prod.title}</Text> */}
                <Text variant="bodyMedium">{precioaux}</Text>

            </Card.Content>
        </Card>

        <TextInput
            label="Codigo"
            value={Idaux}
            onChangeText={setId}
            mode="outlined"
            keyboardType="numeric"

        />

        <TextInput
            label="Nombre"
            value={tituloaux}
            onChangeText={setTitulo}
            mode="outlined"
            keyboardType="email-address"

        />


        <TextInput
            label="Precio"
            value={precioaux}
            onChangeText={setPrecio}
            mode="outlined"
            keyboardType="numeric"


        />

        <TextInput
            label="Categoria"
            value={categoriaaux}
            onChangeText={setCategoria}
            mode="outlined"
            keyboardType="email-address"


        />
        <TextInput
            label="Peso"
            value={Peso}
            onChangeText={setPeso}
            mode="outlined"
            keyboardType="numeric"


        />

        <View style={styles.cajaBotones}>
            <Button
                title='Agregar Producto'
                onPress={() => {
                    AñadirProducto();
                    navigation.goBack();
                }}
                buttonStyle={{ borderRadius: 10, backgroundColor: theme.colors.jade, alignSelf: "auto" }}
                containerStyle={{
                    width: 200,
                    paddingTop: 40
                }}
            />
        </View>
    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 10,
        // backgroundColor: "gray"
    },
    cajaBotones: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 4
    }

});
