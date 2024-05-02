import React, { useEffect, useState } from 'react'
import { Row, Col, Spinner } from "react-bootstrap"
import apiCall from '../repository/api-call'
import { toast } from 'react-toastify'

const FaqComponent = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFaq = async () => {
        try {
            setLoading(true)
            const response = await apiCall.fetchFaq();
            setFaqs(response.result);

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchFaq();
    }, [])
    return (<>
        <div className="container py-5">
            <h2 className="pb-2 text-center text-body-emphasis">Frequently Asked Questions</h2>
            <Row>
                <Col sm={12} md={{ offset: 2, span: 8 }}>
                    <p className='text-center text-secondary'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At provident dignissimos soluta fugit accusantium iure magni eum suscipit, ut harum veritatis quis? Possimus dolorem voluptas perspiciatis tempora quod. Totam, dolorum.
                    </p>
                </Col>
            </Row>
            {
                loading ? <>
                    <div className="text-center">
                        <Spinner variant='dark'></Spinner>
                    </div>
                </> : <>
                    {
                        faqs ? (
                            <div className="accordion" id="accordionExample">
                                {faqs.map((row, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header" id={`heading${index}`}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                                {row.question}
                                                <div className="m-auto text-secondary">
                                                    {row.updatedAt}
                                                </div>
                                            </button>
                                        </h2>
                                        <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                {row.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center">
                                No faqs found
                            </div>
                        )
                    }
                </>
            }
        </div>
    </>)
}

export default FaqComponent
