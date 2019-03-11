import React, { Component } from "react";
import { Text, View, ScrollView, Image, Button, AsyncStorage } from "react-native";
import { Info, DeatilView } from "..";
import HeaderNavigationBar from "../../components/HeaderNavigationBar/HeaderNavigationBar";
import styles from './style'
import { f } from "../../../config/config.js";
export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <HeaderNavigationBar title={"Profile"} {...this.props} />
                <ScrollView style={{width:'100%'}}>
                    <View style={styles.container}>
                        <View style={styles.coverImageArea}>

                            <Image source={require('../../images/cover_photo.jpeg')} />
                        </View>
                        <Image style={styles.profileImage} source={require('../../images/user_image_1.jpg')} />
                        <View style={styles.contentArea}>
                            <Text style={styles.nameFont}>John Doe</Text>
                            <Text style={styles.cityFont}>Los Angeles</Text>
                        </View>
                        <Button title="Sign Out" onPress={this.logout} />
                    </View>
                </ScrollView>

            </View>
        );
    }
    logout = () => {        
        f.auth().signOut();
        const { navigate } = this.props.navigation;
        navigate('Login');


    }

}
