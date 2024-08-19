import Sidebar from "@/components/home/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="layout-wrapper d-lg-flex">

        <Sidebar />
        {/* <!-- end left sidebar-menu --> */}

        {/* <!-- start chat-leftsidebar --> */}

        {/* <!-- end chat-leftsidebar --> */}

        {/* <!-- Start User chat --> */}
        <div class="user-chat w-100 overflow-hidden">
          <div class="user-chat-overlay"></div>

          <div class="chat-content d-lg-flex">
            {/* <!-- start chat conversation section --> */}
            <div class="w-100 overflow-hidden position-relative">
              {/* <!-- conversation user --> */}
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

              {/* <!-- conversation group --> */}
              <div id="channel-chat" class="position-relative">
                <div class="p-3 p-lg-4 user-chat-topbar">
                  <div class="row align-items-center">
                    <div class="col-sm-4 col-8">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 d-block d-lg-none me-3">
                          <a href="javascript: void(0);" class="user-chat-remove font-size-18 p-1"><i class="bx bx-chevron-left align-middle"></i></a>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3">
                              <img src="assets/images/users/user-dummy-img-1.jpg" class="rounded-circle avatar-sm" alt="" />
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                              <h6 class="text-truncate mb-0 font-size-18"><a href="#" class="user-profile-show text-reset">Design Phase 2</a></h6>
                              <p class="text-truncate text-muted mb-0"><small>24 Members</small></p>
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
                                <input type="text" class="form-control" placeholder="Search.." />
                              </div>
                            </div>
                          </div>
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

                <div class="chat-conversation p-3 p-lg-4" id="chat-conversation" data-simplebar="">
                  <ul class="list-unstyled chat-conversation-list" id="channel-conversation">
                  </ul>
                </div>
                <div class="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show " id="copyClipBoardChannel" role="alert">
                  message copied
                </div>
                {/* <!-- end chat conversation end --> */}
              </div>

              {/* <!-- start chat input section --> */}
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
              {/* <!-- end chat input section --> */}
            </div>
            {/* <!-- end chat conversation section --> */}

            {/* <!-- start User profile detail sidebar --> */}
            <div class="user-profile-sidebar">

              <div class="p-3 border-bottom">
                <div class="user-profile-img">
                  <img src="assets/images/users/avatar-2-1.jpg" class="profile-img rounded" alt="" />
                  <div class="overlay-content rounded">
                    <div class="user-chat-nav p-2">
                      <div class="d-flex w-100">
                        <div class="flex-grow-1">
                          <button type="button" class="btn nav-btn text-white user-profile-show d-none d-lg-block">
                            <i class="bx bx-x"></i>
                          </button>
                          <button type="button" class="btn nav-btn text-white user-profile-show d-block d-lg-none">
                            <i class="bx bx-left-arrow-alt"></i>
                          </button>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="dropdown">
                            <button class="btn nav-btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                        </div>
                      </div>
                    </div>
                    <div class="mt-auto p-3">
                      <h5 class="user-name mb-1 text-truncate">Bella Cote</h5>
                      <p class="font-size-14 text-truncate mb-0"><i class="bx bxs-circle font-size-10 text-success me-1 ms-0"></i> Online</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End profile user --> */}

              {/* <!-- Start user-profile-desc --> */}
              <div class="p-4 user-profile-desc" data-simplebar="">

                <div class="text-center border-bottom">
                  <div class="row">
                    <div class="col-sm col-4">
                      <div class="mb-4">
                        <button type="button" class="btn avatar-sm p-0">
                          <span class="avatar-title rounded bg-light text-body">
                            <i class="bx bxs-message-alt-detail"></i>
                          </span>
                        </button>
                        <h5 class="font-size-11 text-uppercase text-muted mt-2">Message</h5>
                      </div>
                    </div>
                    <div class="col-sm col-4">
                      <div class="mb-4">
                        <button type="button" class="btn avatar-sm p-0 favourite-btn">
                          <span class="avatar-title rounded bg-light text-body">
                            <i class="bx bx-heart"></i>
                          </span>
                        </button>
                        <h5 class="font-size-11 text-uppercase text-muted mt-2">Favourite</h5>
                      </div>
                    </div>
                    <div class="col-sm col-4">
                      <div class="mb-4">
                        <button type="button" class="btn avatar-sm p-0" data-bs-toggle="modal" data-bs-target=".audiocallModal">
                          <span class="avatar-title rounded bg-light text-body">
                            <i class="bx bxs-phone-call"></i>
                          </span>
                        </button>
                        <h5 class="font-size-11 text-uppercase text-muted mt-2">Audio</h5>
                      </div>
                    </div>
                    <div class="col-sm col-4">
                      <div class="mb-4">
                        <button type="button" class="btn avatar-sm p-0" data-bs-toggle="modal" data-bs-target=".videocallModal">
                          <span class="avatar-title rounded bg-light text-body">
                            <i class="bx bx-video"></i>
                          </span>
                        </button>
                        <h5 class="font-size-11 text-uppercase text-muted mt-2">Video</h5>
                      </div>
                    </div>
                    <div class="col-sm col-4">
                      <div class="mb-4">
                        <div class="dropdown">
                          <button class="btn avatar-sm p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="avatar-title bg-light text-body rounded">
                              <i class='bx bx-dots-horizontal-rounded'></i>
                            </span>
                          </button>

                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Archive <i class="bx bx-archive text-muted"></i></a>
                            <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Muted <i class="bx bx-microphone-off text-muted"></i></a>
                            <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Delete <i class="bx bx-trash text-muted"></i></a>
                          </div>
                        </div>
                        <h5 class="font-size-11 text-uppercase text-muted mt-2">More</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-muted pt-4">
                  <h5 class="font-size-11 text-uppercase">Status :</h5>
                  <p class="mb-4">If several languages coalesce, the grammar of the resulting.</p>
                </div>

                <div class="pb-2">
                  <h5 class="font-size-11 text-uppercase mb-2">Info :</h5>
                  <div>
                    <div class="d-flex align-items-end">
                      <div class="flex-grow-1">
                        <p class="text-muted font-size-14 mb-1">Name</p>
                      </div>
                      <div class="flex-shrink-0">
                        <button type="button" class="btn btn-sm btn-soft-primary">Edit</button>
                      </div>
                    </div>
                    <h5 class="font-size-14 text-truncate">Bella Cote</h5>
                  </div>

                  <div class="mt-4">
                    <p class="text-muted font-size-14 mb-1">Email</p>
                    <h5 class="font-size-14">adc@123.com</h5>
                  </div>

                  <div class="mt-4">
                    <p class="text-muted font-size-14 mb-1">Location</p>
                    <h5 class="font-size-14 mb-0">California, USA</h5>
                  </div>
                </div>
                <hr class="my-4" />

                <div>
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <h5 class="font-size-11 text-muted text-uppercase">Group in common</h5>
                    </div>
                  </div>

                  <ul class="list-unstyled chat-list mx-n4">
                    <li>
                      <a href="javascript: void(0);" class="px-0">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 avatar-xs me-2">
                            <span class="avatar-title rounded-circle bg-light-subtle text-reset">
                              #
                            </span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <p class="text-truncate mb-0">Landing Design</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" class="px-0">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 avatar-xs me-2">
                            <span class="avatar-title rounded-circle bg-light-subtle text-reset">
                              #
                            </span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <p class="text-truncate mb-0">Design Phase 2</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <hr class="my-4" />

                <div>
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <h5 class="font-size-11 text-muted text-uppercase">Media</h5>
                    </div>
                    <div class="flex-shrink-0">
                      <a href="#" class="font-size-12 d-block mb-2">Show all</a>
                    </div>
                  </div>
                  <div class="profile-media-img">
                    <div class="media-img-list">
                      <a href="#">
                        <img src="assets/images/small/img-1-1.jpg" alt="media img" class="img-fluid" />
                      </a>
                    </div>
                    <div class="media-img-list">
                      <a href="#">
                        <img src="assets/images/small/img-2-1.jpg" alt="media img" class="img-fluid" />
                      </a>
                    </div>
                    <div class="media-img-list">
                      <a href="#">
                        <img src="assets/images/small/img-3-1.jpg" alt="media img" class="img-fluid" />
                      </a>
                    </div>
                    <div class="media-img-list">
                      <a href="#">
                        <img src="assets/images/small/img-4-1.jpg" alt="media img" class="img-fluid" />
                        <div class="bg-overlay">+ 15</div>
                      </a>
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <div>
                  <div>
                    <h5 class="font-size-11 text-muted text-uppercase mb-3">Attached Files</h5>
                  </div>

                  <div>
                    <div class="card p-2 border mb-2 bg-transparent">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-file"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1">design-phase-1-approved.pdf</h5>
                          <p class="text-muted font-size-13 mb-0">12.5 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="d-flex gap-2">
                            <div>
                              <a href="#" class="text-muted px-1">
                                <i class="bx bxs-download"></i>
                              </a>
                            </div>
                            <div class="dropdown">
                              <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card p-2 border mb-2 bg-transparent">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-image"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1">Image-1.jpg</h5>
                          <p class="text-muted font-size-13 mb-0">4.2 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="d-flex gap-2">
                            <div>
                              <a href="#" class="text-muted px-1">
                                <i class="bx bxs-download"></i>
                              </a>
                            </div>
                            <div class="dropdown">
                              <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card p-2 border mb-2 bg-transparent">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-image"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1">Image-2.jpg</h5>
                          <p class="text-muted font-size-13 mb-0">3.1 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="d-flex gap-2">
                            <div>
                              <a href="#" class="text-muted px-1">
                                <i class="bx bxs-download"></i>
                              </a>
                            </div>
                            <div class="dropdown">
                              <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card p-2 border mb-2 bg-transparent">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-file"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1">Landing-A.zip</h5>
                          <p class="text-muted font-size-13 mb-0">6.7 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="d-flex gap-2">
                            <div>
                              <a href="#" class="text-muted px-1">
                                <i class="bx bxs-download"></i>
                              </a>
                            </div>
                            <div class="dropdown">
                              <a class="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i class="bx bx-share-alt ms-2 text-muted"></i></a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i class="bx bx-bookmarks text-muted ms-2"></i></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end user-profile-desc --> */}
            </div>
            {/* <!-- end User profile detail sidebar --> */}
          </div>
          {/* <!-- end user chat content --> */}
        </div>
        {/* <!-- End User chat --> */}

        {/* <!-- Start Add contact Modal --> */}
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
        {/* <!-- End Add contact Modal --> */}

        {/* <!-- audiocall Modal --> */}
        <div class="modal fade audiocallModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg border-0">
              <div class="modal-body p-0">
                <div class="text-center p-4 pb-0">
                  <div class="avatar-xl mx-auto mb-4">
                    <img src="assets/images/users/avatar-2-1.jpg" alt="" class="img-thumbnail rounded-circle" />
                  </div>

                  <div class="d-flex justify-content-center align-items-center mt-4">
                    <div class="avatar-md h-auto">
                      <button type="button" class="btn btn-light avatar-sm rounded-circle">
                        <span class="avatar-title bg-transparent text-muted font-size-20">
                          <i class="bx bx-microphone-off"></i>
                        </span>
                      </button>
                      <h5 class="font-size-11 text-uppercase text-muted mt-2">Mute</h5>
                    </div>
                    <div class="avatar-md h-auto">
                      <button type="button" class="btn btn-light avatar-sm rounded-circle">
                        <span class="avatar-title bg-transparent text-muted font-size-20">
                          <i class="bx bx-volume-full"></i>
                        </span>
                      </button>
                      <h5 class="font-size-11 text-uppercase text-muted mt-2">Speaker</h5>
                    </div>
                    <div class="avatar-md h-auto">
                      <button type="button" class="btn btn-light avatar-sm rounded-circle">
                        <span class="avatar-title bg-transparent text-muted font-size-20">
                          <i class="bx bx-user-plus"></i>
                        </span>
                      </button>
                      <h5 class="font-size-11 text-uppercase text-muted mt-2">Add New</h5>
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

                <div class="p-4 bg-primary-subtle mt-n4">
                  <div class="mt-4 text-center">
                    <h5 class="font-size-18 mb-0 text-truncate">Bella Cote</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- audiocall Modal --> */}

        {/* <!-- videocall Modal --> */}
        <div class="modal fade videocallModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content shadow-lg border-0">
              <div class="modal-body p-0">
                <img src="assets/images/users/avatar-2-1.jpg" alt="" class="videocallModal-bg" />
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

              </div>
            </div>
          </div>
        </div>
        {/* <!-- end modal --> */}

        {/* <!-- Start Add pinned tab Modal --> */}
        <div class="modal fade pinnedtabModal" tabindex="-1" role="dialog" aria-labelledby="pinnedtabModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content modal-header-colored shadow-lg border-0">
              <div class="modal-header">
                <h5 class="modal-title text-white font-size-16" id="pinnedtabModalLabel">Bookmark</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                </button>
              </div>
              <div class="modal-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="flex-grow-1">
                    <div>
                      <h5 class="font-size-16 mb-0">10 Pinned tabs</h5>
                    </div>
                  </div>
                  <div class="flex-shrink-0">
                    <div>
                      <button type="button" class="btn btn-sm btn-soft-primary"><i class="bx bx-plus"></i> Pin</button>
                    </div>
                  </div>
                </div>
                <div class="chat-bookmark-list mx-n4" data-simplebar="" style={{ maxHeight: "299px" }}>
                  <ul class="list-unstyled chat-list">
                    <li>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-file"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1"><a href="#" class="p-0">design-phase-1-approved.pdf</a></h5>
                          <p class="text-muted font-size-13 mb-0">12.5 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="dropdown">
                            <a class="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-pin"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1"><a href="#" class="p-0">Bg Pattern</a></h5>
                          <p class="text-muted font-size-13 mb-0">https://bgpattern.com/</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="dropdown">
                            <a class="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-image"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1"><a href="#" class="p-0">Image-001.jpg</a></h5>
                          <p class="text-muted font-size-13 mb-0">4.2 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="dropdown">
                            <a class="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-pin"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1"><a href="#" class="p-0">Images</a></h5>
                          <p class="text-muted font-size-13 mb-0">https://images123.com/</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="dropdown">
                            <a class="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-pin"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1"><a href="#" class="p-0">Bg Gradient</a></h5>
                          <p class="text-muted font-size-13 mb-0">https://bggradient.com/</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="dropdown">
                            <a class="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-image"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1"><a href="#" class="p-0">Image-012.jpg</a></h5>
                          <p class="text-muted font-size-13 mb-0">3.1 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="dropdown">
                            <a class="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 avatar-xs me-3">
                          <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                            <i class="bx bx-file"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 overflow-hidden">
                          <h5 class="font-size-14 text-truncate mb-1"><a href="#" class="p-0">analytics dashboard.zip</a></h5>
                          <p class="text-muted font-size-13 mb-0">6.7 MB</p>
                        </div>

                        <div class="flex-shrink-0 ms-3">
                          <div class="dropdown">
                            <a class="dropdown-toggle font-size-18 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Open <i class="bx bx-folder-open ms-2 text-muted"></i></a>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Edit <i class="bx bx-pencil ms-2 text-muted"></i></a>
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i class="bx bx-trash ms-2 text-muted"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Add pinned tab Modal --> */}

        {/* <!-- forward Modal --> */}
        <div class="modal fade forwardModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-header-colored shadow-lg border-top-0">
              <div class="modal-header">
                <h5 class="modal-title text-white font-size-16">Share this Message</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-4">
                <div>
                  <div class="replymessage-block mb-2">
                    <h5 class="conversation-name">Jean Berwick</h5>
                    <p class="mb-0">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                  </div>
                  <textarea class="form-control" placeholder="Type your message..." rows="2"></textarea>
                </div>
                <hr class="my-4" />
                <div class="input-group mb-3">
                  <input type="text" class="form-control bg-light border-0 pe-0" placeholder="Search here.." aria-label="Example text with button addon" aria-describedby="forwardSearchbtn-addon" />
                  <button class="btn btn-light" type="button" id="forwardSearchbtn-addon"><i class='bx bx-search align-middle'></i></button>
                </div>

                <div class="d-flex align-items-center px-1">
                  <div class="flex-grow-1">
                    <h4 class="mb-0 font-size-11 text-muted text-uppercase">Contacts</h4>
                  </div>
                  <div class="flex-shrink-0">
                    <button type="button" class="btn btn-sm btn-primary">Share All</button>
                  </div>
                </div>
                <div data-simplebar="" style={{ maxHeight: "150px" }} class="mx-n4 px-1">
                  <div>
                    <div class="contact-list-title">
                      A
                    </div>

                    <ul class="list-unstyled contact-list">
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Albert Rodarte</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Allison Etter</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Craig Smiley</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Daniel Clay</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Doris Brown</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Iris Wells</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Juan Flakes</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">John Hall</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Joy Southern</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Mary Farmer</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Mark Messer</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Michael Hinton</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Ossie Wilson</h5>
                          </div>
                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Phillis Griffin</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Paul Haynes</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Rocky Jackson</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
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
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Sara Muller</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Simon Velez</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h5 class="font-size-14 m-0">Steve Walker</h5>
                          </div>

                          <div class="flex-shrink-0">
                            <button type="button" class="btn btn-sm btn-primary">Send</button>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  {/* <!-- end contact list S --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- forward Modal --> */}

        {/* <!-- contactModal --> */}
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
        {/* <!-- contactModal --> */}

        <video id="video" autoplay="true"></video>

      </div>
    </>
  );
}
