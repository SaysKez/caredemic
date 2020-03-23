import React, { Component } from 'react';
import { Dropdown, Card, Icon, Header, Button } from 'semantic-ui-react';
import Heading from '../Heading'
import './ideas.css'
class Ideas extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // recs: ""
           recs: [{
                "id": "rec0II9PxlY8u2xFm",
                "fields": {
                    "Title": "Sponsor a Rent",
                    "Category": "Finances",
                    "Type": "Share",
                    "Description": "Join with a wider group of friends and neighbours to sponsor a rent or salary of someone left in limbo by their job"
                },
                "createdTime": "2020-03-17T18:30:27.000Z"
            }, {
                "id": "rec0QEgJXopB2EPJY",
                "fields": {
                    "Title": "Takeaway",
                    "Category": "Finances",
                    "Type": "Share",
                    "Description": "If you can afford it, don't stick to beans and rice. Indulge in some takeaway and aim to order from local eateries in dire need of business."
                },
                "createdTime": "2020-03-17T18:22:18.000Z"
            }, {
                "id": "rec6Oe08tFxD9uOT9",
                "fields": {
                    "Title": "Bring the Fun",
                    "Category": "Start up",
                    "Type": "Share",
                    "Description": "The world needs joy now more than ever. Dedicate some of your free time to creating that game, book, or entertainment idea you never got around to."
                },
                "createdTime": "2020-03-17T18:29:32.000Z"
            }, {
                "id": "rec6kT0YdzgJI5Cq4",
                "fields": {
                    "Title": "Join the Response Fund",
                    "Category": "Finances",
                    "Type": "Link",
                    "Link": "https://www.who.int/Covid19ResponseFund",
                    "Description": "Donate to the World Health Organisation to help with medical supplies and developing treatments."
                },
                "createdTime": "2020-03-17T18:25:30.000Z"
            }, {
                "id": "rec85kwdoqZlyb4Vs",
                "fields": {
                    "Title": "Be a Teacher",
                    "Category": "Time",
                    "Type": "Share",
                    "Description": "Share your skills, knowledge, or just chat with students studying at home."
                },
                "createdTime": "2020-03-17T18:16:51.000Z"
            }, {
                "id": "recAamovpO8TbzoSY",
                "fields": {
                    "Title": "Medical Supplies",
                    "Category": "Supplies",
                    "Type": "Share",
                    "Description": "If you are in a less affected area and have any extra masks, gloves, or medical supplies, see where you might send a care package to."
                },
                "createdTime": "2020-03-17T18:23:17.000Z"
            }, {
                "id": "recDXi1q4JOhjI2pj",
                "fields": {
                    "Title": "TIP!",
                    "Category": "Finances",
                    "Type": "Share",
                    "Description": "Delivery drivers, waiters, and everyone you can. Extra, if possible."
                },
                "createdTime": "2020-03-17T18:23:18.000Z"
            }, {
                "id": "recFV1LWdGXL6kggL",
                "fields": {
                    "Title": "Feed the Neighbourhood",
                    "Category": "Supplies",
                    "Type": "Share",
                    "Description": "Instead of hoarding, donate extra tins and goods to your local foodbank. Check to see if they accept medical supplies as well."
                },
                "createdTime": "2020-03-17T18:19:49.000Z"
            }, {
                "id": "recGTQhgu4z565qVf",
                "fields": {
                    "Title": "Big Night In",
                    "Category": "Time",
                    "Type": "Share",
                    "Description": "Coordinate a group takeaway night with friends and enjoy takeaway together over a video call."
                },
                "createdTime": "2020-03-17T18:18:39.000Z"
            }, {
                "id": "recHYjHFj2hT9QtRP",
                "fields": {
                    "Title": "Step Out",
                    "Category": "Time",
                    "Type": "Share",
                    "Description": "If you can, volunteer at your local food bank."
                },
                "createdTime": "2020-03-17T18:18:23.000Z"
            }, {
                "id": "recIVnlGh7JKeYXaf",
                "fields": {
                    "Title": " Necessity is the Mother of Invention",
                    "Category": "Start up",
                    "Type": "Share",
                    "Description": "Radical new inventions or improvements of medical equipment and processes could mean the difference between life and death."
                },
                "createdTime": "2020-03-17T18:30:08.000Z"
            }, {
                "id": "recJmHIHirEBqDHq6",
                "fields": {
                    "Title": "Rethink Education",
                    "Category": "Start up",
                    "Type": "Share",
                    "Description": "Got an idea to revolutionise old modes of education? Want to get into remote tutoring? Now is the time. "
                },
                "createdTime": "2020-03-17T18:29:13.000Z"
            }, {
                "id": "recM9qO6DfCpqM4T5",
                "fields": {
                    "Title": "Clean Your Closets",
                    "Category": "Supplies",
                    "Type": "Share",
                    "Description": "Send old toys, games, or books to a new home or donate at a local schools or charity for kids in your area."
                },
                "createdTime": "2020-03-17T18:19:50.000Z"
            }, {
                "id": "recPBFlJ9qrVEJhjN",
                "fields": {
                    "Title": "Shop for Two",
                    "Category": "Supplies",
                    "Type": "Share",
                    "Description": "Pick up or order groceries for a neighbour, especially those who are sick, vulnerable, or do not have the opportunity to do so themselves."
                },
                "createdTime": "2020-03-17T18:19:51.000Z"
            }, {
                "id": "recU3ydTgtqBhecW2",
                "fields": {
                    "Title": "Join More Neighbours",
                    "Category": "Time",
                    "Type": "Share",
                    "Description": "Check if there is a local community action group already on Facebook and volunteer. None? Start one!"
                },
                "createdTime": "2020-03-17T18:18:39.000Z"
            }, {
                "id": "recVCRtQPgYOqVEsK",
                "fields": {
                    "Title": "Player 2",
                    "Category": "Give me ideas",
                    "Type": "Share",
                    "Description": "Don't just play solo, organise online gaming tournaments for the area."
                },
                "createdTime": "2020-03-17T18:18:37.000Z"
            }, {
                "id": "recW6DmTvyCJLNyn5",
                "fields": {
                    "Title": "Keep Gyms Fit",
                    "Category": "Finances",
                    "Type": "Share",
                    "Description": "Got a gym membership? Support the folks and don't cancel it. Be honest, it's no different than those abandoned new year's resolutions."
                },
                "createdTime": "2020-03-17T18:22:17.000Z"
            }, {
                "id": "recWEnxaF7goWtMWU",
                "fields": {
                    "Title": "Get Printing",
                    "Category": "Supplies",
                    "Type": "Link",
                    "Link": "https://www.materialise.com/en/hands-free-door-opener",
                    "Description": "Got one of those fancy 3D printers? Check online to see what emergency parts or helpful inventions (like this hands free door opener) you might be able to manufacture."
                },
                "createdTime": "2020-03-17T18:23:18.000Z"
            }, {
                "id": "recZ2refiAgXxVV4i",
                "fields": {
                    "Title": "Go Fund Me",
                    "Category": "Finances",
                    "Type": "Link",
                    "Link": "https://uk.gofundme.com/c/act/covid19?pc=gfm_UK_covid19&lang=UK&utm_source=homepage&utm_medium=organic&utm_campaign=gfm_UK_Covid19",
                    "Description": "Keep an eye on GoFundMe.com and other platforms for special charity fundraisers and also individuals in need of help."
                },
                "createdTime": "2020-03-17T18:25:29.000Z"
            }, {
                "id": "recb6a05whyFUPPFN",
                "fields": {
                    "Title": "Netflix & Share",
                    "Category": "Give me ideas",
                    "Type": "Link",
                    "Link": "https://www.netflixparty.com/",
                    "Description": "Start up a virtual movie night with Netflix Party."
                },
                "createdTime": "2020-03-17T18:13:41.000Z"
            }, {
                "id": "recbZyO7jVVk9H34B",
                "fields": {
                    "Title": "Go Virtual",
                    "Category": "Start up",
                    "Type": "Share",
                    "Description": "How might your service or business go remote? Can you livestream? Offer cooking classes instead of prepared dishes?"
                },
                "createdTime": "2020-03-17T18:28:56.000Z"
            }, {
                "id": "recc6gasAM3JHpyzM",
                "fields": {
                    "Title": "Put Your Brain to Work",
                    "Category": "Give me ideas",
                    "Type": "Link",
                    "Link": "https://hackaday.com/2020/03/12/ultimate-medical-hackathon-how-fast-can-we-design-and-deploy-an-open-source-ventilator/",
                    "Description": "Brainstorm what your skillset can offer (that's how this site happened). For example, you could join this effort to invent an open source ventilator."
                },
                "createdTime": "2020-03-17T18:21:27.000Z"
            }, {
                "id": "recd4ZUPBBSUr1Kqz",
                "fields": {
                    "Title": "Start Growing",
                    "Category": "Supplies",
                    "Type": "Share",
                    "Description": "If you have space, see what vegetables you can grow. Saves money and supplies plus nothing like sharing home grown produce."
                },
                "createdTime": "2020-03-17T18:27:05.000Z"
            }, {
                "id": "receQPSTJcSIIJiOw",
                "fields": {
                    "Title": "Prepare & Share",
                    "Category": "Supplies",
                    "Type": "Share",
                    "Description": "Got extra supplies? Make up a care package of soap and wipes (and treats) to deliver to those in need."
                },
                "createdTime": "2020-03-17T18:18:40.000Z"
            }, {
                "id": "recg5lYMUtyVrmr1p",
                "fields": {
                    "Title": "Call Your Contacts",
                    "Category": "Time",
                    "Type": "Share",
                    "Description": "Set up a list and keep in touch. Family, friends, neighbours, and beyond."
                },
                "createdTime": "2020-03-17T18:13:41.000Z"
            }, {
                "id": "rechWbNEiwE0Yya0T",
                "fields": {
                    "Title": "Silence the Noise",
                    "Category": "Give me ideas",
                    "Type": "Share",
                    "Description": "Start by helping yourself. Have 1-2 set times to check the news and then no more."
                },
                "createdTime": "2020-03-17T18:25:30.000Z"
            }, {
                "id": "reciP5b5qijEp6qmh",
                "fields": {
                    "Title": "Seek Opportunity",
                    "Category": "Start up",
                    "Type": "Share",
                    "Description": "In times of trouble, problems can be all we see. Turn problems into opportunities by focusing on how to get creative and solve them instead."
                },
                "createdTime": "2020-03-17T18:29:51.000Z"
            }, {
                "id": "recioahJzHIR6e6fs",
                "fields": {
                    "Title": "Deliver",
                    "Category": "Start up",
                    "Type": "Share",
                    "Description": "If your business doesn't already, now might be the time to start considering delivery options."
                },
                "createdTime": "2020-03-17T18:28:36.000Z"
            }, {
                "id": "recjucLOlSklNKXc7",
                "fields": {
                    "Title": "Subscribe & Share",
                    "Category": "Finances",
                    "Type": "Share",
                    "Description": "Pay for someone's entertainment subscription or share."
                },
                "createdTime": "2020-03-17T18:23:19.000Z"
            }, {
                "id": "reckp0ONcfyMQwu0j",
                "fields": {
                    "Title": "Equip Others",
                    "Category": "Supplies",
                    "Type": "Share",
                    "Description": "Have an old computer, tablet, notebooks, or school supplies? Check your local school to see if any students are in need of equipment to work from home."
                },
                "createdTime": "2020-03-17T18:22:18.000Z"
            }, {
                "id": "recmVKiqtpgWZvaDp",
                "fields": {
                    "Title": "Gift it with #CoronaVoucher",
                    "Category": "Finances",
                    "Type": "Share",
                    "Description": "Buy gift cards for your favourite local eateries. Better yet, if you had a regular meal out, keep it up but buy a gift card on that day instead."
                },
                "createdTime": "2020-03-17T18:21:26.000Z"
            }, {
                "id": "recoQowBMpRB7n8zX",
                "fields": {
                    "Title": "Care Cards",
                    "Category": "Time",
                    "Type": "Link",
                    "Link": "https://www.facebook.com/becky.wass.7/posts/10158040264993149",
                    "Description": "Copy this template and post it through neighbours' doors with your details and any help you might be able to offer."
                },
                "createdTime": "2020-03-17T18:13:41.000Z"
            }]
        }
     };
    componentDidMount() {
      fetch('https://api.airtable.com/v0/appvRcS1TQmma9f6S/Ideas\?api_key\=keyWv6BQM5euSyf44')
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
    // handleChange = (e, data) => {
    //     const {rawData} = this.state;
    //     if(data.value.length > 0) {
    //         var filteredData = []
    //         rawData.map(elements => {
    //             console.log(elements.fields.Category)
    //             if (data.value.includes(elements.fields.Category.toLowerCase())) {
    //                 console.log("True");
    //                 filteredData.push(elements);
    //             } else {
    //                 console.log("False")
    //             }
    //         })
    //         console.log(filteredData);
    //         this.setState({
    //             recs: filteredData
    //         })
    //     } else {
    //         this.setState({
    //             recs: rawData
    //         })
    //     }
    // }
  render() {
    const {recs, active} = this.state;
    // const options = [
    //     { key: 'time', text: 'Time', value: 'time' },
    //     { key: 'finances', text: 'Finances', value: 'finances' },
    //     { key: 'Supplies', text: 'Supplies', value: 'supplies' },
    //     { key: 'give me ideas', text: 'Give me ideas', value: 'give me ideas' },
    //     { key: 'business', text: 'Business', value: 'business' }
    //   ]
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
                                    className="card-content">
                                        <Card.Header className="idea-header">{recs[value].fields.Title}</Card.Header>
                                        <p className="idea-desc">{recs[value].fields.Description}</p>
                                        <Icon className="idea-icon" size="large" name="twitter" />
                                </Card.Content>
                                
                            }
                            {recs[value].fields.Type === "Link" &&
                                <Card.Content href={recs[value].fields.Link} className="card-content">
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
