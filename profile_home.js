import { React, useState } from 'react';

export default function UserHome() {
    return <!DOCTYPE html><html> <head> <title>Profile Home </title><link rel="stylesheet" href="../stylesheets/profile-db.css"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></head><body style="height: 100vh;"><div class="container-fluid d-flex flex-column h-100"><nav class="row bg-dark text-light py-4 px-3"><div class="navbar"> <div> <a class="btn btn-primary" href="/logout">Sign out</a></div><a href="/profile/"> <img src="../images/house-fill.svg" alt="home icon"></a></div></nav><div class="row flex-grow-1"><div class="col-md-2 sidebar px-3"><ul class="list-unstyled list-group"><li class="py-2"> <a href="/profile/edit-profile">Edit profile</a></li><li class="py-2"> <a href="/profile/reset-password">Reset password</a></li><li class="py-2"><a href="/profile/manage-resort-reservation">Manage events</a></li></ul></div><div class="col col-md-10 ps-5 pt-5"><div class="menu-item row"><h1>Day Passes</h1><p>A day pass grants you access to all Novapark theme park locations for 24 hours. Choose any of the 3 types of day passes</p><p>You have no item</p><a class="add-link col-md-2" href="/profile/buy-ticket"><div> <img src="../images/plus-lg.svg" alt="Add item icon"/><p>buy pass</p></div></a></div><div class="menu-item row"><h1>Resort Reservation</h1><p>Reserve a hotel room in our 4.5 star exclusive family oriented resort for your entire stay</p><p>You have no item</p><a class="add-link col-md-2" href="/profile/book-resort"><div> <img src="../images/plus-lg.svg" alt="Add item icon"/><p>reserve room</p></div></a></div><div class="menu-item row"><h1>Restaurant Reservation</h1><p>Reserve seats at one of our on-park restaurants</p><p>You have no item</p><a class="add-link col-md-2" href="/profile/book-restaurant"><div> <img src="../images/plus-lg.svg" alt="Add item icon"/><p>reserve table</p></div></a></div></div></div></div><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"> </script></body></html>;
}