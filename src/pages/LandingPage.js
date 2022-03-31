import React from 'react'
import "../App.css"
import olddog from "../olddog.jpg"

export default function LandingPage() {
  return (
    <>
        <div className="hero">
          <h1 className="hero-header">You're an <span className="hero-header-highlight">experienced person.</span></h1>
          <h2 className="hero-subtitle">Let the world know with Leed.</h2>
        </div>
        <div className="featureslist">
          <div className="feature">
            <img src={olddog} alt="Online Resume" className="feature-image"></img>
            <p className="feature-title">Build an Online Résumé</p>
            <p className="feature-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet soluta culpa fugit pariatur laudantium possimus accusantium, vitae sequi et corrupti impedit assumenda incidunt. Pariatur voluptatum reprehenderit officiis tempore commodi.</p>
          </div>
          <div className="feature">
          <img src={olddog} alt="Online Resume" className="feature-image"></img>
            <p className="feature-title">Digital Business Cards</p>
            <p className="feature-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quasi id atque quia architecto, blanditiis odit, iusto ex beatae quod necessitatibus numquam mollitia, nam laborum nisi unde magnam aperiam et?
            </p>
          </div>
          <div className="feature">
          <img src={olddog} alt="Online Resume" className="feature-image"></img>
            <p className="feature-title">Personal Blog</p>
            <p className="feature-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, possimus porro! Autem accusantium, praesentium animi, rem expedita optio quidem veritatis magni nesciunt ad aperiam error vitae voluptates! Voluptate, ducimus dolorum!</p>
          </div>
        </div>
    </>
  )
}