import BackgroundImage from '@/components/BackgroundImage'
import InteractivePatches from '@/components/InteractivePatches'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <div className="overlay">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="profile-image">
              <Image
                src="/images/profile.jpg" // Add your image to public/images/
                alt="Nga Vu"
                width={100}
                height={100}
                className="profile-pic"
              />
            </div>
            <div className="content">
              <h1>Nga (Jane) Vu</h1>
              <p className="location">Software Developer |📍Tempe, AZ</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='svg-container'>
        <BackgroundImage />
        <InteractivePatches />
      </div>
      
    </div>
  )
}