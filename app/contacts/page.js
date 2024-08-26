import Sidebar from '@/components/home/Sidebar'
import React from 'react'

const page = () => {
    return (
        <>
            <div class="layout-wrapper d-lg-flex">
                <Sidebar />
                <div class="modal fade contactModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content modal-header-colored shadow-lg border-0">
                            <div class="modal-header">
                                <h5 class="modal-title text-white font-size-16">Contacts</h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body p-4">

                                <div class="input-group mb-4">
                                    <input type="text" class="form-control bg-light border-0 pe-0" placeholder="Search here.." id="searchContactModal" onkeyup="searchContactOnModal()" aria-label="Example text with button addon" aria-describedby="contactSearchbtn-addon" />
                                    <button class="btn btn-light" type="button" id="contactSearchbtn-addon"><i class='bx bx-search align-middle'></i></button>
                                </div>

                                <div class="d-flex align-items-center px-1">
                                    <div class="flex-grow-1">
                                        <h4 class=" font-size-11 text-muted text-uppercase">Contacts</h4>
                                    </div>
                                </div>
                                <div class="contact-modal-list mx-n4 px-1" data-simplebar="" style={{ maxHeight: "200px" }}>
                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            A
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Albert Rodarte</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Allison Etter</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- end contact list A --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            C
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Craig Smiley</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- end contact list C --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            D
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Daniel Clay</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Doris Brown</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- end contact list D --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            I
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Iris Wells</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- end contact list I --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            J
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Juan Flakes</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">John Hall</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Joy Southern</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- end contact list J --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            M
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Mary Farmer</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Mark Messer</h5>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Michael Hinton</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- end contact list M --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            O
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Ossie Wilson</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- end contact list O --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            P
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Phillis Griffin</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Paul Haynes</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- end contact list P --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            R
                                        </div>

                                        <ul class="list-unstyled contact-list">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Rocky Jackson</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- end contact list R --> */}

                                    <div class="mt-3">
                                        <div class="contact-list-title">
                                            S
                                        </div>

                                        <ul class="list-unstyled contact-list mb-0">
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Sara Muller</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Simon Velez</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h5 class="font-size-14 m-0">Steve Walker</h5>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* <!-- end contact list S --> */}
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-link" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary"><i class="bx bxs-send align-middle"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
