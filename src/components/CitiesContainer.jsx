import CityCard from "./CityCard"
import hyd from "../images/hyderbad.png"
import ban from "../images/banglore.png"
import mum from "../images/mumbai.jpg"
import chn from "../images/chennai.jpg"


function CitiesContainer(){

    const cities = [
        {
            pic : hyd,
            city : 'Hyderabad',
            state : 'Telengana',
            price : 5000
        },
        {
            pic : ban,
            city : 'Banglore',
            state : 'Karnataka',
            price : 5000
        },
        {
            pic : mum,
            city : 'Mumbai',
            state : 'Maharastra',
            price : 5000
        },
        {
            pic : chn,
            city : 'Chennai',
            state : 'Tamil Nadu',
            price : 5000
        }
    ]

    return <>
        <div className="container">
            <div className="row justify-content-center">
                <h2 className="text-center mb-4">Popular Cities to Travel</h2>
                {
                    cities.map((city) => <CityCard city={city}></CityCard>)
                }
            </div>
        </div>
    </>

}

export default CitiesContainer