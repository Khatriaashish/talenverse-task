import React from 'react'
import photo from "../../public/Photo.png"

const LeftRightComponent = () => {
    return (<>
        <div className="container col-xxl-8 mb-5">
            <div className="row flex-lg-row align-items-stretch g-5 me-4 mb-0">
                <div className="col-lg-8 py-5 text-secondary">
                    <h3 className="display-6 fw-normal text-body-emphasis lh-1 mb-3">Demonstarte branding consequently think outside</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam dolores voluptatum, repellendus ea sapiente, ipsa vel similique, nostrum est ex unde illum qui atque. Eaque provident placeat vel eius!</p>
                    <p><i className="fa-solid fa-check" style={{ color: '#437EF7' }}></i>&nbsp;Enterprise-grade security</p>
                    <p><i className="fa-solid fa-check" style={{ color: '#437EF7' }}></i>&nbsp;99.9% gusaranteed uptime SLA</p>
                    <p><i className="fa-solid fa-check" style={{ color: '#437EF7' }}></i>&nbsp;Designated customer success team</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary px-4 me-md-2">Start now&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-4 px-1 position-relative text-center">
                    <img src={photo} className="d-block mx-lg-auto" alt="" loading="lazy" />
                </div>
            </div>
        </div>
    </>)
}

export default LeftRightComponent
