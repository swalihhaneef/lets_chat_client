"use client"
import React, { useState } from 'react'
import { Tooltip } from '@mui/material'
import { Accordion } from 'react-bootstrap'
import Dropdown from '../DropDown'
const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(1)

    return (
        <>
            <div class="side-menu flex-lg-column">
                <div class="navbar-brand-box">
                    <a href="index-1.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewbox="0 0 24 24"><path d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z"></path></svg>
                        </span>
                    </a>

                    <a href="index-1.html" class="logo logo-light">
                        <span class="logo-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewbox="0 0 24 24"><path d="M8.5,18l3.5,4l3.5-4H19c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5C3.897,2,3,2.897,3,4v12c0,1.103,0.897,2,2,2H8.5z M7,7h10v2H7V7z M7,11h7v2H7V11z"></path></svg>
                        </span>
                    </a>
                </div>
                <div class="flex-lg-column my-0 sidemenu-navigation">
                    <ul class="nav nav-pills side-menu-nav" >
                        <li
                            onClick={() => setActiveTab(1)}
                            class="nav-item d-none d-lg-block" >
                            <Tooltip title="Profile" placement='right' arrow>
                                <a class={`nav-link ${activeTab == 1 && "active"}`} >
                                    <i class='bx bx-user-circle'></i>
                                </a>
                            </Tooltip>
                        </li>
                        <li
                            onClick={() => setActiveTab(2)}
                            class="nav-item">
                            <Tooltip title="Chats" placement='right' arrow>
                                <a class={`nav-link ${activeTab == 2 && "active"}`}  >
                                    <i class='bx bx-conversation'></i>
                                </a>
                            </Tooltip>
                        </li>
                        <li
                            onClick={() => setActiveTab(3)}
                            class="nav-item" >
                            <Tooltip title="Contacts" placement='right' arrow>
                                <a class={`nav-link ${activeTab == 3 && "active"}`} id="pills-contacts-tab" >
                                    <i class='bx bxs-user-detail'></i>
                                </a>
                            </Tooltip>
                        </li>
                        <li
                            onClick={() => setActiveTab(4)}
                            class="nav-item" >
                            <Tooltip title="Calls" placement='right' arrow>
                                <a class={`nav-link ${activeTab == 4 && "active"}`} id="pills-calls-tab" >
                                    <i class='bx bx-phone-call'></i>
                                </a>
                            </Tooltip>
                        </li>
                        {/* <li
                            onClick={() => setActiveTab(5)}
                            class="nav-item" >
                            <Tooltip title="Bookmark" placement='right' arrow>
                                <a class={`nav-link ${activeTab == 1 &&  "active"}`} id="pills-bookmark-tab" >
                                    <i class='bx bx-bookmarks'></i>
                                </a>
                            </Tooltip>
                        </li> */}
                        <li
                            onClick={() => setActiveTab(6)}
                            class="nav-item d-none d-lg-block" >
                            <Tooltip title="Settings" placement='right' arrow>
                                <a class={`nav-link ${activeTab == 6 && "active"}`} id="pills-setting-tab" >
                                    <i class='bx bx-cog'></i>
                                </a>
                            </Tooltip>
                        </li>
                        <li
                            onClick={() => setActiveTab(7)}
                            class="nav-item ">
                            <Tooltip title="Dark theme" placement='right' arrow>
                                <a class="nav-link light-dark" >
                                    <i class='bx bx-moon'></i>
                                </a>
                            </Tooltip>
                        </li>
                        <li>
                            <Dropdown
                                trigger={
                                    <a className="nav-link dropdown-toggle" href="#" role="button">
                                        <img src="/images/users/avatar-1-1.jpg" alt="" className="profile-user rounded-circle" />
                                    </a>
                                }
                                menu={
                                    <>
                                        <a className="dropdown-item d-flex align-items-center justify-content-between" id="pills-user-tab" href="#pills-user" role="tab">
                                            Profile <i className="bx bx-user-circle text-muted ms-1"></i>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center justify-content-between" id="pills-setting-tab" href="#pills-setting" role="tab">
                                            Setting <i className="bx bx-cog text-muted ms-1"></i>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center justify-content-between" href="auth-changepassword-1.html">
                                            Change Password <i className="bx bx-lock-open text-muted ms-1"></i>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item d-flex align-items-center justify-content-between" href="auth-logout-1.html">
                                            Log out <i className="bx bx-log-out-circle text-muted ms-1"></i>
                                        </a>
                                    </>
                                }
                            />
                        </li>
                        {/* <li class="nav-item dropdown profile-user-dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true   ">
                                <img src="/images/users/avatar-1-1.jpg" alt="" class="profile-user rounded-circle" />
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item d-flex align-items-center justify-content-between" id="pills-user-tab" data-bs-toggle="pill" href="#pills-user" role="tab">Profile <i class="bx bx-user-circle text-muted ms-1"></i></a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" id="pills-setting-tab" data-bs-toggle="pill" href="#pills-setting" role="tab">Setting <i class="bx bx-cog text-muted ms-1"></i></a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="auth-changepassword-1.html">Change Password <i class="bx bx-lock-open text-muted ms-1"></i></a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item d-flex align-items-center justify-content-between" href="auth-logout-1.html">Log out <i class="bx bx-log-out-circle text-muted ms-1"></i></a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div class="chat-leftsidebar">

                <div class="tab-content">
                    {/* <!-- Start Profile tab-pane --> */}

                    <div class={`tab-pane ${activeTab == 1 && "show active"} `} id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
                        {/* <!-- Start profile content --> */}
                        <div>
                            <div class="user-profile-img">
                                <img src="/images/small/img-4-1.jpg" class="profile-img" style={{ height: '160px' }} alt="" />
                                <div class="overlay-content">
                                    <div>
                                        <div class="user-chat-nav p-2 ps-3">

                                            <div class="d-flex w-100 align-items-center">
                                                <div class="flex-grow-1">
                                                    <h5 class="text-white mb-0">My Profile</h5>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="dropdown">
                                                        <Dropdown
                                                            trigger={<button class="btn nav-btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i class='bx bx-dots-vertical-rounded'></i>
                                                            </button>}
                                                            menu={
                                                                <>
                                                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Info <i class="bx bx-info-circle ms-2 text-muted"></i></a>
                                                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Setting <i class="bx bx-cog text-muted ms-2"></i></a>
                                                                    <div class="dropdown-divider"></div>
                                                                    <a class="dropdown-item d-flex align-items-center justify-content-between" href="#">Help <i class="bx bx-help-circle ms-2 text-muted"></i></a>
                                                                </>
                                                            } />

                                                        <div class="dropdown-menu dropdown-menu-end">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                                <div class="mb-lg-3 mb-2">
                                    <img src="/images/users/avatar-1-1.jpg" class="rounded-circle avatar-lg img-thumbnail" alt="" />
                                </div>

                                <h5 class="font-size-16 mb-1 text-truncate">Adam Zampa</h5>
                                <p class="text-muted font-size-14 text-truncate mb-0">Front end Developer</p>
                            </div>
                            {/* <!-- End profile user --> */}

                            {/* <!-- Start user-profile-desc --> */}
                            <div class="p-4 profile-desc" data-simplebar="">
                                <div class="text-muted">
                                    <p class="mb-4">If several languages coalesce, the grammar of the resulting language is more simple.</p>
                                </div>

                                <div>
                                    <div class="d-flex py-2">
                                        <div class="flex-shrink-0 me-3">
                                            <i class="bx bx-user align-middle text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="mb-0">Adam Zampa</p>
                                        </div>
                                    </div>

                                    <div class="d-flex py-2">
                                        <div class="flex-shrink-0 me-3">
                                            <i class="bx bx-message-rounded-dots align-middle text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="mb-0">adc@123.com</p>
                                        </div>
                                    </div>

                                    <div class="d-flex py-2">
                                        <div class="flex-shrink-0 me-3">
                                            <i class="bx bx-location-plus align-middle text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="mb-0">California, USA</p>
                                        </div>
                                    </div>
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
                                                <img src="/images/small/img-1-1.jpg" alt="media img" class="img-fluid" />
                                            </a>
                                        </div>
                                        <div class="media-img-list">
                                            <a href="#">
                                                <img src="/images/small/img-2-1.jpg" alt="media img" class="img-fluid" />
                                            </a>
                                        </div>
                                        <div class="media-img-list">
                                            <a href="#">
                                                <img src="/images/small/img-4-1.jpg" alt="media img" class="img-fluid" />
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
                        {/* <!-- End profile content --> */}
                    </div>

                    {/* <!-- End Profile tab-pane --> */}

                    {/* <!-- Start chats tab-pane --> */}
                    <div class={`tab-pane ${activeTab == 2 && "show active"} `} id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
                        {/* <!-- Start chats content --> */}
                        <div>
                            <div class="px-4 pt-4">
                                <div class="d-flex align-items-start">
                                    <div class="flex-grow-1">
                                        <h4 class="mb-4">Chats</h4>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Contact">

                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" class="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addContact-exampleModal">
                                                <i class="bx bx-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control bg-light border-0 pe-0" id="serachChatUser" onkeyup="searchUser()" placeholder="Search here.." aria-label="Example text with button addon" aria-describedby="searchbtn-addon" autocomplete="off" />
                                        <button class="btn btn-light" type="button" id="searchbtn-addon"><i class='bx bx-search align-middle'></i></button>
                                    </div>
                                </form>

                            </div>
                            {/* <!-- .p-4 --> */}

                            <div class="chat-room-list" data-simplebar="">
                                {/* <!-- Start chat-message-list --> */}
                                <h5 class="mb-3 px-4 mt-4 font-size-11 text-muted text-uppercase">Favourites</h5>

                                <div class="chat-message-list">

                                    <ul class="list-unstyled chat-list chat-user-list" id="favourite-users">
                                        <li id="contact-id-1" data-name="favorite" class="active">
                                            <a href="javascript: void(0);" class="unread-msg-user">
                                                <div class="d-flex align-items-center">
                                                    <div class="chat-user-img online align-self-center me-2 ms-0">
                                                        <img src="/images/users/avatar-2-1.jpg" class="rounded-circle avatar-xs" alt="" />
                                                        <span class="user-status"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        <p class="text-truncate mb-0">Bella Cote</p>
                                                    </div>
                                                    <div class="ms-auto">
                                                        <span class="badge bg-dark-subtle text-reset rounded p-1">18</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li></li>
                                    </ul>
                                </div>

                                <div class="d-flex align-items-center px-4 mt-5 mb-2">
                                    <div class="flex-grow-1">
                                        <h4 class="mb-0 font-size-11 text-muted text-uppercase">Direct Messages</h4>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="New Message">

                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" class="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target=".contactModal">
                                                <i class="bx bx-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="chat-message-list">

                                    <ul class="list-unstyled chat-list chat-user-list" id="usersList">
                                        <li id="contact-id-1" data-name="favorite" >
                                            <a href="javascript: void(0);" class="unread-msg-user">
                                                <div class="d-flex align-items-center">
                                                    <div class="chat-user-img online align-self-center me-2 ms-0">
                                                        <img src="/images/users/avatar-2-1.jpg" class="rounded-circle avatar-xs" alt="" />
                                                        <span class="user-status"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        <p class="text-truncate mb-0">Bella Cote</p>
                                                    </div>
                                                    <div class="ms-auto">
                                                        <span class="badge bg-dark-subtle text-reset rounded p-1">18</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="d-flex align-items-center px-4 mt-5 mb-2">
                                    <div class="flex-grow-1">
                                        <h4 class="mb-0 font-size-11 text-muted text-uppercase">Channels</h4>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Create group">

                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" class="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addgroup-exampleModal">
                                                <i class="bx bx-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="chat-message-list">

                                    <ul class="list-unstyled chat-list chat-user-list mb-3" id="channelList">
                                        <li id="contact-id-1" data-name="favorite" >
                                            <a href="javascript: void(0);" class="unread-msg-user">
                                                <div class="d-flex align-items-center">
                                                    <div class="chat-user-img online align-self-center me-2 ms-0">
                                                        <img src="/images/users/avatar-2-1.jpg" class="rounded-circle avatar-xs" alt="" />
                                                        <span class="user-status"></span>
                                                    </div>
                                                    <div class="overflow-hidden">
                                                        <p class="text-truncate mb-0">Bella Cote</p>
                                                    </div>
                                                    <div class="ms-auto">
                                                        <span class="badge bg-dark-subtle text-reset rounded p-1">18</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- End chat-message-list --> */}
                            </div>

                        </div>
                        {/* <!-- Start chats content --> */}

                        {/* <!-- Start add group Modal --> */}
                        <div class="modal fade" id="addgroup-exampleModal" tabindex="-1" role="dialog" aria-labelledby="addgroup-exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content modal-header-colored shadow-lg border-0">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-white font-size-16" id="addgroup-exampleModalLabel">Create New Group</h5>
                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                                        </button>
                                    </div>
                                    <div class="modal-body p-4">
                                        <form>
                                            <div class="mb-4">
                                                <label for="addgroupname-input" class="form-label">Group Name</label>
                                                <input type="text" class="form-control" id="addgroupname-input" placeholder="Enter Group Name" />
                                            </div>
                                            <div class="mb-4">
                                                <label class="form-label">Group Members</label>
                                                <div class="mb-3">
                                                    <button class="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#groupmembercollapse" aria-expanded="false" aria-controls="groupmembercollapse">
                                                        Select Members
                                                    </button>
                                                </div>

                                                <div class="collapse" id="groupmembercollapse">
                                                    <div class="card border">
                                                        <div class="card-header">
                                                            <h5 class="font-size-15 mb-0">Contacts</h5>
                                                        </div>
                                                        <div class="card-body p-2">
                                                            <div data-simplebar="" style={{ maxHeight: "150px" }}>
                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        A
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck1" checked="" />
                                                                                <label class="form-check-label" for="memberCheck1">Albert Rodarte</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck2" />
                                                                                <label class="form-check-label" for="memberCheck2">Allison Etter</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        C
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck3" />
                                                                                <label class="form-check-label" for="memberCheck3">Craig Smiley</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        D
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck4" />
                                                                                <label class="form-check-label" for="memberCheck4">Daniel Clay</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        I
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck5" />
                                                                                <label class="form-check-label" for="memberCheck5">Iris Wells</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        J
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck6" />
                                                                                <label class="form-check-label" for="memberCheck6">Juan Flakes</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck7" />
                                                                                <label class="form-check-label" for="memberCheck7">John Hall</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck8" />
                                                                                <label class="form-check-label" for="memberCheck8">Joy Southern</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        M
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck9" />
                                                                                <label class="form-check-label" for="memberCheck9">Michael Hinton</label>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck10" />
                                                                                <label class="form-check-label" for="memberCheck10">Mary Farmer</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        P
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck11" />
                                                                                <label class="form-check-label" for="memberCheck11">Phillis Griffin</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        R
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck12" />
                                                                                <label class="form-check-label" for="memberCheck12">Rocky Jackson</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <div class="contact-list-title">
                                                                        S
                                                                    </div>

                                                                    <ul class="list-unstyled contact-list">
                                                                        <li>
                                                                            <div class="form-check">
                                                                                <input type="checkbox" class="form-check-input" id="memberCheck13" />
                                                                                <label class="form-check-label" for="memberCheck13">Simon Velez</label>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="addgroupdescription-input" class="form-label">Description</label>
                                                <textarea class="form-control" id="addgroupdescription-input" rows="3" placeholder="Enter Description"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-link" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Create Groups</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End add group Modal --> */}
                    </div>
                    {/* <!-- End chats tab-pane --> */}

                    {/* <!-- Start contacts tab-pane --> */}
                    <div class={`tab-pane ${activeTab == 3 && "show active"} `} id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">
                        {/* <!-- Start Contact content --> */}
                        <div>
                            <div class="px-4 pt-4">
                                <div class="d-flex align-items-start">
                                    <div class="flex-grow-1">
                                        <h4 class="mb-4">Contacts</h4>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Contact">

                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" class="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addContact-exampleModal">
                                                <i class="bx bx-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <form>
                                    <div class="input-group mb-4">
                                        <input type="text" class="form-control bg-light border-0 pe-0" id="searchContact" onkeyup="searchContacts()" placeholder="Search Contacts.." aria-label="Search Contacts..." aria-describedby="button-searchcontactsaddon" autocomplete="off" />
                                        <button class="btn btn-light" type="button" id="button-searchcontactsaddon"><i class='bx bx-search align-middle'></i></button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- end p-4 --> */}

                            <div class="chat-message-list chat-group-list" data-simplebar="">
                                <div class="sort-contact">
                                    <div>
                                        <div class="mt-3">
                                            <div class="">
                                                <div class="contact-list-title">A</div>
                                                <ul class="list-unstyled contact-list">
                                                    <li>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 me-2">
                                                                <div class="avatar-xs">
                                                                    <span class="avatar-title rounded-circle font-size-10 text-uppercase bg-pink">AL</span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h5 class="font-size-14 m-0">Alvarez Luna</h5>
                                                            </div><div class="flex-shrink-0">
                                                                <div class="dropdown">
                                                                    <a aria-haspopup="true" class="text-mute" aria-expanded="false">
                                                                        <i class="bx bx-dots-vertical-rounded align-middle"></i>
                                                                    </a>
                                                                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu-end dropdown-menu" data-bs-popper="static">
                                                                        <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                            Edit <i class="bx bx-pencil ms-2 text-muted"></i>
                                                                        </a>
                                                                        <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                            Block <i class="bx bx-block ms-2 text-muted"></i>
                                                                        </a>
                                                                        <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                            Remove <i class="bx bx-trash ms-2 text-muted"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <div class="mt-3">
                                                <div class="contact-list-title">C</div>
                                                <ul class="list-unstyled contact-list">
                                                    <li><div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-2"><div class="avatar-xs">
                                                            <img src="/static/media/avatar-1.9c8e605558cece65b06c.jpg" alt="" class="img-fluid rounded-circle" />
                                                        </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h5 class="font-size-14 m-0">Carla Serrano</h5>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="dropdown">
                                                                <a aria-haspopup="true" class="text-mute" aria-expanded="false"><i class="bx bx-dots-vertical-rounded align-middle"></i></a>
                                                                <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu-end dropdown-menu" data-bs-popper="static">
                                                                    <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                        Edit <i class="bx bx-pencil ms-2 text-muted"></i>
                                                                    </a>
                                                                    <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                        Block <i class="bx bx-block ms-2 text-muted"></i>
                                                                    </a>
                                                                    <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                        Remove <i class="bx bx-trash ms-2 text-muted"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <div class="mt-3">
                                                <div class="contact-list-title">D</div>
                                                <ul class="list-unstyled contact-list">
                                                    <li>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 me-2">
                                                                <div class="avatar-xs">
                                                                    <span class="avatar-title rounded-circle font-size-10 text-uppercase bg-primary">DV</span>
                                                                </div>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h5 class="font-size-14 m-0">Dean Vargas</h5>
                                                            </div>
                                                            <div class="flex-shrink-0">
                                                                <div class="dropdown">
                                                                    <a aria-haspopup="true" class="text-mute" aria-expanded="false">
                                                                        <i class="bx bx-dots-vertical-rounded align-middle"></i>
                                                                    </a>
                                                                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu-end dropdown-menu" data-bs-popper="static">
                                                                        <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                            Edit <i class="bx bx-pencil ms-2 text-muted"></i>
                                                                        </a>
                                                                        <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                            Block <i class="bx bx-block ms-2 text-muted"></i>
                                                                        </a>
                                                                        <a href="#" tabindex="0" role="menuitem" class="d-flex align-items-center justify-content-between dropdown-item">
                                                                            Remove <i class="bx bx-trash ms-2 text-muted"></i>
                                                                        </a>
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
                            {/* <!-- end contact lists --> */}
                        </div>
                        {/* <!-- Start Contact content --> */}
                    </div>
                    {/* <!-- End contacts tab-pane --> */}

                    {/* <!-- Start calls tab-pane --> */}
                    <div class={`tab-pane ${activeTab == 4 && "show active"} `} id="pills-calls" role="tabpanel" aria-labelledby="pills-calls-tab">
                        {/* <!-- Start Contact content --> */}
                        <div>
                            <div class="px-4 pt-4">
                                <div class="d-flex align-items-start">
                                    <div class="flex-grow-1">
                                        <h4 class="mb-3">Calls</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end p-4 --> */}

                            {/* <!-- Start contact lists --> */}
                            <div class="chat-message-list chat-call-list" data-simplebar="">
                                <ul class="list-unstyled chat-list">
                                    <li><div class="d-flex align-items-center">
                                        <div class="chat-user-img flex-shrink-0 me-2">
                                            <img src="/static/media/avatar-1.9c8e605558cece65b06c.jpg" class="rounded-circle avatar-xs" alt="" />
                                        </div>
                                        <div class="flex-grow-1 overflow-hidden">
                                            <p class="text-truncate mb-0">Burgess Burt</p>
                                            <div class="text-muted font-size-12 text-truncate">
                                                <i class="ri-arrow-left-down-fill text-success align-bottom me-1"></i>
                                                5 May, 2016, 06:216:21 AM
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0 ms-3">
                                            <div class="d-flex align-items-center gap-3">
                                                <div>
                                                    <h5 class="mb-0 font-size-12 text-muted">5:37</h5>
                                                </div>
                                                <div>
                                                    <button type="button" class="p-0 font-size-20 stretched-link btn btn-link">
                                                        <i class="bx bx-video align-middle"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="chat-user-img flex-shrink-0 me-2">
                                                <img src="/static/media/avatar-2.81ae8bcabb014e1f71b8.jpg" class="rounded-circle avatar-xs" alt="" />
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-truncate mb-0">Bryant Shaffer</p>
                                                <div class="text-muted font-size-12 text-truncate">
                                                    <i class="ri-arrow-left-down-fill text-success align-bottom me-1"></i>17 May, 2014, 10:2210:22 AM
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-3">
                                                <div class="d-flex align-items-center gap-3">
                                                    <div>
                                                        <h5 class="mb-0 font-size-12 text-muted">5:24</h5>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="p-0 font-size-20 stretched-link btn btn-link">
                                                            <i class="bx bxs-phone-call align-middle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="chat-user-img flex-shrink-0 me-2">
                                                <div class="avatar-group">
                                                    <div class="avatar-group-item">
                                                        <div class="avatar-xs">
                                                            <span class="avatar-title rounded-circle text-uppercase text-white bg-danger">SB</span>
                                                        </div>
                                                    </div>
                                                    <div class="avatar-group-item">
                                                        <div class="avatar-xs">
                                                            <div class="avatar-title rounded-circle bg-light text-primary">4+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-truncate mb-0">Curtis Spears</p>
                                                <div class="text-muted font-size-12 text-truncate">
                                                    <i class="ri-arrow-right-up-fill text-danger align-bottom me-1"></i>27 Nov, 2020, 04:114:11 AM
                                                </div>
                                            </div>
                                            <div class="flex-shrink-0 ms-3">
                                                <div class="d-flex align-items-center gap-3">
                                                    <div>
                                                        <h5 class="mb-0 font-size-12 text-muted">2:43</h5>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="p-0 font-size-20 stretched-link btn btn-link">
                                                            <i class="bx bx-video align-middle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- end contact lists --> */}
                        </div>
                        {/* <!-- Start Contact content --> */}
                    </div>
                    {/* <!-- End calls tab-pane --> */}

                    {/* <!-- Start bookmark tab-pane --> */}
                    <div class={`tab-pane ${activeTab == 5 && "show active"} `} id="pills-bookmark" role="tabpanel" aria-labelledby="pills-bookmark-tab">
                        {/* <!-- Start Contact content --> */}
                        <div>
                            <div class="px-4 pt-4">
                                <div class="d-flex align-items-start">
                                    <div class="flex-grow-1">
                                        <h4 class="mb-3">Bookmark</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end p-4 --> */}

                            {/* <!-- Start contact lists --> */}
                            <div class="chat-message-list chat-bookmark-list" data-simplebar="">
                                <ul class="list-unstyled chat-list">
                                    <li>
                                        <div class="d-flex align-items-center">
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-file"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">design-phase-1-approved.pdf</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">12.5 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Bg Pattern</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">https://bgpattern.com/</p>
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-image"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Image-001.jpg</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">4.2 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Images</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">https://images123.com/</p>
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-pin"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Bg Gradient</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">https://bggradient.com/</p>
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-image"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Image-012.jpg</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">3.1 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-file"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">analytics dashboard.zip</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">6.7 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-image"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Image-031.jpg</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">4.2 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-file"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Changelog.txt</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">6.7 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-file"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Widgets.zip</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">6.7 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-image"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">logo-light.png</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">4.2 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-image"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Image-2.jpg</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">3.1 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <div class="flex-shrink-0 avatar-xs ms-1 me-3">
                                                <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                                    <i class="bx bx-file"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="font-size-14 mb-1"><a href="#" class="text-truncate p-0">Landing-A.zip</a></h5>
                                                <p class="text-muted text-truncate font-size-13 mb-0">6.7 MB</p>
                                            </div>

                                            <div class="flex-shrink-0 ms-3">
                                                <div class="dropdown">
                                                    <a class="dropdown-toggle font-size-16 text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                            {/* <!-- end contact lists --> */}
                        </div>
                        {/* <!-- Start Contact content --> */}
                    </div>
                    {/* <!-- End bookmark tab-pane --> */}

                    {/* <!-- Start settings tab-pane --> */}
                    <div class={`tab-pane ${activeTab == 6 && "show active"} `} id="pills-setting" role="tabpanel" aria-labelledby="pills-setting-tab">
                        {/* <!-- Start Settings content --> */}
                        <div>
                            <div class="user-profile-img">
                                <img src="/images/small/img-4-1.jpg" class="profile-img profile-foreground-img" style={{ height: "160px" }} alt="" />
                                <div class="overlay-content">
                                    <div>
                                        <div class="user-chat-nav p-3">

                                            <div class="d-flex w-100 align-items-center">
                                                <div class="flex-grow-1">
                                                    <h5 class="text-white mb-0">Settings</h5>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs p-0 rounded-circle profile-photo-edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Change Background">
                                                        <input id="profile-foreground-img-file-input" type="file" class="profile-foreground-img-file-input" />
                                                        <label for="profile-foreground-img-file-input" class="profile-photo-edit avatar-xs">
                                                            <span class="avatar-title rounded-circle bg-light text-body">
                                                                <i class="bx bxs-pencil"></i>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                                <div class="mb-3 profile-user">
                                    <img src="/images/users/avatar-1-1.jpg" class="rounded-circle avatar-lg img-thumbnail user-profile-image" alt="user-profile-image" />
                                    <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                        <input id="profile-img-file-input" type="file" class="profile-img-file-input" />
                                        <label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
                                            <span class="avatar-title rounded-circle bg-light text-body">
                                                <i class="bx bxs-camera"></i>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <h5 class="font-size-16 mb-1 text-truncate"></h5>

                                <div class="dropdown d-inline-block">
                                    <a class="text-muted dropdown-toggle d-block" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bxs-circle text-success font-size-10 align-middle"></i> Active <i class="mdi mdi-chevron-down"></i>
                                    </a>

                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#"><i class="bx bxs-circle text-success font-size-10 me-1 align-middle"></i> Active</a>
                                        <a class="dropdown-item" href="#"><i class="bx bxs-circle text-warning font-size-10 me-1 align-middle"></i> Away</a>
                                        <a class="dropdown-item" href="#"><i class="bx bxs-circle text-danger font-size-10 me-1 align-middle"></i> Do not disturb</a>
                                    </div>
                                </div>


                            </div>
                            {/* <!-- End profile user --> */}

                            {/* <!-- Start User profile description --> */}
                            <div class="user-setting" data-simplebar="">
                                <div id="settingprofile" class="accordion accordion-flush">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey='0'>
                                            <Accordion.Header><i class="bx bxs-user text-muted me-3"></i> Personal Info</Accordion.Header>
                                            <Accordion.Body>
                                                <div class="accordion-body">
                                                    <div class="float-end">
                                                        <button type="button" class="btn btn-soft-primary btn-sm"><i class="bx bxs-pencil align-middle"></i></button>
                                                    </div>

                                                    <div>
                                                        <p class="text-muted mb-1">Name</p>
                                                        <h5 class="font-size-14">Adam Zampa</h5>
                                                    </div>

                                                    <div class="mt-4">
                                                        <p class="text-muted mb-1">Email</p>
                                                        <h5 class="font-size-14">adc@123.com</h5>
                                                    </div>

                                                    <div class="mt-4">
                                                        <p class="text-muted mb-1">Location</p>
                                                        <h5 class="font-size-14 mb-0">California, USA</h5>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='1'>
                                            <Accordion.Header>Themes</Accordion.Header>
                                            <Accordion.Body>
                                                <div id="collapsethemes" class="accordion-collapse collapse" aria-labelledby="headerthemes" data-bs-parent="#settingprofile">
                                                    <div class="accordion-body">
                                                        <div>
                                                            <h5 class="mb-3 font-size-11 text-muted text-uppercase">Choose Theme Color :</h5>
                                                            <div class="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-color-list">
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-color" type="radio" value="0" name="bgcolor-radio" id="bgcolor-radio1" />
                                                                    <label class="form-check-label avatar-xs" for="bgcolor-radio1">
                                                                        <span class="avatar-title bg-primary-custom rounded-circle theme-btn bgcolor-radio1"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-color" type="radio" value="1" name="bgcolor-radio" id="bgcolor-radio2" />
                                                                    <label class="form-check-label avatar-xs" for="bgcolor-radio2">
                                                                        <span class="avatar-title bg-info rounded-circle theme-btn bgcolor-radio2"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-color" type="radio" value="2" name="bgcolor-radio" id="bgcolor-radio4" />
                                                                    <label class="form-check-label avatar-xs" for="bgcolor-radio4">
                                                                        <span class="avatar-title bg-purple rounded-circle theme-btn bgcolor-radio4"></span>
                                                                    </label>
                                                                </div>

                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-color" type="radio" value="3" name="bgcolor-radio" id="bgcolor-radio5" />
                                                                    <label class="form-check-label avatar-xs" for="bgcolor-radio5">
                                                                        <span class="avatar-title bg-pink rounded-circle theme-btn bgcolor-radio5"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-color" type="radio" value="4" name="bgcolor-radio" id="bgcolor-radio6" />
                                                                    <label class="form-check-label avatar-xs" for="bgcolor-radio6">
                                                                        <span class="avatar-title bg-danger rounded-circle theme-btn bgcolor-radio6"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-color" type="radio" value="5" name="bgcolor-radio" id="bgcolor-radio7" />
                                                                    <label class="form-check-label avatar-xs" for="bgcolor-radio7">
                                                                        <span class="avatar-title bg-secondary rounded-circle theme-btn bgcolor-radio7"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-color" type="radio" value="6" name="bgcolor-radio" id="bgcolor-radio8" checked="" />
                                                                    <label class="form-check-label avatar-xs light-background" for="bgcolor-radio8">
                                                                        <span class="avatar-title bg-light rounded-circle theme-btn bgcolor-radio8"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="mt-4 pt-2">
                                                            <h5 class="mb-3 font-size-11 text-muted text-uppercase">Choose Theme Image :</h5>
                                                            <div class="d-flex align-items-center flex-wrap gap-2 theme-btn-list theme-btn-list-img">
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio1" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio1">
                                                                        <span class="avatar-title bg-pattern-1 rounded-circle theme-btn bgimg-radio1"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio2" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio2">
                                                                        <span class="avatar-title bg-pattern-2 rounded-circle theme-btn bgimg-radio2"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio3" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio3">
                                                                        <span class="avatar-title bg-pattern-3 rounded-circle theme-btn bgimg-radio3"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio4" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio4">
                                                                        <span class="avatar-title bg-pattern-4 rounded-circle theme-btn bgimg-radio4"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio5" checked="" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio5">
                                                                        <span class="avatar-title bg-pattern-5 rounded-circle theme-btn bgimg-radio5"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio6" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio6">
                                                                        <span class="avatar-title bg-pattern-6 rounded-circle theme-btn bgimg-radio6"></span>
                                                                    </label>
                                                                </div>

                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio7" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio7">
                                                                        <span class="avatar-title bg-pattern-7 rounded-circle theme-btn bgimg-radio7"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio8" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio8">
                                                                        <span class="avatar-title bg-pattern-8 rounded-circle theme-btn bgimg-radio8"></span>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check">
                                                                    <input class="form-check-input theme-img" type="radio" name="bgimg-radio" id="bgimg-radio9" />
                                                                    <label class="form-check-label avatar-xs" for="bgimg-radio9">
                                                                        <span class="avatar-title bg-pattern-9 rounded-circle theme-btn bgimg-radio9"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2'>
                                            <Accordion.Header>Privacy</Accordion.Header>
                                            <Accordion.Body>
                                                <div class="accordion-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item py-3 px-0 pt-0">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="font-size-13 mb-0 text-truncate">Profile photo</h5>
                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <select class="form-select form-select-sm">
                                                                        <option value="Everyone" selected="">Everyone</option>
                                                                        <option value="Selected">Selected</option>
                                                                        <option value="Nobody">Nobody</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="list-group-item py-3 px-0">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="font-size-13 mb-0 text-truncate">Last seen</h5>

                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <div class="form-check form-switch">
                                                                        <input type="checkbox" class="form-check-input" id="privacy-lastseenSwitch" checked="" />
                                                                        <label class="form-check-label" for="privacy-lastseenSwitch"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="list-group-item py-3 px-0">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="font-size-13 mb-0 text-truncate">Status</h5>
                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <select class="form-select form-select-sm">
                                                                        <option value="Everyone" selected="">Everyone</option>
                                                                        <option value="Selected">Selected</option>
                                                                        <option value="Nobody">Nobody</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="list-group-item py-3 px-0">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="font-size-13 mb-0 text-truncate">Read receipts</h5>
                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <div class="form-check form-switch">
                                                                        <input type="checkbox" class="form-check-input" id="privacy-readreceiptSwitch" checked="" />
                                                                        <label class="form-check-label" for="privacy-readreceiptSwitch"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li class="list-group-item py-3 px-0 pb-0">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="font-size-13 mb-0 text-truncate">Groups</h5>

                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <select class="form-select form-select-sm">
                                                                        <option value="Everyone" selected="">Everyone</option>
                                                                        <option value="Selected">Selected</option>
                                                                        <option value="Nobody">Nobody</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='3'>
                                            <Accordion.Header>Security</Accordion.Header>
                                            <Accordion.Body>
                                                <div class="accordion-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item p-0">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="font-size-13 mb-0 text-truncate">Show security notification</h5>

                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <div class="form-check form-switch">
                                                                        <input type="checkbox" class="form-check-input" id="security-notificationswitch" />
                                                                        <label class="form-check-label" for="security-notificationswitch"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='4'>
                                            <Accordion.Header>Help</Accordion.Header>
                                            <Accordion.Body>
                                                <div class="accordion-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item py-3 px-0 pt-0">
                                                            <h5 class="font-size-13 mb-0"><a href="#" class="text-body d-block">FAQs</a></h5>
                                                        </li>
                                                        <li class="list-group-item py-3 px-0">
                                                            <h5 class="font-size-13 mb-0"><a href="#" class="text-body d-block">Contact</a></h5>
                                                        </li>
                                                        <li class="list-group-item py-3 px-0 pb-0">
                                                            <h5 class="font-size-13 mb-0"><a href="#" class="text-body d-block">Terms & Privacy policy</a></h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                {/* <!-- end profile-setting-accordion --> */}
                            </div>
                            {/* <!-- End User profile description --> */}
                        </div>
                        {/* <!-- Start Settings content --> */}
                    </div>
                    {/* <!-- End settings tab-pane --> */}
                </div>
                {/* <!-- end tab content --> */}
            </div>
        </>
    )
}

export default Sidebar
