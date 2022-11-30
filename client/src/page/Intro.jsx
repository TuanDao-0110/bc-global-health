import React from 'react'
import ButtonIcon from '../component/button/ButtonIcon'
import Input from '../component/form_Input/Input'
import Label from '../component/form_Labels/Label'
import classes from './Intro.module.css'

export default function Intro() {
  return (
    <div className={classes.intro}>
    <header>
    <h2>Find Health Facilities, Services and Professionals Near You Or Any Where in the Globe</h2>
    <form className='searchBar'>
    <Label 
      name='searchTopic'
      children='Search Topic'
    />
    <Label 
      name='searchLocation'
      children='Location'
    />

    <Input
     type='text'
     placeholder='Search Health Services, Professions etc.' 
    />
    
    <Input
     type='text'
     placeholder='Location' 
    />
    <button><i className='fa-solid fa-magnifying-glass'>Search</i></button>
    </form>
    </header>
    <main>
    <section className="searchBtns">
    <ButtonIcon 
      children='Doctor'
      icon='fa-solid fa-user-doctor'

    />
    <ButtonIcon 
      children='Hospital'
      icon='fa-solid fa-hospital'

    />
    <ButtonIcon 
      children='Pharmacy'
      icon='fa-solid fa-capsules'

    />
    <ButtonIcon 
      children='Laboratory'
      icon='fa-solid fa-microscope'

    />
    <ButtonIcon 
      children='Dentist'
      icon='fa-solid fa-tooth'

    />
    <ButtonIcon 
      children='Health Services'
      icon='fa-solid fa-kit-medical'

    />
    <ButtonIcon 
      children='Social Services'
      icon='fa-solid fa-hand-holding-medical'

    />
    <ButtonIcon 
      children='Home Care'
      icon='fa-solid fa-person-cane'

    />
    <ButtonIcon 
      children='Ambulance'
      icon='fa-solid fa-truck-medical'

    />
    <ButtonIcon 
      children='Providers'
      icon='fa-solid fa-staff-snake'

    />
    <ButtonIcon 
      children='Diagnostic'
      icon='fa-solid fa-stethoscope'

    />

    </section>
    <div className='regisStats'>
        <p> 100 million Registered Users</p>
        <p>500 Registered Hospitals</p>
        <p>50 million Registered Professionals</p>
        <p>100 thousand Registered Services</p>
    </div>
    <article>
      <h2>About Us</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </article>
    </main>
    <footer className='contact'>
    
    <p>Our Address:  <i class="fa-solid fa-location-dot"> Helsink BC</i></p>
    <p>Call Us: <i class="fa-solid fa-phone"> +358xxxxxxxxx</i></p>
    <p>Our Email: <i class="fa-solid fa-envelope"> info@example.com</i></p>
    <p>&copy; 2022</p>
    
    </footer>
    </div>
  )
}
