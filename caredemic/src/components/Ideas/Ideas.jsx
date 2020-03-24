import React, { Component } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import Heading from '../Heading'
import './ideas.css'
class Ideas extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        
        this.state = {
            recs: ""
        }
     };
    componentDidMount() {
      const {api} = this.props;
      fetch(`https://api.airtable.com/v0/appvRcS1TQmma9f6S/Ideas\?api_key\=${api}`)
        .then((resp) => resp.json())
        .then(data => {
          this.setState({
              recs: data.records,
              rawData: data.records
            });
        }).catch(err => {
          // Error :(
      });
        console.log("called");
    }
    handleClick = (filter) => {
        const {rawData} = this.state;
        if (filter === "All") {
            this.setState({
                recs: rawData,
                active: "All"
            })
        } else {
            var filteredData = []
            rawData.map(elements => {
                if(elements.fields.Category === filter) {
                    console.log("true");
                    filteredData.push(elements);
                }
            });
            this.setState({
                recs: filteredData,
                active: filter
            })
        } 
    }
  render() {
    const {recs, active} = this.state;
    const {api} = this.props;
    return (
        <div>
            <Heading title="What can I do?" subtitle="COVID-19 is sweeping the globe. But we are not helpless."/>
            <div className="button-row">
                <Button className="filter-button" active={active === "All"} onClick={() => this.handleClick("All")}>All</Button>
                <Button className="filter-button" active={active === "Time"} onClick={() => this.handleClick("Time")}>Time</Button>
                <Button className="filter-button" active={active === "Finances"} onClick={() => this.handleClick("Finances")}>Finances</Button>
                <Button className="filter-button" active={active === "Supplies"} onClick={() => this.handleClick("Supplies")}>Supplies</Button>
                <Button className="filter-button" active={active === "Business"} onClick={() => this.handleClick("Business")}>Business</Button>
                <Button className="filter-button" active={active === "Give me ideas"} onClick={() => this.handleClick("Give me ideas")}>Give me ideas</Button>
            </div>
            <Card.Group stackable itemsPerRow={2}>
                {recs && Object.keys(recs).map((value) => {
                    return (
                        <Card color="orange" target="_blank">
                            {recs[value].fields.Type === "Share" &&
                                <Card.Content 
                                    href={'https://twitter.com/intent/tweet?hashtags=caredemic&text=' + recs[value].fields.Title + '&url=https://caredemic.life'}
                                    className="card-content"
                                    target="_blank">
                                        <Card.Header className="idea-header">{recs[value].fields.Title}</Card.Header>
                                        <p className="idea-desc">{recs[value].fields.Description}</p>
                                        <Icon className="idea-icon" size="large" name="twitter" />
                                </Card.Content>
                                
                            }
                            {recs[value].fields.Type === "Link" &&
                                <Card.Content href={recs[value].fields.Link} className="card-content" target="_blank">
                                    <Card.Header className="idea-header">{recs[value].fields.Title}</Card.Header>
                                    <p className="idea-desc">{recs[value].fields.Description}</p>
                                    <Icon className="idea-icon" size="large" name="linkify" />
                                </Card.Content>
                            }
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
        
    );
  }
}
export default Ideas;
