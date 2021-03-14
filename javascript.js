
'use strict';




//we realise that the current implementation is not efficient with network bandwith, however with react it is easy to solve


const blue1 = "#8ecae6";
const blue2 = "#219ebc";
const blue3 = "#003399";
const yellow = "#ffb703";
const orange = "#fb8500";


let windows = document.getElementsByClassName("tabs");

const eventContainer = document.getElementById('eventContainer');

const eventContainerMain = document.getElementById('eventContainerMain');

const suggestionContainer = document.getElementById('suggestionContainer');
const leaderBoardContainerMain = document.getElementById('leaderBoardContainerMain')


const petitionButton = document.getElementsByClassName('petition_button');
const leaderBoardButton = document.getElementById('leaderboard_button');




const buttonBar = document.getElementById('buttons');
let bottomButtons = buttonBar.querySelectorAll('button');




console.log(windows.length);

windows[0].style.display = "block";
bottomButtons[0].style.background = "#fff";
bottomButtons[0].style.color = blue2;

//implementation of switching tabs



const switchTabs = (toTab) => {
    for (let i = 0; i < windows.length; i++) {
        if (windows[i].style.display == "block") {
            windows[i].style.display = "none";
            if (toTab < 5) {
                bottomButtons[i].style.background = blue3;
            }
            console.log("it works");
        }
    }
    windows[toTab].style.display = "block";
    bottomButtons[toTab].style.background = blue2;
    bottomButtons[toTab].style.background = "#fff";
    bottomButtons[toTab].style.color = blue2;
    if (toTab === 2) {
        petitionButton[0].style.background = blue1;
        petitionButton[1].style.background = blue1;

    } else {
        petitionButton[0].style.background = orange;
        petitionButton[1].style.background = orange;

    }
    if (toTab === 6) {

        leaderBoardButton.style.background = blue1;
    } else {

        leaderBoardButton.style.background = yellow;
    }
    window.scrollY = 0;

}


//react code for creating objects for easy scalability



class ProposalInstance extends React.Component {
    constructor(props) {
        super(props);
        this.state = { votes: 0 }

        this.upVote = this.upVote.bind(this);
    }

    upVote() {
        this.setState(state => ({ votes: this.state.votes + 1 }));
    }


    render() {
        return (
            <div>
                <h1>Hey+</h1>
                <button onClick={this.upVote}>Upvote{this.state.votes} </button>
            </div>
        );
    }

};





class EventInstanceSmall extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.date = props.date;
        this.imgsource = props.imgsource;
    }
    render() {
        return (<div style={{ paddingLeft: "6%" }}><h3>{this.title}</h3>
            <p>Date: {this.date} </p>
            <button style={{ background: "#fff", margin: "5%", display: "block", width: "50%" }}>More Info</button>
        </div>);

    }

};

class EventInstanceBig extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.date = props.date;
        this.imgsource = props.imgsource;
        this.desc = props.desc;
    }
    render() {
        return (<div style={{ paddingLeft: "6%", marginTop: "30px", paddingBottom: "30px", borderBottom: "1px solid #003399" }}><h3>{this.title}</h3>
            <p>Date: {this.date} </p>
            <p>{this.desc}</p>
            <button style={{ background: "#fff", margin: "5%", display: "block", width: "50%" }}>More Info</button>
            <img style={{ display: "block", position: "relative", height: "150px", margin: "0 auto" }} src={this.imgsource} /></div>);

    }

};

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.date = props.date;
        this.state = { toShow: false };
    }
    render() {
        return (<div style={{ paddingLeft: "6%" }}><h3>{this.title}</h3>
            <p>Date: {this.date} </p>
            <p>Europe and youth, youth and Europe: a space for democracy and participation.</p>
            <button style={{ background: "#fff", margin: "5%", display: "block", width: "50%" }}>More Info</button>
            <img style={{ display: "block", position: "relative", height: "150px", margin: "0 auto" }} src={'./eu_conference.png'} /></div>);

    }

};

class Suggestion extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.date = props.date;
        this.upVotes = props.upVotes;
        this.imgsource = props.imgsource;
        this.description = props.desc;
        this.white = "#fff";
        this.blue = "#003399";
        this.orange = orange;
        this.upicon = "fas fa-chevron-up";
        this.checkicon = "fas fa-check"
        this.state = { votes: this.upVotes, clicked: false, buttonBackground: this.blue, icon: this.upicon, buttonColor: yellow }

        this.upVote = this.upVote.bind(this);
    }

    upVote() {
        this.state.clicked ? null :
            this.setState(state => ({ votes: Number(this.state.votes) + Number(1), clicked: true, buttonBackground: yellow, icon: this.checkicon, buttonColor: this.blue }));
    }


    render() {

        return (<div style={{ paddingLeft: "6%", marginTop: "30px" }}><h3>{this.title}</h3>
            <p style={{ fontSize: "11px", color: "#fff" }}>Date posted: {this.date} </p>
            <p>{this.description}</p>
            <img style={{ display: "block", position: "relative", height: "150px", margin: "0 auto" }} src={this.imgsource} />
            <button style={{ margin: "5%", display: "block", width: "50%" }}>Details</button>
            <button style={{ background: this.blue, margin: "5%", display: "block", width: "50%" }} ><i class={"fas fa-comments"}></i> Discuss</button>
            <button style={{ background: this.state.buttonBackground, margin: "5%", display: "block", width: "50%", color: this.state.buttonColor }} onClick={this.upVote}><i class={this.state.icon}></i></button>
            <p style={{ color: this.state.buttonBackground }}><i class="fas fa-handshake"></i> Partners: {this.state.votes}</p>
        </div>)

    }


};

class LeaderboardPeople extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.partners = props.partners;
        this.imgsource = props.imgsource;
        this.white = "#fff";
        this.blue = "#003399";
        this.orange = orange;
        this.upicon = "fas fa-chevron-up";
        this.checkicon = "fas fa-check"
        this.state = { partners: this.partners, clicked: false, buttonBackground: this.blue, icon: this.upicon, buttonColor: yellow }

    }

    render() {

        return (<div style={{ paddingLeft: "6%", marginTop: "10px", display: "inline-block", width: "100%", borderRadius: "10px" }}>
            <h2 style={{ display: "inline-block" }}> {this.name}</h2>
            <p style={{ display: "inline-block", float: "right", fontSize: "30px" }}>{this.partners}</p>
            <button style={{ display: "inline-block", width: "auto", height: "100%", float: "right", marginLeft: "5px" }}><i class="fas fa-comments"></i></button>
            <button style={{ display: "inline-block", width: "auto", height: "100%", float: "right", marginLeft: "5px" }}><i class="fas fa-handshake"></i></button>

        </div>)

    }


};









ReactDOM.render(<div><EventInstanceSmall title="EU Youth Conference" date="12-15 March" imgsource="./eu_conference.png" /><EventInstanceSmall title="Volunteer in Hungary" date="3-15 June" imgsource="./hungary_volunteer.png" /></div>, eventContainer);
ReactDOM.render(<div><EventInstanceBig title="EU Youth Conference" date="12-15 March" imgsource="./eu_conference.png " desc="Europe and youth, youth and Europe: a space for democracy and participation." /><EventInstanceBig title="Volunteer in Hungary" date="3-15 June" imgsource="./hungary_volunteer.png" desc="Help people living in rural areas while expanding your horizon and establish life-long friendships!" /></div>, eventContainerMain);

ReactDOM.render(<Suggestion title="Increase taxes on Corporations" date="12March" upVotes="10321" imgsource="./factory_polluting.png" desc="Increase pollution related taxes on plastic manufacturing factories in the EU." />, suggestionContainer);
ReactDOM.render(<div><LeaderboardPeople name="Chris" partners="21000" imgsource="./factory_polluting.png" /><LeaderboardPeople name="Milu" partners="19000" imgsource="./factory_polluting.png" /><LeaderboardPeople name="Daniela" partners="17000" imgsource="./factory_polluting.png" /><LeaderboardPeople name="Rui" partners="15000" imgsource="./factory_polluting.png" /><LeaderboardPeople name="Adriano" partners="13000" imgsource="./factory_polluting.png" /></div>, leaderBoardContainerMain);