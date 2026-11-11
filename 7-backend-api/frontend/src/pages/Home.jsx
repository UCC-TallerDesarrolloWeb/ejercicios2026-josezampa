import "@styles/Home.css";
import yogaImg from "../assets/home/yoga.webp";
import zumbaImg from "../assets/home/zumba.jpg";

const Home = () => {
    return(
        <div className="card-home">
            <div>
                <img src="../../public/home/funcional.jpg" alt="funcional" />
                <h2>funcional</h2>
            </div>
            <div>
                <img src="../../public/home/taekwondo.jpg" alt="taekwondo" />
                <h2>taekwondo</h2>
            </div>
            <div>
                <img src={yogaImg} alt="yoga" />
                <h2>yoga</h2>
            </div>
            <div>
                <img src={zumbaImg} alt="zumba" />
                <h2>zumba</h2>
            </div>
        </div>
    )
}

export default Home;