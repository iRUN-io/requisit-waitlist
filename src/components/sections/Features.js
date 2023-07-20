/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Image from "../elements/Image";
import { Modal } from "react-bootstrap";
import DatePicker, {TimePicker} from 'sassy-datepicker';
const Features = () => {
    const [showmodal, setShowModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    const [time, setTime] = useState({
        minutes: 0,
        hours: 18,
      });
    
    const onChangeTime = newTime => {
        console.log(`New date selected`, newTime);
        setTime(newTime);
      };
    
    const minTime = { hours: 8, minutes: 0 };
    const maxTime = { hours: 15, minutes: 0 };

    return (
        <>
            <div className=' Features'>
                <div className=' hero-container fea-card'>
                    {/* <div className='section container hero '> */}
                    <p className='p-header'>All-In-One HR Software</p>
                    <p className='p-text'>This software is built for both small and large scale business owners and employees.</p>
                    {/* </div> */}
                </div>
                <div className=' features '>
                    {/* data card */}
                    <div className=' row features-card data-card '>

                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>HR Data & Analysis</p>
                                <p className='text-tiny'>HR maneja provides access to organized data and analytics to help decision making and reports.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >HR Data & Analysis</p>
                                <Image
                                    src={require("../../assets/images/home/analysis.svg")}
                                    alt="Open"
                                    className="img-fluid"
                                    style={{ borderRadius: "20px" }}
                                />
                            </div>
                        </div>


                    </div>

                    {/* hiring card */}
                    <div className=' row features-card hiring-card '>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Hiring</p>
                                <Image
                                    src={require("../../assets/images/home/hiring.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Hiring</p>
                                <p className='text-tiny'>Our software helps to handle recruiting and selection process by tracking candidate information , enabling recruiter to match job openings to suitable candidates and successfully onboard these candidates.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* file manager */}
                    <div className=' row features-card data-card '>


                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>File Manager</p>
                                <p className='text-tiny'>Our software provides a comprehensive platform to store both large and small files for future purposes.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >File Manager</p>
                                <Image
                                    src={require("../../assets/images/home/filemanager.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>
                    {/* compensation card */}
                    <div className=' row features-card hiring-card dark-card'>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Compensation</p>

                                <Image
                                    src={require("../../assets/images/home/compensate.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Compensation</p>

                                <p className='text-tiny'>With HR maneja , you can carefully allocate compensation and other benefits to your employees.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* expense card */}
                    <div className=' row features-card data-card light-card'>

                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Expense Management</p>
                                <p className='text-tiny'>
                                    HR maneja is built to help companies manage business funds and track expenses.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Expense Management</p>

                                <Image
                                    src={require("../../assets/images/home/expense.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>
                    {/* learning card */}
                    <div className=' row features-card hiring-card light-card'>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Learning & Development</p>
                                <Image
                                    src={require("../../assets/images/home/learning.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Learning & Development</p>
                                <p className='text-tiny'>Team members are able to learn from resources and scheduled courses using the HR maneja.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* performance */}
                    <div className=' row features-card data-card dark-card'>

                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-1'>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Performance Management</p>
                                <p className='text-tiny'>HR maneja helps to set and track tasks, Monitor and measure staff performance and delivery.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-1 order-md-1 order-lg-2 '>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Performance Management</p>

                                <Image
                                    src={require("../../assets/images/home/performance.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>
                    {/* contact card */}
                    <div className=' row features-card hiring-card dark-card'>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Contact Management</p>

                                <Image
                                    src={require("../../assets/images/home/contact.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Contact Management</p>
                                <p className='text-tiny'>
                                    HR maneja helps to store contact details of past and present staff. Chat Service : With HR maneja, team members can communicate effectively in groups and personally with each other.</p>
                                <div className='hero-links'>
                                    <a href="https://irunauto.com/contact" className="btn-features">
                                        Get Started Now
                                    </a>

                                </div>
                            </div>

                        </div>


                    </div>
                    {/* holiday */}
                    <div className=' row features-card data-card light-card'>
                        <div className='col-lg-6 col-md-12 col-sm-12 order-sm-2 order-2 order-sm-2 order-md-2  order-lg-16 '>
                            <div className='text-wrap'>
                                <p className='text-large d-none d-md-none d-sm-none d-lg-block d-xl-block d-xxl-block mb-4'>Event & Holiday</p>
                                <p className='text-tiny'>With HR maneja, you can carefully plan out work calendar including holiday trips, leaves and upcoming community events.</p>
                                <div className='hero-links'>
                                    <a  className="btn btn-features">
                                        Get Started Now
                                    </a>
                                    {/* <a  onClick={() => setShowModal(true)} className="btn btn-features">
                                        Get Started Now
                                    </a> */} 
                                </div>
                                <div className="header-action">
                            </div>
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <div className="section-title">
                                <p className='text-large d-lg-none ' >Event & Holiday</p>

                                <Image
                                    src={require("../../assets/images/home/holiday.png")}
                                    alt="Open"
                                    className="img-fluid"
                                />
                            </div>
                        </div>


                    </div>

                </div>

            </div>
             <Modal
                show={showmodal}
                onHide={() => setShowModal(false)}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="lg"
                style={{ width: "100%", borderRadius: "50px" }}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                <div className="row">
                <div className="col-12 col-md-6 scheduler">
                    {/* minDate is today */}
                    {/* exclude saturday and sunday in select */}
                    <DatePicker className='dateScheduler' selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} allowTransparency={true}  />

                </div>
                <div className="col-12 col-md-5">
                    <TimePicker title='Choose Time' width={1000} minTime={new Date()} maxTime={maxTime}  className='timeScheduler' selected={time} onChange={time => setTime(time)} style={{width: '200px', height: '200px'}} showSeconds={false} />
                </div>
                </div>
                {/* <CreateExpense type={'update'} data={expenseData}/> */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Features