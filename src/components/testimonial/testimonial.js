
import './testimonial.css'



const Testimonial = () => {
    return (
        <div className="test-container">
            <div className="test-content">
                <div className="add-title">
                    <img className='icon' src={require("../../assets/quote.png")} alt="" />
                    <p className='title'>Testimonials</p>
                </div>
                <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                <div className="test-lower-content">
                    <div className="audio-control">

                        <img className='play' src={require("../../assets/play_arrow_black_24dp 1.png")} alt="" />
                        <div className='range'>
                            <input type="range" class="form-range" id="customRange1"></input>
                            <label for="customRange1" class="form-label">0.00</label>
                        </div>
                        <div className="audio-img">
                            <img className='mic' src={require("../../assets/mic_black_24dp 1.png")} alt="" />
                            <img className='logo' src={require("../../assets/Ellipse 12.png")} alt="" />

                        </div>
                    </div>
                    <div className="test-sign">
                        <img src={require("../../assets/Ellipse 12.png")} alt="" className="picture" />
                        <div className="sign">
                            <p className='name'>Shubha Nagarajan</p>
                            <p className='designation'>Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial;