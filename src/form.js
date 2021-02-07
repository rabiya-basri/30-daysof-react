import React from 'react'
import ReactDOM from 'react-dom'
import rabiyaprofile from './image/profile.jpg'
import technologies from './image/frontend_technologies.png'

const rootElement = document.getElementById('root')
//user images
/*const user = (
  <div className='profileimg'>
    <img src={rabiyaprofile} alt='rabiya profile'/>
  </div>
)*/
//user knows technology
const usertech = (
  <div className='techimage-wrapper'>
    <img src={technologies} alt='technologies know'/>
  </div>
)
//inject headre
const welcome = 'Welcome to 30 days of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
    firstname: 'Rabiy',
    lastname: 'Basri'
}
const date = '5th feb 2021'
// JSX element
const header=(
    <header>
      <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{author.firstname} {author.lastname}</p>
      <small>{date}</small>
      </div>
      </header>
)
//inject main
const numone = 2
const numtwo = 3
const result = (
    <p>{numone} + {numtwo} = {numone + numtwo}</p>
    )
    const yearBorn = 1999
    const currentYear = new Date().getFullYear()
    const age = currentYear-yearBorn
    const personAge = (
        <p>{' '}
          {author.firstname} {author.lastname} is {age} Years old
          </p>
    )
    const techs = ['HTML','CSS','JAVASCRIPT']
    const techFormatted = techs.map((tech)=><li key={tech}>{tech}</li>)

const main = (
    <main>
      <div className='main-wrapper'>
      <p>pre requireties to get stated{' '}<strong><em> with react</em></strong>...</p>
      <ul>
          {techFormatted}
          {result}
        {personAge}
        {usertech}
          </ul>
          </div>
      </main>
)

const copyRight = 'copyrights @rabiyabasri 2021'
const footer = (
    <footer>
      <div className='footer-wrapper'>
      <p>{copyRight}</p>
      </div>
      </footer>
)
      const app = (
          <div>
              {header}
              {main}
              {footer}
              </div>
      )
ReactDOM.render(app,rootElement)
