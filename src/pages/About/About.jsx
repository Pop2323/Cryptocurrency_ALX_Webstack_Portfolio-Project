import React from 'react'
import './About.css'

// About component
const About = () => {
  return (
<div className="about-container">
  <h1><span>A</span>bout</h1>
  <h2>I am Omar, a Front-end Cybersecurity Ethical-Hacker, Full-stack Developer, and UI/UX Designer.</h2>
  <ul>
  <li>Find It is a cryptocurrency information website.</li>
  <li>This is a simple React application that displays information on cryptocurrencies.</li>
  <li>It uses the CoinGecko API to fetch cryptocurrency data.</li>
  <li>It also utilizes React Router for navigation between different pages.</li>
  <li>Furthermore, it incorporates the React Loader Spinner to display a loading spinner during data fetching.</li>
  <li>The application utilizes the Pure CSS framework for styling.</li>
  <li>Additionally, it employs the React Context API to manage the user-selected currency state.</li>
  </ul>
</div>
  )
}

export default About