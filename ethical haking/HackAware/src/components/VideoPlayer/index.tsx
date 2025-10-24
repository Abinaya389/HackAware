import React from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';

interface VideoPlayerProps {
  videoSource: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoSource }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;