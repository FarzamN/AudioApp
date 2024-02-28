import { useRef, useState } from 'react'
import { Animated } from 'react-native';

const useButtonAnimation = () => {
    const [isPressed, setIsPressed] = useState(false);
    const scaleValue = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        setIsPressed(true);
        Animated.timing(scaleValue, {
            toValue: 0.95,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        setIsPressed(false);
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    return {
        isPressed, scaleValue, handlePressIn, handlePressOut
    }
}

export default useButtonAnimation