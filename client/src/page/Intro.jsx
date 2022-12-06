import React from 'react'
import ButtonIcon from '../component/button/ButtonIcon'
import Input from '../component/form_Input/Input'
import classes from './Intro.module.css'
import SearchIcon from '@mui/icons-material/Search';


export default function Intro() {
  return (
<<<<<<< HEAD
    <div className={classes.intro}>
    <header>
    <h2>Find Health Facilities and Professionals in Finland</h2>
    <form className='searchBar'>
    
    <Input
     type='text'
     placeholder='Search Health Facilities, Services, Professionals etc. '/>
  <Input
     type='text'
     placeholder='Location' 
    />
    <button><SearchIcon fontSize='large'/>Search</button>

    </form>
    </header>

    <main>
    <section className="searchBtns">
    <ButtonIcon 
      children='Health Facilities +'
      icon='fa-solid fa-hospital'

    />

<ButtonIcon 
      children='Health Services +'
      icon='fa-solid fa-kit-medical'

    />

    <ButtonIcon 
      children='Doctors +'
      icon='fa-solid fa-user-doctor'

    />
  
    
    <ButtonIcon 
      children='Read More +'
      icon='fa-solid fa-info'

    />
    
    </section>
    <article className='regisStats'>
        <p> 100 million Registered Users</p>
        <p>500 Registered Hospitals</p>
        <p>50 million Registered Professionals</p>
        <p>100 thousand Registered Services</p>
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
=======
   <>
   </>
  );
}
>>>>>>> 6f83b3ee4e75426739a245930717fc1f33866c0f
