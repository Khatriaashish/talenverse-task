import React from 'react';
import logos from "../../public/Logos.png"

const Logosection = () => {
    return (<>
        <div className="bg-primary px-4 py-2 text-center">
            <div className="py-5 text-white">
                <img src={logos} className="d-block mx-lg-auto" alt="" loading="lazy" width={"100%"}/>
            </div>
        </div>
    </>)
}

export default Logosection
