"use client"
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
const VedioCallModal = ({ isShow }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(isShow)
    }, [isShow])
    return (
        <>
            <Modal show={show} fullscreen='md-down' centered onHide={() => setShow(false)}>
                <Modal.Body>
                    <img src="/images/users/avatar-2-1.jpg" alt="" class="videocallModal-bg" />
                    <div class="position-absolute start-0 end-0 bottom-0">
                        <div class="text-center">
                            <div class="d-flex justify-content-center align-items-center text-center">
                                <div class="avatar-md h-auto">
                                    <button type="button" class="btn btn-light avatar-sm rounded-circle">
                                        <span class="avatar-title bg-transparent text-muted font-size-20">
                                            <i class="bx bx-microphone-off"></i>
                                        </span>
                                    </button>
                                </div>
                                <div class="avatar-md h-auto">
                                    <button type="button" class="btn btn-light avatar-sm rounded-circle">
                                        <span class="avatar-title bg-transparent text-muted font-size-20">
                                            <i class="bx bx-volume-full"></i>
                                        </span>
                                    </button>
                                </div>
                                <div class="avatar-md h-auto">
                                    <button type="button" class="btn btn-light avatar-sm rounded-circle">
                                        <span class="avatar-title bg-transparent text-muted font-size-20">
                                            <i class="bx bx-video-off"></i>
                                        </span>
                                    </button>
                                </div>
                                <div class="avatar-md h-auto">
                                    <button type="button" class="btn btn-light avatar-sm rounded-circle">
                                        <span class="avatar-title bg-transparent text-muted font-size-20">
                                            <i class="bx bx-refresh"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div class="mt-4">
                                <button type="button" class="btn btn-danger avatar-md call-close-btn rounded-circle" data-bs-dismiss="modal">
                                    <span class="avatar-title bg-transparent font-size-24">
                                        <i class="mdi mdi-phone-hangup"></i>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div class="p-4 bg-primary mt-n4">
                            <div class="text-white mt-4 text-center">
                                <h5 class="font-size-18 text-truncate mb-0 text-white">Bella Cote</h5>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div class="modal fade videocallModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content shadow-lg border-0">
                        <div class="modal-body p-0">


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VedioCallModal
