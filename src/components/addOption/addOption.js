
import "./addOption.css"



const AddOption = () => {
    return (
        <div className="add-container">
            <div className="add-content">
                <div className="add-title">
                    <img className='icon' src={require("../../assets/Add (Landing Page).png")} alt="" />
                    <p className='title'>Add your own</p>
                </div>
                <p className='option-content'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                <button className='option-btn'>Add new</button>
            </div>
        </div>

    )
}

export default AddOption;