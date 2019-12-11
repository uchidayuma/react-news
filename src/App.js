import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';

import * as Api from "./Api.js";

let newsPanel

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  async componentDidMount() {
    let news = await Api.fetch();
    console.log(news);
    this.setState({ 'news': news })
  }

  tabClick = async (eventKey) => {
    console.log(eventKey)
    let news = await Api.fetch(eventKey);
    await console.log(news);
    this.setState({ 'news': news })
  }

  render() {
    console.log(this.state.news)
    const newsPanel = this.state.news.map((val, index) =>
      <Col sm="6" md="4" lg="3" key={index} >
        <a href={val.url} target='blank'>
          <Card className=''>
            <Card.Img className='card-image' variant="top" src={val.urlToImage} />
            <Card.Body>
              <Card.Title className='card-title'>{val.title}</Card.Title>
              <Card.Text className='card-text'>{val.description}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col >
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className="header-title">React News</h1>
            <p className="header-description">Powered by NewsAPI</p>
          </div>
        </header>
        <main className="main">
          <Tabs defaultActiveKey="" onSelect={this.tabClick}>
            <Tab eventKey="" title="Home">
              <Row>{newsPanel}</Row>
            </Tab>
            <Tab eventKey="business" title="経済">
              <Row>{newsPanel}</Row>
            </Tab>
            <Tab eventKey="entertainment" title="エンタメ">
              <Row>{newsPanel}</Row>
            </Tab>
            <Tab eventKey="health" title="健康">
              <Row>{newsPanel}</Row>
            </Tab>
            <Tab eventKey="science" title="科学">
              <Row>{newsPanel}</Row>
            </Tab>
            <Tab eventKey="technology" title="テクノロジー">
              <Row>{newsPanel}</Row>
            </Tab>
          </Tabs>
        </main>
        <footer className="footer">React News</footer>
      </div>
    );
  }
}
export default App;
