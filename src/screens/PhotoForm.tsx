import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
// import {Button, Chip, Divider, Text, TextInput} from 'react-native-paper';
// import CameraComponent from '../components/CameraPreview';
// import CameraChild from '../components/CameraComponent';
import CameraPreview from '../components/CameraPreview';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {Button, Chip, Divider, TextInput, Text} from 'react-native-paper';
import DatePickerInput from '../components/DatePickerInput';
import {setShowLoader} from '../reducer/imageReducer';
// import {PATH_URL} from '../constant/url.constant';
// import {setShowLoader} from '../reducer/imageReducer';
// import axios from 'axios';
// import * as FileSystem from 'expo-file-system';

export default function PhotoForm() {
  const [metaData, setMetaData] = useState({
    title: '',
    date: '',
    tags: [],
  });
  const [tagInput, setTagInput] = useState('');
  const [date, setDate] = useState(new Date());
  const img = useSelector((state: any) => state.image.imageData);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (img) {
      setMetaData({...metaData, date: moment().format('DD-MMM-YYYY')});
    }
  }, [img]);

  const INPUT_TYPE = {
    TITLE: 'title',
    DATE: 'date',
    TAG: 'tags',
  };

  const onChangeInput = (value: string, inputName: string) => {
    let tempValue = value;

    if (inputName === INPUT_TYPE.TAG) {
      setTagInput(tempValue);
    } else {
      setMetaData({
        ...metaData,
        [inputName]: tempValue,
      });
    }
  };

  const isNullOrEmpty = (value: any) => {
    return value === null || value === undefined || value === '';
  };
  // const getFileTypeFromExtension = (extension: string) => {
  //   const extensionToType: any = {
  //     jpg: 'image/jpg',
  //     jpeg: 'image/jpeg',
  //     png: 'image/png',
  //     gif: 'image/gif',
  //     bmp: 'image/bmp',
  //     webp: 'image/webp',
  //     svg: 'image/svg+xml',
  //     // Add more as needed
  //   };
  //   // Convert extension to lowercase to handle case sensitivity
  //   const lowerCaseExtension = extension.toLowerCase();

  //   return extensionToType[lowerCaseExtension] || 'application/octet-stream'; // Default to binary data if type is unknown
  // };

  // const postData = async () => {
  // //   const fetchData = async () => {
  // //     try {
  // //       const response = await axios.get(PATH_URL.UPLOAD_PHOTO.url);
  // //   console.log("skz", response.data);
  // //     } catch (error) {
  // //         // Tangani error
  // //         console.error('Error fetching data: ', error);
  // //     }
  // // };

  // // fetchData();
  //   try {
  //     const url = PATH_URL.UPLOAD_PHOTO.url; // Ganti dengan URL endpoint Anda

  //     // Membuat FormData
  //     const formData:any = new FormData();
  //     formData.append('photo', {
  //       uri: Platform.OS === 'android' ? img.uri : img.uri.replace('file://', ''),
  //       type: 'image/jpeg', // Sesuaikan dengan tipe file yang diunggah
  //       name: 'photo.jpg',
  //     });
  //     formData.append('metadata', JSON.stringify(metaData));

  //     console.log('photo', JSON.stringify(FormData));
  //     // Mengirim permintaan POST menggunakan Axios
  //     const response = await axios.post(url, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',

  //       },
  //     });

  //     console.log('Upload success:', response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Upload failed:', error);
  //     throw error;
  //   }
  // };

  // const postData = async () => {
  //   dispatch(setShowLoader(true));
  //   let formData: any = new FormData();
  //   const extension = img.uri.split('.').pop(); // Get file extension
  //   const type = getFileTypeFromExtension(extension);

  //   const filename = `photo_${moment().format('YYYYMMDD_HHmmss')}.${extension}`;
  //   try {
  //     let photoFile = await FileSystem.readAsStringAsync(img.uri, {
  //       encoding: FileSystem.EncodingType.Base64,
  //     });

  //     formData.append('photo', {
  //       uri:
  //         Platform.OS === 'android' ? img.uri : img.uri.replace('file://', ''),
  //       type: type,
  //       // name: `photo_${moment().format("DD-MM-YYYY_HH:mm:ss")}.${extension}`,
  //       name: filename,
  //     });
  //     formData.append('metadata', JSON.stringify(metaData));

  //     console.log('skzz', JSON.stringify(formData));

  //     const response = await axios.post(
  //       'http://your-server-url/photos',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       },
  //     );

  //     // 6. Handle server response
  //     console.log('Upload successful! Response:', response.data);
  //     Alert.alert('Success', 'Photo uploaded successfully!');
  //   } catch (error) {
  //     console.error('Error uploading photo:', error);
  //     Alert.alert('Error', 'Failed to upload photo.');
  //     dispatch(setShowLoader(false));
  //   }
  // };

  // console.log("the meta data", metaData);
  return (
    <ScrollView>
      <View style={styles.container}>
        <CameraPreview img={img} />

        {/* <CameraChild /> */}
        <Divider bold style={styles.divider} />

        <View style={styles.labelInput}>
          <Text variant="bodyMedium">Title</Text>
          <TextInput
            value={metaData?.title}
            onChangeText={value => onChangeInput(value, INPUT_TYPE.TITLE)}
            placeholder="Title"
            mode="outlined"
          />
        </View>
        <View style={styles.labelInput}>
          <Text variant="bodyMedium">Post Date</Text>
          <DatePickerInput date={date} setDate={setDate} mode={'date'} />
        </View>
        <View style={styles.labelInput}>
          <Text variant="bodyMedium">Tag(s)</Text>
          <TextInput
            value={tagInput}
            onChangeText={value => onChangeInput(value, INPUT_TYPE.TAG)}
            placeholder="Tag(s)"
            left={<TextInput.Affix text="#" />}
            right={
              <TextInput.Icon
                icon={'plus'}
                onPress={() => {
                  if (!isNullOrEmpty(tagInput)) {
                    const list: any = [...metaData?.tags];
                    list.push(`#${tagInput}`);
                    setMetaData({
                      ...metaData,
                      tags: list,
                    });
                    setTagInput('');
                  }
                }}
              />
            }
            mode="outlined"
          />
        </View>
      </View>
      {metaData?.tags?.length > 0 &&
        metaData?.tags.map((item, index) => (
          <Chip
            onClose={() => {
              const list: any = [...metaData?.tags];
              list.splice(index, 1);
              setMetaData({
                ...metaData,
                tags: list,
              });
            }}>
            {item}
          </Chip>
        ))}
      <Button
        style={styles.postBtn}
        mode="elevated"
        buttonColor="#fffff"
        onPress={() => {}}>
        Post
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  postBtn: {
    marginTop: 10,
  },
  divider: {
    marginBottom: 30,
  },
  labelInput: {
    marginVertical: 20,
  },
});
