import './Messenger.css';

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { Flipper } from './Flipper.js';
import { brothers } from '../../../activeData/data.js';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: [],
      actives: [],
      flipped: false
    };
    this.flip = this.flip.bind(this);
  }

  /* Runs when the component mounts */
  componentDidMount() {
    let actives = [
      {
        front: {},
        back: {}
      },
      {
        front: {},
        back: {}
      },
      {
        front: {},
        back: {}
      }
    ];

    /* Filters out active without a messenger link (those who don't want to be messaged) and alumni */
    let activeList = brothers.filter(function(brother) {
      return brother.messenger && brother.position !== 'Alumni';
    });

    let shuffled = this.shuffle(activeList);

    /* Sets the front panel to the shuffled actives */
    actives.forEach((active, i) => {
      active.front = shuffled[i];
    });

    this.setState({
      actives: actives
    });
  }

  /* Shuffles the actives and removes the 3 chosen from the total active list */
  shuffle(list) {
    const shuffled = list.sort(() => 0.5 - Math.random()); // shuffle
    let activeList = shuffled.slice(3);

    this.setState({
      activeList: activeList
    });

    return shuffled.slice(0, 3); //get sub-array of first n elements AFTER shuffle
  }

  /* Flips the messenger card */
  flip() {
    let actives = this.state.actives;
    let shuffled = this.shuffle(this.state.activeList);

    /* Stops flipping if there are less than 3 actives left in the active list */
    if (shuffled.length !== 3) {
      return;
    }

    /* Sets the front panel to the shuffled actives */
    if (this.state.flipped) {
      actives.forEach((active, i) => {
        active.front = shuffled[i];
      });
    } else {
      /* Sets the back panel to the shuffled actives */
      actives.forEach((active, i) => {
        active.back = shuffled[i];
      });
    }

    this.setState({
      actives: actives,
      flipped: !this.state.flipped
    });
  }

  render() {
    return (
      <Element name="messenger" className="element messenger">
        <Container>
          <Row>
            <Col>
              <h1 className="title">Get to Know Us!</h1>
            </Col>
          </Row>
          <Row>
            {this.state.actives.map((active, i) => (
              <Col md={12} lg={4} key={i}>
                <Flipper flipped={this.state.flipped} frontActive={active.front} backActive={active.back} index={i} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" md={12} lg>
              <a className="messenger-actions shuffle-button" href="#null" onClick={this.flip}>
                Shuffle Actives
              </a>
            </Col>
            <Col className="d-flex justify-content-center" md={12} lg>
              <a className="messenger-actions members-link" href="/members">
                Meet the Fraternity
              </a>
            </Col>
          </Row>
        </Container>
      </Element>
    );
  }
}

export { Messenger };