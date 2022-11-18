Back-end

1. Register.
    1. Admin (must be created by other Admin)
    2. User. (Must be confirm later by admin)
    3. Hospital (must have correct ID from Finnish)
2. Login
    1. POST:By password vs username
        1. Get 1 day valid TOKEN
3. Hospital information 
    1. GET : Name, location, campus, 
    2. GET: Time booking table for each campus
        1. Only user can book
        2. Book only accept by hospital
    3. POST: Confirm request booking from user
4. User information 
    1. GET : Name, age, address….
    2. POST : Booking history
    3. PATCH :Booking 
    4. PATCH: edit information
5. Admin information 
    1. Confirm request from (user register)
    2. Delete user/hospital 


FRONT -END 

1. Main page: 
    1. Introduction
        1. Intro (service, customer review…,)
        2. 
    2. hospital page
        1. Hospital cards (name , description)
            1. Campus (name, location, …)
                1. Booking time
                2. Service types 
    3. Shopping store:
        1. Selling medical stuff 
            1. List item
                1. Click item pop-up show 
            2. Buy item —> need user to buy it
    4. Blog/new
        1. Hospital post new information, 
            1. Hospital post
            2. Medical post
            3. Website post
        2. Like/comment -> need to be user to action
    5. User/hospital’s information  (need to login to show in navbar)
        1. Request confirmed for user page
        2. Request need to be confirm for hospital
    6. Login page 
        1. User 
            1. User page 
                1. User information
        2. hospital
            1. Hospital page
                1. Hospital information
        3. Admin 
            1. New user confirmed 
            2. Create new admin
            3. Admin information
    7. Register 
        1. User 
        2. Hospital

Technology:

1. Front end : REACT vs Tailwind CSS vs CSS Module vs MUI 
2. Back-end :Express JS 
3. UI/UX: Figma


