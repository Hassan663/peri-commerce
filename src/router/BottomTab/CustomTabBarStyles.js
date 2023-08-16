import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import {
    getIconName,
    getLabel,
    getSize
} from './callback';

export function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.mainContainer}        >
            <View style={styles.container}        >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = getLabel(options, route)
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
                    };

                    const onLongPress = () => navigation.emit({ type: 'tabLongPress', target: route.key, });
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: isFocused ? 2 : 1.5, }}
                        >
                            <View style={styles.buttonContainer(isFocused)}>
                                <View style={styles.iconContainer(isFocused)}>
                                    <Icon
                                        name={getIconName(label)}
                                        size={getSize(label, isFocused)}
                                        color={isFocused ? Colors.white : Colors.primary}
                                    />
                                </View>
                                {isFocused && <Text style={styles.title}>{label}</Text>}
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}