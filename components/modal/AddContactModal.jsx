import React from 'react'

const AddContactModal = () => {
    return (
        <>
            <div class="modal fade" id="addContact-exampleModal" tabindex="-1" role="dialog" aria-labelledby="addContact-exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content modal-header-colored shadow-lg border-0">
                        <div class="modal-header">
                            <h5 class="modal-title text-white font-size-16" id="addContact-exampleModalLabel">Create Contact</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div class="modal-body p-4">
                            <form>
                                <div class="mb-3">
                                    <label for="addcontactemail-input" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="addcontactemail-input" placeholder="Enter Email" />
                                </div>
                                <div class="mb-3">
                                    <label for="addcontactname-input" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="addcontactname-input" placeholder="Enter Name" />
                                </div>
                                <div class="mb-0">
                                    <label for="addcontact-invitemessage-input" class="form-label">Invatation Message</label>
                                    <textarea class="form-control" id="addcontact-invitemessage-input" rows="3" placeholder="Enter Message"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Invite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContactModal
