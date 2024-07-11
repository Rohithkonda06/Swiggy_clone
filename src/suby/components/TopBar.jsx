import React from 'react'

const TopBar = () => {
  return (
  <section className="topBarSection">
    <div className="companyTitle">
        <img class="logo-swiggy" src="public/assets/logo-swiggy.jpeg" alt="logo" />
    </div> 
    <div className="searchBar">
        <input type="text" placeholder="Search..."/>
    </div>
    <div className="userAuth">
        Login / SignUp 
    </div>
  </section>
  )
}

export default TopBar