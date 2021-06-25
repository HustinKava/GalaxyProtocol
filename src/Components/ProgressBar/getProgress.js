import React from 'react';
import ProgressBar from './ProgressBar';

export default function getProgress(ChildComponent) {
  return class extends React.Component {
    state = {
      scrollPostion: 0,
    };

    listenToScrollEvent = () => {
      document.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
          this.calculateScrollDistance();
        });
      });
    };

    calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset; // how much the user has scrolled by
      const winHeight = window.innerHeight;
      const docHeight = this.getDocHeight();

      const totalDocScrollLength = docHeight - winHeight;
      const scrollPostion = Math.floor(
        (scrollTop / totalDocScrollLength) * 100
      );

      this.setState({
        scrollPostion,
      });
    };

    getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };

    componentDidMount() {
      this.listenToScrollEvent();
    }

    render() {
      return (
        <>
          <ProgressBar
            scroll={this.state.scrollPostion + '%'}
            className="progress-bar"
          />
          <ChildComponent />
        </>
      );
    }
  };
}
