import React from 'react'

const LoginContainer = () => {
  return (
    <>
      <div className="login">
        <div className=" cmpad ">
          <div className="main-container">
            <div className="sec1">
              <h3>Let's Chat</h3>
            </div>
            <div className="sec2">
              <div className="login-container">
                <h1>Login</h1>
                <div className="form">
                  <p>Mobile Number</p>
                  <input type="Number" />
                  <p>Password</p>
                  <input type="text" />
                  <div className="line-p">
                    <span className="line"></span>
                    <span className="text">OR</span>
                    <span className="line"></span>
                  </div>
                  <button>Login with OTP</button>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginContainer
