import React, {useEffect, useState} from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { toast } from 'react-toastify'
import apiCall from '../repository/api-call'



const TeamComponent = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTeam = async () => {
        try {
            setLoading(true)
            const response = await apiCall.fetchTeam();
            setTeam(response.result);

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchTeam();
    }, [])
    return (<>
        <div className="container marketing py-5">
            <h2 className="pb-2 text-center text-body-emphasis">
                The Core of Our Team
            </h2>
            <Row>
                <Col sm={12} md={{ offset: 2, span: 8 }}>
                    <p className='text-center text-secondary'>
                        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment of people and great talent that truly rocks.
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
                        team ? <>
                            <div className="row" >
                            {
                                team.map((row, ind) => (
                                    
                                        <div key={ind} className="col-lg-4 px-2 text-secondary">
                                            <img src={row.image??'https://picsum.photos/id/1/560'} className="d-block mx-lg-auto" alt="" loading="lazy" width={"100%"} />
                                            <h3 className="fw-normal text-dark">{row.name}</h3>
                                            <p>{row.designation}</p>
                                            <div className="float-start">
                                                <a href={row.twitter} target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i className="fa-brands fa-x-twitter"></i></a>
                                                <a href={row.facebook} target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i className="fa-brands fa-facebook"></i></a>
                                                <a href={row.linkedIn} target='_blank' className='text-decoration-none text-dark fs-4 pe-4'><i className="fa-brands fa-linkedin"></i></a>
                                                <a href={row.telegram} target='_blank' className='text-decoration-none text-dark fs-4'><i className="fa-brands fa-telegram"></i></a>
                                            </div>
                                        </div>
                                    
                                ))
                                
                            }
                            </div>
                        </> : <>
                            <div className="text-center">
                                No team member found
                            </div>
                        </>
                    }
                </>
            }
        </div>
    </>)
}

export default TeamComponent
