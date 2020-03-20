import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import logo from './logo.png';

class About extends Component {

  render() {
    return (
        <div>
            <img alt="caredemic logo" className="heading-logo" src={logo} />
            <Header as="h1" textAlign="center">Why Caredemic?</Header>
            <Header as="h4" textAlign="left">
                He answered, “‘Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind’;
                <br />
                and, ‘Love your neighbor as yourself.’”
                <br />
                “You have answered correctly,” Jesus replied. “Do this and you will live.”
                <br />
                But he wanted to justify himself, so he asked Jesus, “And who is my neighbor?”
                <br />
                <br />
                In reply Jesus said: “A man was going down from Jerusalem to Jericho, when he was attacked by robbers. 
                <br />
                They stripped him of his clothes, beat him and went away, leaving him half dead. 
                <br />
                A priest happened to be going down the same road, and when he saw the man, 
                <br />
                he passed by on the other side. 
                <br />
                So too, a Levite, when he came to the place and saw him, 
                <br />
                passed by on the other side. 
                <br />
                <br />
                But a Samaritan, as he traveled, came where the man was; 
                <br />
                and when he saw him, he took pity on him. 
                <br />
                He went to him and bandaged his wounds, pouring on oil and wine. 
                <br />
                Then he put the man on his own donkey, brought him to an inn and took care of him. 
                <br />
                The next day he took out two denarii and gave them to the innkeeper. 
                <br />
                ‘Look after him,’ he said, ‘and when I return, I will reimburse you for any extra expense you may have.’
                <br />
                <br />
                “Which of these three do you think was a neighbor to the man who fell into the hands of robbers?”
                <br />
                The expert in the law replied, “The one who had mercy on him.”
                <br />
                Jesus told him, “Go and do likewise.”
                <br />
                -Luke 10:27-37
            </Header>
        </div>
        
    );
  }
}
export default About;
