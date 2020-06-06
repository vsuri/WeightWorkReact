import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const Blink = (props) => {
    const [isShowingText, setIsShowingText] = useState(true);
}



class Homepage extends Component {

    static B = class {

    }


    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />

                <Grid>
                    <Row size={10}>

                        <Text style={{padding: 2}}>{"\n"} Schedule:</Text>
                    </Row>
                    <Row size={10}>
                        <Icon name="add-circle" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                        <Text style={{padding: 2}}> Monday</Text>
                    </Row>
                    <Row size={10}>
                        <Icon name="add-circle" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                        <Text style={{padding: 2}}> Tuesday</Text>
                    </Row>
                    <Row size={10}>
                        <Icon name="add-circle" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                        <Text style={{padding: 2}}> Wednesday</Text>

                    </Row>                    
                    <Row size={10}>
                        <Icon name="add-circle" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                        <Text style={{padding: 2}}> Thursday</Text>
                    </Row> 
                    <Row size={10}>
                        <Icon name="add-circle" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                        <Text style={{padding: 2}}> Friday</Text>

                    </Row>                    
                    <Row size={10}>
                        <Icon name="add-circle" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                        <Text style={{padding: 2}}> Saturday</Text>
                    </Row>          
                    <Row size={10}>
                        <Icon name="add-circle" style={{ fontSize: 24 }} onPress={() => console.log("clicking mail")} />
                        <Text style={{padding: 2}}> Sunday</Text>
                    </Row>              
                    <Row size={30}></Row>
                </Grid>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, 
        textAlignVertical: "center"
    }
});
export default Homepage;