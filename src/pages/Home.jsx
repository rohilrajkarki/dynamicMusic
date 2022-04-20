
import Announcement from "../components/Announcement";
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider'



const Home = ({ user }) => {

    return (
        <div>
            {/* <Announcement />
            <Navbar user={user} /> */}
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Home
