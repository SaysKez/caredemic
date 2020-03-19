import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react'

class Banner extends Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h1">Caredemic</Header>
            <Header as="h4">
              "Love your neighbour as yourself"
              <br />
              "Which of these do you think was a neighbour?"
              <br />
              "The one who had mercy on him"
              <br />
              "Go and do likewise"
            </Header>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Button>
              About
            </Button>
            <Button>
              Suggest
            </Button>
            <Button>
              Health Guidelines
            </Button>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}
export default Banner;
