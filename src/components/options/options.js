
import './options.css'



const Options = () => {
    return (
        <div className="options-container">
            <div className="option-name">
                <div className="option-title">
                    <img className='icon' src={require("../../assets/groups_black_24dp (1) 1.png")} alt="" />
                    <p className='title'>People</p>
                </div>
                <p className='option-content'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                <button className='option-btn'>Connect</button>
            </div>

            <div className="option-name">
                <div className="option-title">
                    <img className='icon' src={require("../../assets/location_on_black_24dp 1.png")} alt="" />
                    <p className='title'>Place</p>
                </div>
                <p className='option-content'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                <button className='option-btn'>Meet up</button>
            </div>

            <div className="option-name">
                <div className="option-title">
                    <img className='icon' src={require("../../assets/shopping_basket_black_24dp (2) 1.png")} alt="" />
                    <p className='title'>Product</p>
                </div>
                <p className='option-content'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                <button className='option-btn'>Get it</button>
            </div>

            <div className="option-name">
                <div className="option-title">
                    <img className='icon' src={require("../../assets/event_available_black_24dp 2.png")} alt="" />
                    <p className='title'>Program</p>
                </div>
                <p className='option-content'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                <button className='option-btn'>Attend</button>
            </div>
        </div>

    )
}

export default Options;