
import { assets } from '../../assets/assets'
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
        <nav className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </nav>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Teach me frontend technologies</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly explain this concept: JS Engine</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm Statup ideas</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of following code</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
                gemini may display inaccurate info, use with caution!!!
            </p>
        </div>
    </div>
  )
}

export default Main