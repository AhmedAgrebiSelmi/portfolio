import React from 'react'

function Contact() {
  const ContactInformations = {
    email: 'ahmed.agrebiselmi@gmail.com',
    phoneNumber: '+216 24 585 757',
    adress: {
    city: 'Sfax',
    Country: 'Tunisia',
    Street: 'AGAREB CITY',
    postalCode: 3030
  }

  }
  return (
    <div>
      <p> <i class="bi bi-envelope"></i> {ContactInformations.email}</p>
      <p> <i class="bi bi-telephone"></i> {ContactInformations.phoneNumber}</p>
      <p> <i class="bi bi-geo-alt"></i> {ContactInformations.adress.Street}; {ContactInformations.adress.postalCode} {ContactInformations.adress.city}; {ContactInformations.adress.Countrynp}</p>
    </div>
  )
}

export default Contact