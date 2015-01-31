var React = require("react");

var contact = {
    name: "Sandesh",
    title: "Web Developer",
    desc: "Love to code",
    email: "sandesh***@gmail.com",
    location: "San Fransisco, CA",
    work: "Front End Web Developer",
    website: "http://sandy.co.in",
    phone: "+12345678900",
    followers: "25K+",
    following: "512"
};

var ContactCard = React.createClass({
    getInitialState() {
        return {
            name: contact.name,
            title: contact.title,
            desc: contact.desc,
            avatarUrl: "http://www.gravatar.com/avatar/d1887febcaf8696ac01dcde5de86fe04" ,
            work: contact.work,
            location: contact.location,
            followers: contact.followers,
            following: contact.following,
            contactInfo: {
                email: contact.email,
                website: contact.website,
                phone: contact.phone
            }
        };
    },
    render() {
        var profilePictureStyle = {
            backgroundImage: "url(" + this.state.avatarUrl + "?s=128);"
        };
        return (
            <div>
                <div className="portfoliocard">
                    <div className="coverphoto"></div>
                    <div className="profile_picture" style={profilePictureStyle}></div>
                    <div className="left_col">
                        <div className="followers">
                            <div className="follow_count">18,541</div>
                            Followers
                        </div>
                        <div className="following">
                            <div className="follow_count">181</div>
                            Following
                        </div>
                    </div>
                    <div className="right_col">
                        <h2 className="name">{this.state.name}</h2>
                        <h3 className="location">{this.state.location}</h3>
                        <ul className="contact_information">
                            <li className="work">{this.state.work}</li>
                            <li className="website">
                                <a className="nostyle"href={this.state.contactInfo.website}>{this.state.contactInfo.website}</a>
                            </li>
                            <li className="mail">{this.state.contactInfo.email}</li>
                            <li className="phone">{this.state.contactInfo.phone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
})

React.render(<ContactCard/>, document.getElementById('container'));