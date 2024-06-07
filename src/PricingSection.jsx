import reactLogo from './assets/react.svg'




/*
COLOR SCHEMES
Trust & Value Progression:
    Basic: Light Blue (#ADD8E6) - Creates a sense of trust and affordability.
    Standard: Light Green (#90EE90) - Signals growth and value compared to Basic.
    Premium: Royal Blue (#4169E1) - Denotes prestige and higher value proposition.
Action & Energy:
    Basic: Light Yellow (#F7DC6F) - Evokes feelings of simplicity and getting started.
    Standard: Orange (#FF9933) - Represents energy and a step up from Basic.
    Premium: Red (#CC0000) - Commands attention and signifies the most premium option.
Peace & Sophistication:
    Basic: Light Gray (#DDDDDD) - Offers a clean and neutral backdrop.
    Standard: Teal (#38B3A5) - Projects calmness and a touch of elegance compared to Basic.
    Premium: Dark Purple (#6F42C1) - Exudes sophistication and luxury.
*/
const pricingPlans = [
    {
        type: 'BASIC',
        price: '15,000',
        image: reactLogo,
        keyFeatures: [
            'Responsive Design',
            'Basic SEO Optimization',
            'Limited Number of Pages(3)'
        ],
        extraFeatures: [
            'Basic Setup with essential Features.',
            'Suitable for those with a limited budget.',
            'Domain Registration Assistance.',
            'Basic Contact Form Integration.',
            'Mainenance Free for first month.',
            'Quick setup and delivery time.'
        ],
        color: '#ADD8E6'
    },
    {
        type: 'STANDARD',
        price: '35,000',
        image: reactLogo,
        keyFeatures: [
            'Responsive Design',
            'Basic SEO Optimization',
            'Limited Number of Pages(3)'
        ],
        extraFeatures: [
            'Basic Setup with essential Features.',
            'Suitable for those with a limited budget.',
            'Domain Registration Assistance.',
            'Basic Contact Form Integration.',
            'Mainenance Free for first month.',
            'Quick setup and delivery time.'
        ],
        color: '#90EE90'
    },
    {
        type: 'PREMIUM',
        price: '55,000+',
        image: reactLogo,
        keyFeatures: [
            'Responsive Design',
            'Basic SEO Optimization',
            'Limited Number of Pages(3)'
        ],
        extraFeatures: [
            'Basic Setup with essential Features.',
            'Suitable for those with a limited budget.',
            'Domain Registration Assistance.',
            'Basic Contact Form Integration.',
            'Mainenance Free for first month.',
            'Quick setup and delivery time.'
        ],
        color: '#6F42C1'
    }
]

function PricingSection() {
  return (
    <div className="pricing-section">
        <span className="pricing-title">Pricing Plans</span>
        <div className="pricing-plan-container">

            {/*----- Pricing plan Generator -----*/}

            {pricingPlans.map((pricingPlan)=>{
                return <div className="pricing-plan" id="pricing-plan-1" style={{background: pricingPlan.color}}>
                <div className="pricing-plan-header">
                    <span className="pricing-plan-title">{pricingPlan.type}</span>
                    <span className="pricing-plan-price">NPR.{pricingPlan.price}</span>
                </div>
                <div className="pricing-plan-image">
                    <img src={reactLogo} alt="Pricing Plan Image" />
                </div>
                <div className="pricing-plan-info">
                    <ul className="pricing-plan-features-key">
                        <li className="key-features">{pricingPlan.keyFeatures[0]}</li>
                        <li className="key-features">{pricingPlan.keyFeatures[1]}</li>
                        <li className="key-features">{pricingPlan.keyFeatures[2]}</li>
                    </ul>
                    <ul className="pricing-plan-features-extra">
                        <li className="extra-features">{pricingPlan.extraFeatures[0]}</li>
                        <li className="extra-features">{pricingPlan.extraFeatures[1]}</li>
                        <li className="extra-features">{pricingPlan.extraFeatures[2]}</li>
                        <li className="extra-features">{pricingPlan.extraFeatures[3]}</li>
                        <li className="extra-features">{pricingPlan.extraFeatures[4]}</li>
                        <li className="extra-features">{pricingPlan.extraFeatures[5]}</li>
                    </ul>
                    <div className="pricing-plan-actions">
                    <a href="" className="neutral-button">Learn More</a>
                    <button className="cta-button">Choose Plan</button>
                    </div>
                </div>
            </div>
            })}
            
        </div>
    </div>
  )
}

export default PricingSection