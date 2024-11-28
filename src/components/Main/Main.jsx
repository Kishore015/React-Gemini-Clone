
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'
const Main = () => {
    const {onSent, recent, showResult, loading, resultData, setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <nav className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </nav>
        <div className="main-container">
            {!showResult ? <>
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
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </> : <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recent}</p>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    </div>
                </div>
            </div>
            }
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='Enter a prompt here' value={input}/>
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={() => onSent()} src={assets.send_icon} alt="" />
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