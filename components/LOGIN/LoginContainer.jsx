import Link from 'next/link'
import React from 'react'

const LoginContainer = () => {
  return (
    <>
      <div class="auth-bg">
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-xl-3 col-lg-4">
              <div class="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                <div class="text-white-50">
                  <h3><a href="index-1.html" class="text-white">
                    <i class="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"></i> Let's Chat</a>
                  </h3></div>
                <div class="mt-auto">
                  <img src="/images/auth-img-1.png" alt="" class="auth-img"/>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
            <div class="col-xl-9 col-lg-8">
              <div class="authentication-page-content">
                <div class="d-flex flex-column h-100 px-4 pt-4">
                  <div class="row justify-content-center my-auto">
                    <div class="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">

                      <div class="py-md-5 py-4">

                        <div class="text-center mb-5">
                          <h3>Welcome Back !</h3>
                          <p class="text-muted">Sign in to continue to Let's Chat.</p>
                        </div>
                        <form action="index.html">
                          <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter username"/>
                          </div>

                          <div class="mb-3">
                            <div class="float-end">
                              <a href="auth-recoverpw-1.html" class="text-muted">Forgot password?</a>
                            </div>
                            <label for="userpassword" class="form-label">Password</label>
                            <div class="position-relative auth-pass-inputgroup mb-3">
                              <input type="password" class="form-control pe-5" placeholder="Enter Password" id="password-input"/>
                                <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon"><i class="ri-eye-fill align-middle"></i></button>
                            </div>
                          </div>

                          <div class="form-check form-check-info font-size-16">
                            <input class="form-check-input" type="checkbox" id="remember-check"/>
                              <label class="form-check-label font-size-14" for="remember-check">
                                Remember me
                              </label>
                          </div>

                          <div class="text-center mt-4">
                            <Link href="/"><button class="btn btn-primary w-100" type="submit">Log In</button></Link>
                          </div>
                          <div class="mt-4 text-center">
                            <div class="signin-other-title">
                              <h5 class="font-size-14 mb-4 title">Sign in with</h5>
                            </div>
                            <div class="row">
                              <div class="col-6">
                                <div>
                                  <button type="button" class="btn btn-light w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Facebook"><i class="mdi mdi-facebook text-indigo"></i></button>
                                </div>
                              </div>
                              <div class="col-6">
                                <div>
                                  <button type="button" class="btn btn-light w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Google"><i class="mdi mdi-google text-danger"></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* <!-- end form --> */}

                        <div class="mt-5 text-center text-muted">
                          <p>Don't have an account ? <Link href="/sign-up" class="fw-medium text-decoration-underline"> Register</Link></p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end col --> */}
                  </div>
                  {/* <!-- end row --> */}
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container-fluid --> */}
      </div>
    </>
  )
}

export default LoginContainer
