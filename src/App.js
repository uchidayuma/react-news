import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';

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

  render() {
    console.log(this.state.news)
    const newsPanel = this.state.news.map((val, index) =>
      <Col md="4" key={index} >
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
    // 
    //   <li className='index-ul__item' key={val.id}>
    //     <img src={F2.s3url() + "/images/emojies/" + val.source} className='index-ul__image' />
    //     <p className='index-ul-icons'>
    //       <FaHeart color='#777' onClick={() => alert('Comming Soon...')} className='index-ul-icons__item cursor' />
    //       <FaArrowDown color='#777' onClick={() => Api.download(val.source)} className='index-ul-icons__item cursor' />
    //     </p>
    //   </li >
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
          <Row>

            {newsPanel}
          </Row>
        </main>
        <footer className="footer">React News</footer>
      </div>
    );
  }
}
export default App;
