import React, { Component } from "react";
import { Row, Tab, Tabs } from 'react-bootstrap';

class TabContents extends Component {
  render() {
    console.log(this.props.tabClick);

    return (
      <Tabs defaultActiveKey="" onSelect={this.props.tabClick}>
        <Tab eventKey="" title="Home">
          <Row>{this.props.news}</Row>
        </Tab>
        <Tab eventKey="business" title="経済">
          <Row>{this.props.news}</Row>
        </Tab>
        <Tab eventKey="entertainment" title="エンタメ">
          <Row>{this.props.news}</Row>
        </Tab>
        <Tab eventKey="health" title="健康">
          <Row>{this.props.news}</Row>
        </Tab>
        <Tab eventKey="science" title="科学">
          <Row>{this.props.news}</Row>
        </Tab>
        <Tab eventKey="technology" title="テクノロジー">
          <Row>{this.props.news}</Row>
        </Tab>
      </Tabs>
    )
  }
}
export default TabContents