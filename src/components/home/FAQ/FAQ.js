import './FAQ.css';

import { Background, Parallax } from 'react-parallax';
import { Col, Grid, PageHeader, Panel, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import {faqCol1, faqCol2} from './data.js';

import { Element } from 'react-scroll';

class FAQ extends Component {
  render() {
    return (
      <Element name="faq" className="element">
        <PageHeader className="title"> FAQ </PageHeader>
        <Parallax strength={400}>
          <Background>
            <img alt="" src={require("./images/parallax-test.jpg")} />
          </Background>
          <Grid>
            <Row className="faq-col">
              <Col md={6}>
                {faqCol1.map((question, i) => (
                  <Panel className="faq-card" key={i}>
                    <h4 className="faq-title"> {question.title} </h4>
                    <p className="faq-body"> {question.body} </p>
                  </Panel>
                ))}
              </Col>
              <Col md={6}>
                {faqCol2.map((question, i) => (
                  <Panel className="faq-card" key={i}>
                    <h4 className="faq-title"> {question.title} </h4>
                    <p className="faq-body"> {question.body} </p>
                  </Panel>
                ))}
              </Col>
            </Row>
          </Grid>
        </Parallax>
      </Element>
    )
  }
}

export {FAQ};