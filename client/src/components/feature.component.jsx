import React from 'react'
import "../../public/index.css"

const FeatureComponent = () => {
    return (<div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 text-center">Messaging for all</h2>
        <p className='text-center text-secondary'>User generated content in real-time will have multiple touchpoints for offshoring.</p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 round">
                    <i className="fa-solid fa-circle-nodes"></i>
                </div>
                <h3 className="fs-2 text-body-emphasis">Easier Work Organization</h3>
                <p>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 round">
                    <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="fs-2 text-body-emphasis">Fast Connection</h3>
                <p>Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portals.</p>
            </div>
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2 round">
                    <i className="fa-solid fa-share-nodes"></i>
                </div>
                <h3 className="fs-2 text-body-emphasis">Streamlined Processes</h3>
                <p>Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
            </div>
        </div>
    </div>)
}

export default FeatureComponent
