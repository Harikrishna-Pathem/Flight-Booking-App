import IntCard from "./IntCard"

function IntContainer(){

    const intcards = [
        {
            contcode : 'IN',
            cont : "India",
            price : 5000
        },
        {
            contcode : 'AU',
            cont : "Australia",
            price : 5000
        },
        {
            contcode : 'CA',
            cont : "Canada",
            price : 5000
        },
        {
            contcode : 'CN',
            cont : "China",
            price : 5000
        },
        {
            contcode : 'EG',
            cont : "Egypt",
            price : 5000
        },
        {
            contcode : 'FR',
            cont : "France",
            price : 5000
        },
        {
            contcode : 'JP',
            cont : "Japan",
            price : 5000
        },
        {
            contcode : 'MY',
            cont : "Malaysia",
            price : 5000
        },
        {
            contcode : 'MV',
            cont : "Maldives",
            price : 5000
        },
        {
            contcode : 'TH',
            cont : "Thailand",
            price : 5000
        },
        {
            contcode : 'GB',
            cont : "Britan",
            price : 5000
        },
        {
            contcode : 'CH',
            cont : "Switzerland",
            price : 5000
        }
    ]

    return <>
        <div className="container mt-5 px-5">
            <div className="row mx-5">
            <h2 className="text-center mb-4">Great Deals on International Flights</h2>
                {
                    intcards.map(
                        (country) => <IntCard country={country}></IntCard>
                    )
                }
            </div>
        </div>

    </>

}

export default IntContainer