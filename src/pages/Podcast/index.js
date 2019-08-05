import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

 import {
Container,
EpisodeList,
PodcastDatails,
Background,
Cover,
PodcastTitle,
PlayButton,
PlayButtonText,
Episode,
Title,
Author,
BackButton
} from './styles';

import PlayerActions from '~/store/ducks/player'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

class Podcast extends Component {

  playMusic = (episodeId) => {
    const { setPodcastRequest, navigation } = this.props;
    const podcast = navigation.getParam('podcast');

    setPodcastRequest(podcast, episodeId)
  }



  renderEpisode = (episode, currentEpisode) => (
    <Episode onPress={ () => {this.playMusic(episode.id)}}>
      <Title active={currentEpisode && currentEpisode.id === episode.id} > {episode.title}</Title>
      <Author>{episode.artist}</Author>
    </Episode>
)

renderHeader = (podcast) => {
const { navigation } = this.props;
return(
    <PodcastDatails>
        <Background source={{uri: podcast.cover }} />
        <BackButton onPress = {() => navigation.navigate('Main')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </BackButton>
        <Cover source={{uri: podcast.cover }} />
        <PodcastTitle> {podcast.title} </PodcastTitle>
        <PlayButton onPress={() => {this.playMusic()}} >
          <PlayButtonText> reproduzir </PlayButtonText>
        </PlayButton>
    </PodcastDatails>
)}



render() {
const podcast = this.props.navigation.getParam('podcast')
const { currentEpisode } = this.props;
return (
<Container>
<EpisodeList
  ListHeaderComponent={() => this.renderHeader(podcast)}
  data = {podcast.tracks}
  keyExtractor = {
    episode => String(episode.id)
  }
  renderItem={ ({item: episode }) => this.renderEpisode(episode, currentEpisode)}
/>
</Container>
);
}
}

const mapStateToProps = state => ({
  currentEpisode: state.player.podcast ? state.player.podcast.tracks.find(episode => episode.id === state.player.current) : null
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Podcast);

