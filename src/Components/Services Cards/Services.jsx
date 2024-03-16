import React from 'react';
import './services.css';
import { servicesData1 } from './constant';
import { servicesData2} from './constant';

const Services = () => {return( 
 <div className="services-container1">
 <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-center">
          OUR
          <span className="text-blue-400"> SERVICES</span>
        </h2>
        
        {/* Paragraph */}
        <p className="text-gray-600 mb-6 text-center">Do you need some help with something or do you have questions on some features?</p>  <div className='right'>
        {servicesData1.map((service) => (
      <div key={service.id} className="service-card1">
        <img src={service.icon} alt={service.title} className="service-icon" />
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        </div>
    ))}
</div>
<div className='left'>
      {servicesData2.map((service) => (
        <div key={service.id} className="service-card2">
        <img src={service.icon} alt={service.title} className="service-icon" />
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        </div>
         ))}
</div>  
</div>
  )}



export default Services
