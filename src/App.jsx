import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import TopicEnum from 'topic-enum';
import Jumbotron from './components/jumbotron';
import Resume from './components/resume';
import PDSite from './components/pdsite';
import PatchDay from './components/patchday';
import Art from './components/art';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, selectedTopic: TopicEnum.RESUME };
  }

  getTopic = () => {
    const { selectedTopic } = this.state;
    switch (selectedTopic) {
      case TopicEnum.RESUME:
        return <Resume />;
      case TopicEnum.WEB:
        return <PDSite />;
      case TopicEnum.MOBILE:
        return <PatchDay />;
      case TopicEnum.ART:
        return <Art />;
      default:
        return <p />;
    }
  };

  change = topic => {
    this.setState({ selectedTopic: topic });
  };

  render() {
    return (
      <div>
        <Jumbotron
          title="Juliya Smith"
          handleJuliyaClick={() => this.change(TopicEnum.RESUME)}
          handleWebClick={() => this.change(TopicEnum.WEB)}
          handleMobileClick={() => this.change(TopicEnum.MOBILE)}
          handleArtClick={() => this.change(TopicEnum.ART)}
        />
        {this.getTopic()}
      </div>
    );
  }
}

App.prototypes = {
  selectedTopic: PropTypes.object,
};

export default hot(module)(App);
