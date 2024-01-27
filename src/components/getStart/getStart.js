
import './getStart.css'

const GetStart = () => {
    return (
        <div className="start-container">
            <div className="start-content">
                <h3>Your <span className="hobby">Hobby</span> , Your <span className="community">Community...</span> </h3>
                <button className="start">Get started</button>
            </div>
            <div className="start-img">
                <img src={require("../../assets/5820098 1 (1).png")} alt="" />
                <img src={require("../../assets/5820000 1.png")} alt="" />
            </div>
        </div>

    )
}

export default GetStart;