import prajwol from './assets/team-profile-prajwol2.jpeg';
import sampurna from './assets/team-profile-sampurna.jpg';
import shristika from './assets/team-profile-shristika.png';
import linkedinIcon from './assets/linkedin-icon.svg';
import facebookIcon from './assets/facebook-icon.svg';
import globeIcon from './assets/globe-icon.svg';

const team = [
    {
        name: 'Prajwol Sapkota',
        title: 'Lead Developer',
        desc: "\"I lead the development team, bringing my enthusiasm and leadership skills to build awesome solutions.\"",
        links: {
            facebook: 'https://www.facebook.com/prajwol.sapkota.169/',
            linkedIn: 'https://www.linkedin.com/in/prajwol-sapkota/',
            website: 'https://prajwolsapkota.vercel.app/',
        },
        img: prajwol
    },{
        name: 'Sampurna Karki',
        title: 'Digital Marketting Lead',
        desc: '\"As Digital Marketing Lead, my expertise and maturity drive brand success.\"',
        links: {
            facebook: 'https://www.facebook.com/sampurna.karki.5095/',
            linkedIn: 'https://www.linkedin.com/in/sampurna-karki-7234bb301/',
            website: '#',
        },
        img: sampurna
    },{
        name: 'Shristika Pradhan',
        title: 'Graphic Designer',
        desc: '\" I\'m the Graphic Designer, bringing sweetness and kindness to visuals that capture attention.\"',
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