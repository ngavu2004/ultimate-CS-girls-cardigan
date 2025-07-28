import BackgroundImage from '@/components/BackgroundImage'
import InteractivePatches from '@/components/InteractivePatches'

export default function Home() {
  return (
    <div className="container">
      <div className="overlay">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="content">
              <h1>Ultimate CS Girls Cardigan</h1>
              <p className="location">Welcome to the chaotic pieces of ASU CS department!</p>
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