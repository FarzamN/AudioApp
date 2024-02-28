import { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';

/* 
    const galleryOptions = props?.galleryOptions || defaultGalleryOptions;
    let defaultGalleryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
};
*/
const useImagePicker = () => {
    const [picker, setPicker] = useState(false);
    const [image, setImage] = useState(null);
    const galleryLaunch = () => {
        let options = {
            storageOptions: {
                mediaType: 'photo',
                path: 'image',
                includeExtra: true,
            },
            selectionLimit: 1,
        };
        launchImageLibrary(options, res => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.errorMessage) {
                console.log('ImagePicker Error:', res.errorMessage);
            } else {
                const ele = res.assets[0]
                setImage({
                    name: ele.fileName,
                    uri: ele.uri,
                    type: ele.type,
                });
                setPicker(false);
            }
        });
    };

    const cameraLaunch = async () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        try {
            const cameraPermission = await request(PERMISSIONS.IOS.CAMERA);
            if (cameraPermission === 'granted') {
                launchCamera(options, res => {
                    if (res.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (res.errorMessage) {
                        console.log('ImagePicker Error: ', res.errorMessage);
                    } else {
                        const ele = res.assets[0]
                        setImage({
                            name: ele.fileName,
                            uri: ele.uri,
                            type: ele.type,
                        });
                        setPicker(false);
                    }
                });
            } else {
                console.log('Camera permission denied');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {
        picker, image, cameraLaunch, galleryLaunch, setPicker
    }
}

export default useImagePicker
