import React, { Component } from "react";

import {
  Container,
  PodCastList,
  Podcast,
  Cover,
  Info,
  Title,
  Count,
  PageTitle
} from "./styles";


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PodcastsActions from '~/store/ducks/podcasts'

// import { Container } from './styles';

class Main extends Component {
  componentDidMount(){
    const { loadRequest } = this.props;
    loadRequest();
  }

  handlePodcastPress = (podcast) => {
    const { navigation } = this.props;

    navigation.navigate('Podcast', {podcast})
  }

  render() {
    const { podcasts } = this.props;
    return (
    <Container>

      <PodCastList
      ListHeaderComponent={() => <PageTitle> Podcasts</PageTitle>}
      data={podcasts.data}
      keyExtractor={podcast => String(podcast.id)}
      renderItem={({item: podcast}) => (
        <Podcast onPress={() => this.handlePodcastPress(podcast) }>
          <Cover source={{uri: podcast.cover}} />
          <Info>
            <Title>{podcast.title}</Title>
            <Count>{`${podcast.tracks.length} episódios`}</Count>
          </Info>
        </Podcast>
      )}
      />
    </Container>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch => bindActionCreators(PodcastsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
