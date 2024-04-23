import prajwol from './assets/team-profile-prajwol.jpg';
import sampurna from './assets/team-profile-sampurna.jpg';
import shristika from './assets/team-profile-shristika.png';
import linkedinIcon from './assets/linkedin-icon.svg';
import facebookIcon from './assets/facebook-icon.svg';
import globeIcon from './assets/globe-icon.svg';

const team = [
    {
        name: 'Prajwol Sapkota',
        title: 'Lead Developer',
        desc: "\"Hey shawty let me be the JavaScript to your React hmmmm. I swear im not a geek babe. uhh these geeks on the right aren't my friends chiii.\"",
        links: {
            facebook: 'https://www.facebook.com/prajwol.sapkota.169/',
            linkedIn: 'https://www.linkedin.com/in/prajwol-sapkota/',
            website: 'https://itzzzlucifer.github.io/portfolio/',
        },
        img: prajwol
    },{
        name: 'Sampurna Karki',
        title: 'Digital Marketting Lead',
        desc: '\"Hey you boy, fuck you and your itty bitty self-respect, you see this woman on the right? Thas ma girl, don\'t you dare check her out.\"',
        links: {
            facebook: 'https://www.facebook.com/sampurna.karki.5095/',
            linkedIn: 'https://www.linkedin.com/in/sampurna-karki-7234bb301/',
            website: '#',
        },
        img: sampurna
    },{
        name: 'Shristika Pradhan',
        title: 'Graphic Designer',
        desc: '\"Uhmmmm where am I? Uhmmm... hehe. Sorry I\'m a shy kinda person. I don\t speak much unless it\'s with my boyfriend shampoo.\"',
        links: {
            facebook: 'https://www.facebook.com/shristi.pradhan.104',
            linkedIn: '#',
            website: '#',
        },
        img: shristika
    }
]

function TeamSection() {
  return (
    <>
    <div className="team-section">
        <div className='team-heading-info'>
            <span className="team-subtitle">Our Team</span>
            <span className="team-title">Meet Our Team</span>
            <span className="team-desc">Get to know the amazing professionals behind Graphion's success</span>
        </div>
        <div className="team-display">
            {team.map((person)=>{
                return (
                <div className="team-member-card">
                    <div className="team-member-image"><img src={person.img} alt={`${person.name}'s Profile Picture`} /></div>
                    <div className="team-member-details">
                        <span className="team-member-name">{person.name}</span>
                        <span className="team-member-title">{person.title}</span>
                        <span className="team-member-desc">{person.desc}</span>
                        <div className="team-member-socials">
                            <a href={person.links.linkedIn} target='_blank'><img src={linkedinIcon} alt="linkedIn"/></a>
                            <a href={person.links.facebook} target='_blank'><img src={facebookIcon} alt="Facebook" /></a>
                            <a href={person.links.website} target='_blank'><img src={globeIcon} alt="Website" /></a>
                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>
    </div>
    </>
  )
}

export default TeamSection;