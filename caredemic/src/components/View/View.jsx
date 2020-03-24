import React, { Component } from 'react';
import {Button, Container, Grid, Header} from 'semantic-ui-react'
import Ideas from '../Ideas';
import Footer  from '../Footer';
import About from '../About';
import 'semantic-ui-css/semantic.min.css'
import './view.css';

class View extends Component {
    constructor(props) {
        super(props);
        let key = process.env.REACT_APP_API_KEY;
        this.state = {
            region: "idea",
            api: key
        }

        this.updateRegion = this.updateRegion.bind(this);
     };
    updateRegion(newRegion) {
        this.setState({
            region: newRegion,
        });
    }
  render() {
    const {region, api} = this.state;
    return (
        <Container>
            {/* Banner section, moved to allow for cleaner state changes */}
            <Grid columns='equal'>
                <Grid.Row className="top" computer={3} mobile={2}>
                <Grid.Column>
                    <Header as="h1">Caredemic</Header>
                    <Header as="h4">
                    "Love your neighbour as yourself"
                    <br />
                    <span class="tagline">"Which of these do you think was a neighbour?"
                    <br />
                    "The one who had mercy on him"
                    <br />
                    "Go and do likewise"</span>
                    </Header>
                </Grid.Column>
                <Grid.Column only='large screen'>
                </Grid.Column>
                <Grid.Column>
                <ul>
                    <Button className="banner-nav-about" onClick={() => this.updateRegion("idea")}>Home</Button>
                    <Button className="banner-nav-about" onClick={() => this.updateRegion("about")}>About</Button>
                    <li><a href="mailto:caredemic@gmail.com">Suggest</a></li>
                </ul>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            {region === "idea" && <Ideas test="hello" api={api}/>}
            {region === "about" && <About />}
            <Footer />
        </Container>
    );
  }
}
export default View;
