import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import logo from './logo.png';
import './about.css';

class About extends Component {

  render() {
    return (
        <div>
            <img alt="caredemic logo" className="heading-logo" src={logo} />
            <Header as="h1" textAlign="center">The World is Our Neighbour</Header>
            <section className="about">
                <p><b>SPOILER ALERT:</b> There does not have to be a global pandemic to wash your hands (or help others).</p>

                <p>Most of the ideas here could be done any time. Start now, don't stop. Make 2020 a year when hope and love spread farther than any virus can, and last much longer.</p>
            </section>
            
            <Header as="h1" textAlign="center">Why Caredemic?</Header>
            <section className="about">
                <p>He answered, “‘Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind’; and, ‘Love your neighbor as yourself.’”</p>

                <p>“You have answered correctly,” Jesus replied. “Do this and you will live.”</p>
                
                <p>But he wanted to justify himself, so he asked Jesus, “And who is my neighbor?”</p>

                <p>In reply Jesus said: “A man was going down from Jerusalem to Jericho, when he was attacked by robbers. They stripped him of his clothes, beat him and went away, leaving him half dead. A priest happened to be going down the same road, and when he saw the man, he passed by on the other side. So too, a Levite, when he came to the place and saw him, passed by on the other side. But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him. He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him. The next day he took out two denarii and gave them to the innkeeper. ‘Look after him,’ he said, ‘and when I return, I will reimburse you for any extra expense you may have.’</p>

                <p>“Which of these three do you think was a neighbor to the man who fell into the hands of robbers?”</p>

                <p>The expert in the law replied, “The one who had mercy on him.”</p>
                
                <p>Jesus told him, “Go and do likewise.”</p>
                
                <cite>-Luke 10:27-37</cite>
            </section>
        </div>
        
    );
  }
}
export default About;
