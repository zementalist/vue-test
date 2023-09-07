<template>
    <div class="dashboard-header">
        <nav class="navbar navbar-expand-lg bg-white sticky-top "> <a class="navbar-brand" href="#"><img height="60"
                    src="@/assets/10.svg" alt=""></a> <button class="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-right-top">
                    <!-- style="filter: invert(1);" -->
                    <li class="nav-item">
                        <div id="custom-search" class="top-search-bar"> <input class="form-control" type="text"
                                placeholder="Search.."> </div>
                    </li>

                    <li class="nav-item"> <a class="nav-link" href="#" aria-expanded="false"> <i
                                class="fas fa-home"></i> Home </a>
                    </li>

                    <li class="nav-item"> <a class="nav-link" href="#" aria-expanded="false"> <i
                                class="fas fa-user-shield"></i> Insights </a>
                    </li>


                    <li class="nav-item dropdown notification"> <a class="nav-link nav-icons" href="#"
                            id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><i class="fas fa-user-friends"></i><span class="indicator"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                            <li>
                                <div class="notification-title">Friendship Requests</div>
                                <div class="notification-list">
                                    <div class="list-group">
                                        
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-footer"> <a href="#">View all requests</a></div>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown notification"> <a class="nav-link nav-icons" href="#"
                            id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><i class="fas fa-comment-alt"></i> <span class="indicator"></span></a>
                        <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                            <li>
                                <div class="notification-title">Messages</div>
                                <div class="notification-list">
                                    <div class="list-group"> <a href="#"
                                            class="list-group-item list-group-item-action active">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img
                                                        src="https://img.icons8.com/office/100/000000/administrator-female.png"
                                                        alt="" class="user-avatar-md rounded-circle"></div>
                                                <div class="notification-list-user-block">
                                                    <div class="notification-list-user-name">Jeremy
                                                        Hukonah <span class="indicator"></span></div>
                                                    <div class="message-item">accepted your invitation to join the team.
                                                    </div>
                                                    <div class="notification-date">2 min ago</div>
                                                </div>
                                            </div>
                                        </a> <a href="#" class="list-group-item list-group-item-action">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img
                                                        src="https://img.icons8.com/color/48/000000/administrator-female.png"
                                                        alt="" class="user-avatar-md rounded-circle"></div>
                                                <div class="notification-list-user-block">
                                                    <div class="notification-list-user-name">John Sammy </div>
                                                    <div class="message-item">
                                                        updated the
                                                        email address</div>
                                                    <div class="notification-date">2 days ago</div>
                                                </div>
                                            </div>
                                        </a> <a href="#" class="list-group-item list-group-item-action">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img
                                                        src="https://img.icons8.com/color/100/000000/name.png" alt=""
                                                        class="user-avatar-md rounded-circle"></div>
                                                <div class="notification-list-user-block">
                                                    <div class="notification-list-user-name">Kioh Samso</div>
                                                    <div class="message-item">is
                                                        watching your main repository</div>
                                                    <div class="notification-date">2 min
                                                        ago</div>
                                                </div>
                                            </div>
                                        </a> </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-footer"> <a href="#">View all messages</a></div>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown notification"> <a class="nav-link nav-icons" href="#"
                            id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><i class="fas fa-fw fa-bell"></i> <span class="indicator"></span></a>
                        <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                            <li>
                                <div class="notification-title"> Notification</div>
                                <div class="notification-list">
                                    <div class="list-group"> <a href="#"
                                            class="list-group-item list-group-item-action active">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img
                                                        src="https://img.icons8.com/office/100/000000/administrator-female.png"
                                                        alt="" class="user-avatar-md rounded-circle"></div>
                                                <div class="notification-list-user-block"><span
                                                        class="notification-list-user-name">Jeremy
                                                        Hukonah</span>accepted your invitation to join the team. <div
                                                        class="notification-date">2 min ago</div>
                                                </div>
                                            </div>
                                        </a> <a href="#" class="list-group-item list-group-item-action">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img
                                                        src="https://img.icons8.com/color/48/000000/administrator-female.png"
                                                        alt="" class="user-avatar-md rounded-circle"></div>
                                                <div class="notification-list-user-block"><span
                                                        class="notification-list-user-name">John Sammy</span>updated the
                                                    email address <div class="notification-date">2 days ago</div>
                                                </div>
                                            </div>
                                        </a> <a href="#" class="list-group-item list-group-item-action">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img
                                                        src="https://img.icons8.com/color/100/000000/name.png" alt=""
                                                        class="user-avatar-md rounded-circle"></div>
                                                <div class="notification-list-user-block"><span
                                                        class="notification-list-user-name">Kioh Samso</span> is
                                                    watching your main repository <div class="notification-date">2 min
                                                        ago</div>
                                                </div>
                                            </div>
                                        </a> </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-footer"> <a href="#">View all notifications</a></div>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown nav-user"> <a class="nav-link nav-user-img" href="#"
                            id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"><img
                                src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt=""
                                class="user-avatar-md rounded-circle"></a>
                        <div class="dropdown-menu dropdown-menu-right nav-user-dropdown"
                            aria-labelledby="navbarDropdownMenuLink2">
                            <div class="nav-user-info">
                                <a href="">
                                    <h5 class="mb-0 text-white nav-user-name">Alaa Zaghloul</h5>
                                </a>
                            </div> <a class="dropdown-item" href="#"><i class="fas fa-question mr-2"></i>Contact
                                Support</a> <a class="dropdown-item" href="#"><i class="fas fa-cog mr-2"></i>Setting</a>
                            <a class="dropdown-item" href="#"><i class="fas fa-power-off mr-2"></i>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                halfPageHeightScrolled: false,
                scrolled50Px: false // when scroll: set navbar background color
            }
        },
        methods: {
            setNavBgColorOnDropdown() {
                this.setNavbarBgColor = this.scrolledLittle ? true : !this.setNavbarBgColor;
            },
            updateActiveNav(event) {
                document.getElementsByClassName('nav-item active')[0].classList.remove('active');
                event.target.parentElement.classList.add('active');
                if (window.innerWidth < 768)
                    document.getElementsByClassName('navbar-toggler')[0].click();
            }
        },
        computed: {
            currentNavbarBgColor() {
                return this.setNavbarBgColor ? 'bg-light navbar-light' : 'bg-transparent navbar-dark';
            },
            showArrowUp() {
                return this.halfPageHeightScrolled;
            },
            scrolledLittle: {
                set(value) {
                    this.scrolled50Px = value;
                },
                get() {
                    return this.scrolled50Px;
                }
            },
            setNavbarBgColor: {
                set(value) {
                    this.scrolledLittle = value;
                },
                get() {
                    return this.currentRoute == 'home' ? this.scrolledLittle : true;
                }
            },
            reachedHalfPage: {
                set(value) {
                    this.halfPageHeightScrolled = value;
                },
                get() {
                    return this.halfPageHeightScrolled;
                }
            },
            currentRoute() {
                return this.$route.name;
            }
        },

        mounted() {
            // 1- Display arrow Icon if reached to 1/2 or 1/3 of page height
            window.onscroll = () => {
                let scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) - (document
                    .documentElement.clientTop || 0);
                let pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                    document.documentElement.clientHeight, document.documentElement.scrollHeight, document
                    .documentElement.offsetHeight);
                let halfPageHeight = pageHeight / 3;
                if (scrollPosition > halfPageHeight)
                    this.halfPageHeightScrolled = true;
                else
                    this.halfPageHeightScrolled = false;
                // 2- Set navbar background color if scrolled more than 50px
                let scrollHeight = window.scrollY;
                if (scrollHeight > 50) {
                    this.scrolled50Px = true;
                } else {
                    this.scrolled50Px = false;
                }
            }
        }

    }
</script>

<style scoped>
    body {
        background: #304FFE
    }

    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: none !important
    }

    .dashboard-header .navbar {
        padding: 0px;
        border-bottom: 1px solid #e6e6f2;
        -webkit-box-shadow: 0px 0px 28px 0px rgba(82, 63, 105, 0.13);
        box-shadow: 0px 0px 28px 0px rgba(82, 63, 105, 0.13);
        -webkit-transition: all 0.3s ease;
        min-height: 60px
    }

    .navbar-brand {
        display: inline-block;
        margin-right: 1rem;
        line-height: inherit;
        white-space: nowrap;
        padding: 11px 20px;
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 700;
        color: #007bff
    }

    .navbar-brand:hover {
        color: #007bff
    }



    .navbar-right-top .nav-item {
        border-right: 1px solid #e6e6f2
    }

    .navbar-right-top .nav-item:last-child {
        border: none
    }

    .navbar-right-top .nav-item .nav-link {
        padding: 13px 20px;
        font-size: 16px;
        line-height: 2;
        color: #82849f
    }

    .top-search-bar {
        padding-top: 12px;
        padding-right: 24px
    }



    .notification-dropdown {
        min-width: 360px;
    }

    .notification-dropdown,
    .nav-user-dropdown {
        padding: 0px;
        margin: 0px
    }

    .notification-title {
        font-size: 14px;
        color: #3d405c;
        text-align: center;
        padding: 8px 0px;
        border-bottom: 1px solid #e3e3e3;
        line-height: 1.5;
        background-color: #fffffe
    }


    .notification-list .list-group-item {
        border-radius: 0px;
        padding: 12px;
        margin-top: -1px;
        border-left: transparent;
        border-right: transparent
    }

    .notification-list .list-group-item.active {
        z-index: 2;
        color: #3d405c;
        background-color: #f7f7fb;
        border-color: #e1e1e7
    }

    .notification-list .list-group-item-action:focus,
    .list-group-item-action:hover {
        color: #404040;
        text-decoration: none;
        background-color: #f7f7fb
    }




    .notification-info .notification-date {
        display: block;
        font-size: 11px;
        margin-top: 4px;
        text-transform: uppercase;
        color: #71748d
    }

    .notification .dropdown-toggle::after,
    .nav-user .dropdown-toggle::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: .255em;
        vertical-align: .255em;
        content: "";
        border: none
    }

    .notification-list-user-img {
        float: left
    }

    .notification-list-user-block {
        padding-left: 50px;
        font-size: 14px;
        line-height: 21px
    }

    .notification-list-user-name {
        color: #5969ff;
        font-size: 14px;
        margin-right: 8px
    }

    .list-footer,
    .conntection-footer {
        font-size: 14px;
        color: #fff;
        text-align: center;
        padding: 10px 0px;
        line-height: 1.5;
        font-weight: 700;
        background-color: #5969ff;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px
    }

    .list-footer a,
    .conntection-footer a {
        color: #fff
    }

    .list-footer a:hover,
    .conntection-footer a:hover {
        color: #fff
    }

    .indicator {
        content: '3';
        position: absolute;
        top: 16px;
        right: 15px;
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 100%;
        background-color: #ef172c;
        animation: .9s infinite beatHeart;
        transform-origin: center
    }

    @keyframes beatHeart {
        0% {
            transform: scale(0.9)
        }

        25% {
            transform: scale(1.1)
        }

        40% {
            transform: scale(0.9)
        }

        60% {
            transform: scale(1.1)
        }

        100% {
            transform: scale(0.9)
        }
    }




    .nav-user-dropdown {
        padding: 0px;
        min-width: 230px;
        margin: 0px
    }



    .nav-user-info {
        background-color: gray;
        line-height: 1.4;
        padding: 12px;
        color: #fff;
        font-size: 13px;
        border-radius: 2px 2px 0 0
    }

    .nav-user-info .status {
        float: left;
        top: 7px;
        left: 0px
    }



    .nav-user-dropdown .dropdown-item {
        display: block;
        width: 100%;
        padding: 12px 22px 15px;
        clear: both;
        font-weight: 400;
        color: #686972;
        text-align: inherit;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
        font-size: 13px;
        line-height: 0.4
    }

    .nav-user-dropdown .dropdown-item:hover {
        background-color: #f7f7fb
    }

    .user-avatar-xxl {
        height: 128px;
        width: 128px
    }

    .user-avatar-xl {
        height: 90px;
        width: 90px
    }

    .user-avatar-lg {
        height: 48px;
        width: 48px
    }

    .user-avatar-md {
        height: 32px;
        width: 32px
    }

    .user-avatar-sm {
        height: 24px;
        width: 24px
    }

    .user-avatar-xs {
        height: 18px;
        width: 18px
    }

    .avatar {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        border: 2px solid #F7F9FA;
        background: #F7F9FA;
        color: #fff
    }

    .media-attachment div.avatar {
        border: none
    }

    .avatar.bg-primary {
        display: flex;
        align-items: center;
        justify-content: center
    }

    .avatar.bg-primary i {
        font-size: 14px
    }


    .message-item {
        color: rgb(163, 163, 163);
    }
</style>