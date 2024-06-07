
const contacts = [
    {
        media: 'Facebook',
        name: 'Graphion LLC',
        link: 'https://www.facebook.com/graphion.studios/'
    },
    {
        media: 'Instagram',
        name: 'graphion_studio',
        link: 'https://www.instagram.com/graphion_studio'
    },
    {
        media: 'Gmail',
        name: 'graphionsp@gmail.com',
        link: '#'
    },
    {
        media: 'Phone',
        name: '+977 9861927475',
        link: '#'
    },
    {
        media: 'Location',
        name: 'Naxal, Nagpokhari',
        link: '#'
    }
]

function FooterSection() {
  return (
    <footer className='footer-section'>
        <div className="contacts">
            <span className="contacts-title">Contacts</span>
            <div className="contact-items-container">
                {contacts.map((contact)=>{
                    if(contact.link === '#'){
                        return <><span className='contact-item' key={contacts.indexOf(contact)}>{contact.media}: {contact.name}</span><br/></>
                    }
                    else if(contact.link !== '#'){
                        return <><span className='contact-item'>{contact.media}: <a href={contact.link} target='_blank'>{contact.name}</a></span><br/></>
                    }
                })}
            </div>
        </div>
        <span className='footer-note'>Made with love, passion and code, Graphion LLC.©2024</span>
    </footer>
  )
}

export default FooterSection