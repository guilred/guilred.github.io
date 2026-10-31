import profile from '../assets/images/profile.png'
import { getAge } from '../utils/age.js'

export default function Hero() {
  return (
    <header className="hero">
      <img src={profile} alt="My Profile Picture" className="hero-img" />
      <div className="hero-text">
        <h1>Hi, I'm Guilred!</h1>
        <p>
          I'm a <span id="age">{getAge()}</span> years old hobbyist Systems &amp; Tool developer,
          I'm also a CS student. I mostly use C# and Monogame. Welcome to my corner of the internet.
          Feel free to explore my finished projects or check out the bigger projects I'm currently
          cooking up below!
        </p>
      </div>
    </header>
  )
}
