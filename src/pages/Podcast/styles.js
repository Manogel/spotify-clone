import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
flex: 1;
background-color: #111;
`;


export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 30 }
})`

`;
export const PodcastDatails = styled.View`
padding: 0 20px;
align-items: center;
padding-top: ${getStatusBarHeight()}px;
`;
export const Background = styled.ImageBackground`
  position: absolute;
  width: 150%;
  height: ${340}px;
  opacity: 0.2;
`;
export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, left: 10, right: 10, bottom: 10}
})`
position: absolute;
left: 30px;
top: ${getStatusBarHeight() + 30}px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export const PodcastTitle = styled.Text`
font-size: 24px;
font-weight: bold;
color: #fff;
margin-top: 20px;
`;

export const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
height: 50px;
background: #1db954;
margin: 30px 40px 0;
border-radius: 25px;
align-self: stretch;
align-items: center;
justify-content: center;

`;

export const PlayButtonText = styled.Text`
color: #fff;
font-weight: bold;
font-size: 16px;
letter-spacing: 1.5px;
text-transform: uppercase;

`;

export const Episode = styled.TouchableOpacity`
 margin-top: 20px;
 padding: 0 20px;
`;
export const Title = styled.Text`
font-size: 16px;
color: ${ ({active}) => (active ? '#1db954' : '#fff')};
`;

export const Author = styled.Text`
color: #c4c4c4;
font-size: 14px;
margin-top: 3px;
`;
