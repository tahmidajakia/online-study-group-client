import { useLoaderData } from "react-router-dom";
import Faq from "../Faq/Faq";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Hero from "../Hero/Hero";


const Home = () => {

    // const assignment = useLoaderData()
    // console.log(assignment);
    return (
        <div>
            <Hero></Hero>
            <FeaturedSection></FeaturedSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;