import React, { useState } from "react";
import { subscribe } from "../../services/subscribe";
import Image from "../elements/Image";
const Subscribtion = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const subscribeAction = async () => {
    try {
      if (email === '') {
        setError('Please fill all the fields');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Please enter valid email');
        return;
      }
      const response = await subscribe({ email: email });

      if (response.data.id) {
        setSuccess("You have successfully subscribed");
      }

      setEmail('');
    } catch (err) {
      setError("Error occurred, Please try again !");
      setEmail(email)
    }
  };

  setTimeout(() => {
    setError('');
    setSuccess('');
  }, 10000);

  const updateForm = (e) => {
    const { value } = e.target;
      setEmail(value.toLowerCase());
};

  return (
    <section id="waitlist" style={{backgroundColor: "#000000", color: "white"}} className="overflow-hidden"
    >
      <div className="container">
      <h3 style={{ width: "100%", }} className="heading mx-auto mb-2" > 
          <a className="logo" href="/">
          <Image
            src={require("../../assets/images/home/requisitLogo.png")}
            alt="Open"
            width="200"
            className="logo-light-mode"
          />
        </a></h3>

        <div className="text-center col-md-12" style={{marginTop: '50px'}}>
          <h1 className="heading mb-3">🚀 Join the Waitlist for Requisit 🚀</h1>
          <br></br>
          <div className="header-title">
            <h4>Introducing Requisit, a powerful software solution designed to streamline and automate the requisition management process for organizations of all sizes.</h4>
          </div>
          <p className="mx-auto " style={{ fontWeight: "200", width: "70%", marginTop: '50px', fontSize: '1rem' }}>
            Don't miss out on this opportunity to revolutionize the way you handle requests!<br></br> Enter your email now to join the waitlist. <p></p>Be the first to experience the efficiency and convenience of Requisit. 📧
          </p>
        </div>
        <div className="row height-100 d-flex justify-content-center align-items-center " style={{marginTop: '50px'}}>
          <div className="col-md-6">
            {error && <div className="alert alert-warning" role="alert">{error}</div>}
            {success && <div className="alert alert-success" role="alert">{success}</div>}
            <div className="search position-relative">
            
              <input
                style={{ width: '100%' }}
                name="email"
                value={email}
                className="form-control subscribe-input"
                placeholder="godfred@irunauto.com"
                onChange={updateForm}
              />
              <div className="header-title"> </div>
              <button onClick={() => subscribeAction()} className="btn btn-hrmaneja position-absolute">
                Join waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Subscribtion;
