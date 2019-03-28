import { Text, View } from 'react-native';

export default class HelloWorldApp extends Components {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}
