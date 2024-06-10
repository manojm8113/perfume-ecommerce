import React from 'react'
import team1 from './Assets/images/team-img-1.jpg'
import team2 from './Assets/images/team-img-2.jpg'
import team3 from './Assets/images/team-img-4.jpg'
import team4 from './Assets/images/team-img-5.jpg'
import who from './Assets/images/whowe.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import './About.css'
const About = () => {
  return (
    <div>
    <Navbar/>
<section className="py-3 py-md-5" id='aboutus-section'>
<h1 className='aboutus-head'>About Us</h1>
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded" loading="lazy" src={who} alt="About 1"/>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <h2 className="mb-3">Who Are We?</h2>
            <p className="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
            <p className="mb-5">We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.</p>
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <div>
                    <h2 class="h4 mb-3">Versatile Brand</h2>
                    <p class="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                    </svg>
                  </div>
                  <div>
                    <h2 class="h4 mb-3">Digital Agency</h2>
                    <p class="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-light py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 className="mb-4 display-5 text-center">Our Team</h2>
        <p className="text-secondary mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>
  <div className="container overflow-hidden">
    <div className="row gy-4 gy-lg-0 gx-xxl-5">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div className="card-body p-0">
            <figure className="m-0 p-0">
              <img className="img-fluid" loading="lazy" src={team1} alt="Flora Nyra"/>
              <figcaption className="m-0 p-4">
                <h4 className="mb-1">Flora Nyra</h4>
                <p className="text-secondary mb-0">Product Manager</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div className="card-body p-0">
            <figure className="m-0 p-0">
              <img className="img-fluid" loading="lazy" src={team4} alt="Evander Mac"/>
              <figcaption className="m-0 p-4">
                <h4 className="mb-1">Evander Mac</h4>
                <p className="text-secondary mb-0">Art Director</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div className="card-body p-0">
            <figure className="m-0 p-0">
              <img className="img-fluid" loading="lazy" src={team2} alt="Taytum Elia"/>
              <figcaption class="m-0 p-4">
                <h4 className="mb-1">Taytum Elia</h4>
                <p className="text-secondary mb-0">Investment Planner</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div className="card-body p-0">
            <figure className="m-0 p-0">
              <img className="img-fluid" loading="lazy" src={team3} alt="Wylder Elio"/>
              <figcaption class="m-0 p-4">
                <h4 className="mb-1">Wylder Elio</h4>
                <p className="text-secondary mb-0">Financial Analyst</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  )
}
export default About