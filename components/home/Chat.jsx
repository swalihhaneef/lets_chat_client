import React from 'react'

const Chat = () => {
    return (
        <>
            <div id="users-chat" class="position-relative">
                <div class="p-3 p-lg-4 user-chat-topbar">
                    <div class="row align-items-center">
                        <div class="col-sm-4 col-8">
                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 d-block d-lg-none me-3">
                                    <a href="javascript: void(0);" class="user-chat-remove font-size-18 p-1"><i class="bx bx-chevron-left align-middle"></i></a>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                            <img src="assets/images/users/avatar-2-1.jpg" class="rounded-circle avatar-sm" alt="" />
                                            <span class="user-status"></span>
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h6 class="text-truncate mb-0 font-size-18"><a href="#" class="user-profile-show text-reset">Bella Cote</a></h6>
                                            <p class="text-truncate text-muted mb-0"><small>Online</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-4">
                            <ul class="list-inline user-chat-nav text-end mb-0">
                                <li class="list-inline-item">
                                    <div class="dropdown">
                                        <button class="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class='bx bx-search'></i>
                                        </button>
                                        <div class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                            <div class="search-box p-2">
                                                <input type="text" class="form-control" placeholder="Search.." id="searchChatMessage" />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                    <button type="button" class="btn nav-btn" data-bs-toggle="modal" data-bs-target=".audiocallModal">
                                        <i class='bx bxs-phone-call'></i>
                                    </button>
                                </li>

                                <li class="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                    <button type="button" class="btn nav-btn" data-bs-toggle="modal" data-bs-target=".videocallModal">
                                        <i class='bx bx-video'></i>
                                    </button>
                                </li>

                                <li class="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                    <button type="button" class="btn nav-btn user-profile-show">
                                        <i class='bx bxs-info-circle'></i>
                                    </button>
                                </li>

                                <li class="list-inline-item">
                                    <div class="dropdown">
                                        <button class="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a class="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show" href="#">View Profile <i class="bx bx-user text-muted"></i></a>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center d-lg-none" href="#" data-bs-toggle="modal" data-bs-target=".audiocallModal">Audio <i class="bx bxs-phone-call text-muted"></i></a>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center d-lg-none" href="#" data-bs-toggle="modal" data-bs-target=".videocallModal">Video <i class="bx bx-video text-muted"></i></a>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Archive <i class="bx bx-archive text-muted"></i></a>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Muted <i class="bx bx-microphone-off text-muted"></i></a>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Delete <i class="bx bx-trash text-muted"></i></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="alert alert-warning alert-dismissible topbar-bookmark fade show p-1 px-3 px-lg-4 pe-lg-5 pe-5" role="alert">
                        <div class="d-flex align-items-start bookmark-tabs">
                            <div class="tab-list-link">
                                <a href="#" class="tab-links" data-bs-toggle="modal" data-bs-target=".pinnedtabModal"><i class="ri-pushpin-fill align-middle me-1"></i> 10 Pinned</a>
                            </div>
                            <div>
                                <a href="#" class="tab-links border-0 px-3" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Bookmark"><i class="ri-add-fill align-middle"></i></a>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                </div>
                {/* <!-- end chat user head --> */}

                {/* <!-- start chat conversation --> */}

                <div class="chat-conversation p-3 p-lg-4 " id="chat-conversation" data-simplebar="">
                    <ul class="list-unstyled chat-conversation-list" id="users-conversation">
                    </ul>
                </div>

                <div class="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoard" role="alert">
                    message copied
                </div>


                {/* <!-- end chat conversation end --> */}
            </div>
            <div class="position-relative">
                <div class="chat-input-section p-3 p-lg-4">
                    <form id="chatinput-form" enctype="multipart/form-data">
                        <div class="row g-0 align-items-center">
                            <div class="file_Upload"></div>
                            <div class="col-auto">
                                <div class="chat-input-links me-md-2">
                                    <div class="links-list-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="More">
                                        <button type="button" class="btn btn-link text-decoration-none btn-lg waves-effect" data-bs-toggle="collapse" data-bs-target="#chatinputmorecollapse" aria-expanded="false" aria-controls="chatinputmorecollapse">
                                            <i class="bx bx-dots-horizontal-rounded align-middle"></i>
                                        </button>
                                    </div>
                                    <div class="links-list-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Emoji">
                                        <button type="button" class="btn btn-link text-decoration-none btn-lg waves-effect emoji-btn" id="emoji-btn">
                                            <i class="bx bx-smile align-middle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="position-relative">
                                    <div class="chat-input-feedback">
                                        Please Enter a Message
                                    </div>
                                    <input autocomplete="off" type="text" class="form-control form-control-lg chat-input" autofocus="" id="chat-input" placeholder="Type your message..." />
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="chat-input-links ms-2 gap-md-1">
                                    <div class="links-list-item d-none d-sm-block" data-bs-container=".chat-input-links" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-html="true" data-bs-placement="top" data-bs-content="<div class='loader-line'><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div><div class='line'></div></div>">
                                        <button type="button" class="btn btn-link text-decoration-none btn-lg waves-effect" onclick="audioPermission()">
                                            <i class="bx bx-microphone align-middle"></i>
                                        </button>
                                    </div>
                                    <div class="links-list-item">
                                        <button type="submit" class="btn btn-primary btn-lg chat-send waves-effect waves-light" data-bs-toggle="collapse" data-bs-target=".chat-input-collapse1.show">
                                            <i class="bx bxs-send align-middle" id="submit-btn"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="chat-input-collapse chat-input-collapse1 collapse" id="chatinputmorecollapse">
                        <div class="card mb-0">
                            <div class="card-body py-3">
                                {/* <!-- Swiper --> */}
                                <div class="swiper chatinput-links">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="text-center px-2 position-relative">
                                                <div>
                                                    <input id="attachedfile-input" type="file" class="d-none" accept=".zip,.rar,.7zip,.pdf" multiple="" />
                                                    <label for="attachedfile-input" class="avatar-sm mx-auto stretched-link">
                                                        <span class="avatar-title font-size-18 bg-primary-subtle text-primary rounded-circle">
                                                            <i class="bx bx-paperclip"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 class="font-size-11 text-uppercase mt-3 mb-0 text-body text-truncate">Attached</h5>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="text-center px-2">
                                                <div class="avatar-sm mx-auto">
                                                    <div class="avatar-title font-size-18 bg-primary-subtle text-primary rounded-circle">
                                                        <i class="bx bxs-camera"></i>
                                                    </div>
                                                </div>
                                                <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" class="text-body stretched-link" onclick="cameraPermission()">Camera</a></h5>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="text-center px-2 position-relative">
                                                <div>
                                                    <input id="galleryfile-input" type="file" class="d-none" accept="image/png, image/gif, image/jpeg" multiple="" />
                                                    <label for="galleryfile-input" class="avatar-sm mx-auto stretched-link">
                                                        <span class="avatar-title font-size-18 bg-primary-subtle text-primary rounded-circle">
                                                            <i class="bx bx-images"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">Gallery</h5>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="text-center px-2">
                                                <div>
                                                    <input id="audiofile-input" type="file" class="d-none" accept="audio/*" multiple="" />
                                                    <label for="audiofile-input" class="avatar-sm mx-auto stretched-link">
                                                        <span class="avatar-title font-size-18 bg-primary-subtle text-primary rounded-circle">
                                                            <i class="bx bx-headphone"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                                <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0">Audio</h5>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="text-center px-2">
                                                <div class="avatar-sm mx-auto">
                                                    <div class="avatar-title font-size-18 bg-primary-subtle text-primary rounded-circle">
                                                        <i class="bx bx-current-location"></i>
                                                    </div>
                                                </div>

                                                <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" class="text-body stretched-link" onclick="getLocation()">Location</a></h5>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="text-center px-2">
                                                <div class="avatar-sm mx-auto">
                                                    <div class="avatar-title font-size-18 bg-primary-subtle text-primary rounded-circle">
                                                        <i class="bx bxs-user-circle"></i>
                                                    </div>
                                                </div>
                                                <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" class="text-body stretched-link" data-bs-toggle="modal" data-bs-target=".contactModal">Contacts</a></h5>
                                            </div>
                                        </div>

                                        <div class="swiper-slide d-block d-sm-none">
                                            <div class="text-center px-2">
                                                <div class="avatar-sm mx-auto">
                                                    <div class="avatar-title font-size-18 bg-primary-subtle text-primary rounded-circle">
                                                        <i class="bx bx-microphone"></i>
                                                    </div>
                                                </div>
                                                <h5 class="font-size-11 text-uppercase text-truncate mt-3 mb-0"><a href="#" class="text-body stretched-link">Audio</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="replyCard">
                    <div class="card mb-0">
                        <div class="card-body py-3">
                            <div class="replymessage-block mb-0 d-flex align-items-start">
                                <div class="flex-grow-1">
                                    <h5 class="conversation-name"></h5>
                                    <p class="mb-0"></p>
                                </div>
                                <div class="flex-shrink-0">
                                    <button type="button" id="close_toggle" class="btn btn-sm btn-link mt-n2 me-n3 font-size-18">
                                        <i class="bx bx-x align-middle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
