import React from 'react'
import photo from "../../public/Photo.png"

const LeftRightComponent = () => {
    return (<>
        <div className="container col-xxl-8 px-4">
            <div className="row flex-lg-row-reverse align-items-center g-5">
                <div className="col-10 col-sm-8 col-lg-4">
                    <img src={photo} className="d-block mx-lg-auto img-fluid" alt="" height="600" loading="lazy"/>
                </div>
                <div className="col-lg-8">
                    <h3 className="display-6 fw-normal text-body-emphasis lh-1 mb-3">Demonstarte branding consequently think outside</h3>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam dolores voluptatum, repellendus ea sapiente, ipsa vel similique, nostrum est ex unde illum qui atque. Eaque provident placeat vel eius!</p>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Start now&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default LeftRightComponent
