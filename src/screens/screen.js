
import Navbar from "../components/navbar/navbar";
import HeroPage from "../components/heroPage/heroPage";
import Options from "../components/options/options";
import AddOption from "../components/addOption/addOption";
import Testimonial from "../components/testimonial/testimonial";
import Footer from "../components/footer/footer";
import GetStart from "../components/getStart/getStart";



const Screen=()=>{
    return(
        <div className="content">
        <Navbar/>
        <HeroPage/>
        <Options/>
        <AddOption/>
        <Testimonial/>
        <GetStart/>
        <Footer/>
        </div>
       
    )
}

export default Screen;