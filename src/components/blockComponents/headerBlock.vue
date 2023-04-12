<template>
    <div class="header__block">
        <a href="#" class="header__block-logo">
            <img src="../../assets/logo.svg" alt="logo">
        </a>

        <nav class="header__block-nav" :class="{ showMenu: isBurger }">
            <ul class="nav__list">
                <li class="nav__list-item">
                    <a href="#/home" class="nav__item-link">Home</a>
                </li>
                <li class="nav__list-item">
                    <a href="#/shopBlock" class="nav__item-link">Shop</a>
                </li>                
                <li class="nav__list-item">
                    <a href="#about" class="nav__item-link">About</a>
                </li>
                <li class="nav__list-item">
                    <a href="#contactUs" class="nav__item-link">Contact</a>
                </li>
            </ul>
        </nav>

        <div class="header__interract" :class="{ showMenu: isCont }">
            <div class="header__interract-profile">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 8C9.06087 8 10.0783 7.57857 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4C4 5.06087 4.42143 6.07828 5.17157 6.82843C5.92172 7.57857 6.93913 8 8 8ZM10.6667 4C10.6667 4.70724 10.3857 5.38552 9.88562 5.88562C9.38552 6.38572 8.70724 6.66667 8 6.66667C7.29276 6.66667 6.61448 6.38572 6.11438 5.88562C5.61428 5.38552 5.33333 4.70724 5.33333 4C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61428 7.29276 1.33333 8 1.33333C8.70724 1.33333 9.38552 1.61428 9.88562 2.11438C10.3857 2.61448 10.6667 3.29276 10.6667 4ZM16 14.6667C16 16 14.6667 16 14.6667 16H1.33333C1.33333 16 0 16 0 14.6667C0 13.3333 1.33333 9.33333 8 9.33333C14.6667 9.33333 16 13.3333 16 14.6667ZM14.6667 14.6613C14.6653 14.3333 14.4613 13.3467 13.5573 12.4427C12.688 11.5733 11.052 10.6667 8 10.6667C4.94667 10.6667 3.312 11.5733 2.44267 12.4427C1.53867 13.3467 1.336 14.3333 1.33333 14.6613H14.6667Z"
                        fill="#DB6B97" />
                </svg>


                <a href="#authoPage" class="header__profile-link">Login / Register</a>
            </div>
            <div class="header__interract-search">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.6781 12.9298C15.8884 11.2782 16.4305 9.23057 16.1959 7.19648C15.9613 5.16238 14.9673 3.29186 13.4128 1.95915C11.8583 0.626437 9.85794 -0.0701841 7.81187 0.00865439C5.76581 0.0874929 3.82496 0.935976 2.37762 2.38435C0.930277 3.83273 0.0831823 5.77419 0.00580795 7.82031C-0.0715664 9.86643 0.626485 11.8663 1.96031 13.4199C3.29413 14.9734 5.16536 15.966 7.19963 16.1992C9.23389 16.4323 11.2812 15.8888 12.9319 14.6773H12.9306C12.9681 14.7273 13.0081 14.7748 13.0531 14.821L17.8654 19.6333C18.0998 19.8679 18.4178 19.9997 18.7493 19.9998C19.0809 19.9999 19.399 19.8683 19.6335 19.6339C19.8681 19.3996 19.9999 19.0816 20 18.75C20.0001 18.4185 19.8685 18.1004 19.6341 17.8659L14.8218 13.0536C14.7771 13.0083 14.7291 12.9665 14.6781 12.9286V12.9298ZM15.0006 8.125C15.0006 9.02781 14.8227 9.92177 14.4773 10.7559C14.1318 11.5899 13.6254 12.3478 12.987 12.9862C12.3486 13.6246 11.5907 14.1309 10.7567 14.4764C9.92258 14.8219 9.02862 14.9997 8.12582 14.9997C7.22301 14.9997 6.32905 14.8219 5.49497 14.4764C4.66089 14.1309 3.90302 13.6246 3.26464 12.9862C2.62626 12.3478 2.11987 11.5899 1.77438 10.7559C1.4289 9.92177 1.25108 9.02781 1.25108 8.125C1.25108 6.30171 1.97538 4.55309 3.26464 3.26383C4.55391 1.97456 6.30252 1.25026 8.12582 1.25026C9.94911 1.25026 11.6977 1.97456 12.987 3.26383C14.2763 4.55309 15.0006 6.30171 15.0006 8.125Z"
                        fill="#DB6B97" />
                </svg>

            </div>
            <div class="header__interract-cart">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 0.875C0 0.70924 0.065848 0.550268 0.183058 0.433058C0.300269 0.315848 0.45924 0.25 0.625 0.25H2.5C2.63941 0.250039 2.77481 0.296688 2.88466 0.382531C2.99452 0.468374 3.07251 0.58848 3.10625 0.72375L3.6125 2.75H18.125C18.2168 2.75008 18.3074 2.77038 18.3904 2.80944C18.4735 2.8485 18.5469 2.90537 18.6055 2.976C18.6641 3.04664 18.7064 3.12931 18.7294 3.21815C18.7524 3.30698 18.7556 3.3998 18.7388 3.49L16.8638 13.49C16.8369 13.6332 16.7609 13.7626 16.6489 13.8557C16.5368 13.9488 16.3957 13.9999 16.25 14H5C4.85429 13.9999 4.71321 13.9488 4.60114 13.8557C4.48907 13.7626 4.41306 13.6332 4.38625 13.49L2.5125 3.50875L2.0125 1.5H0.625C0.45924 1.5 0.300269 1.43415 0.183058 1.31694C0.065848 1.19973 0 1.04076 0 0.875ZM3.8775 4L5.51875 12.75H15.7312L17.3725 4H3.8775ZM6.25 14C5.58696 14 4.95107 14.2634 4.48223 14.7322C4.01339 15.2011 3.75 15.837 3.75 16.5C3.75 17.163 4.01339 17.7989 4.48223 18.2678C4.95107 18.7366 5.58696 19 6.25 19C6.91304 19 7.54893 18.7366 8.01777 18.2678C8.48661 17.7989 8.75 17.163 8.75 16.5C8.75 15.837 8.48661 15.2011 8.01777 14.7322C7.54893 14.2634 6.91304 14 6.25 14ZM15 14C14.337 14 13.7011 14.2634 13.2322 14.7322C12.7634 15.2011 12.5 15.837 12.5 16.5C12.5 17.163 12.7634 17.7989 13.2322 18.2678C13.7011 18.7366 14.337 19 15 19C15.663 19 16.2989 18.7366 16.7678 18.2678C17.2366 17.7989 17.5 17.163 17.5 16.5C17.5 15.837 17.2366 15.2011 16.7678 14.7322C16.2989 14.2634 15.663 14 15 14ZM6.25 15.25C6.58152 15.25 6.89946 15.3817 7.13388 15.6161C7.3683 15.8505 7.5 16.1685 7.5 16.5C7.5 16.8315 7.3683 17.1495 7.13388 17.3839C6.89946 17.6183 6.58152 17.75 6.25 17.75C5.91848 17.75 5.60054 17.6183 5.36612 17.3839C5.1317 17.1495 5 16.8315 5 16.5C5 16.1685 5.1317 15.8505 5.36612 15.6161C5.60054 15.3817 5.91848 15.25 6.25 15.25ZM15 15.25C15.3315 15.25 15.6495 15.3817 15.8839 15.6161C16.1183 15.8505 16.25 16.1685 16.25 16.5C16.25 16.8315 16.1183 17.1495 15.8839 17.3839C15.6495 17.6183 15.3315 17.75 15 17.75C14.6685 17.75 14.3505 17.6183 14.1161 17.3839C13.8817 17.1495 13.75 16.8315 13.75 16.5C13.75 16.1685 13.8817 15.8505 14.1161 15.6161C14.3505 15.3817 14.6685 15.25 15 15.25Z"
                        fill="#DB6B97" />
                </svg>
                1

            </div>
            <div class="header__interract-favourite">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.99987 3.43506L9.10362 2.51381C6.99987 0.351311 3.14237 1.09756 1.74987 3.81631C1.09612 5.09506 0.948619 6.94131 2.14237 9.29756C3.29237 11.5663 5.68487 14.2838 9.99987 17.2438C14.3149 14.2838 16.7061 11.5663 17.8574 9.29756C19.0511 6.94006 18.9049 5.09506 18.2499 3.81631C16.8574 1.09756 12.9999 0.350061 10.8961 2.51256L9.99987 3.43506ZM9.99987 18.7501C-9.16638 6.08506 4.09862 -3.79994 9.77987 1.42881C9.85487 1.49756 9.92862 1.56881 9.99987 1.64256C10.0704 1.56888 10.1438 1.49799 10.2199 1.43006C15.8999 -3.80244 29.1661 6.08381 9.99987 18.7501Z"
                        fill="#DB6B97" />
                </svg>
                2

            </div>
        </div>
        <div class="burgers">
            <div class="header__interract-burger" @click="isBurger = !isBurger; ifCont()">
                <span class="header__burger-line">

                </span>
                <span class="header__burger-line">

                </span>
                <span class="header__burger-line">

                </span>

            </div>
            <div class="header__interract-burger" @click="isCont = !isCont; ifBurg()"></div>
        </div>

    </div>
</template>
 
 
<script>



export default {

    data() {

        return {
            isBurger: false,
            isCont: false,

        }

    },
    methods: {
        ifBurg() {
            if (this.isBurger) {
                this.isBurger = false;
            }
        },
        ifCont() {
            if (this.isCont) {
                this.isCont = false;
            }
        }
    }

}

</script>
 
 
<style>
@keyframes moveFromRight {
    from {
        transform: translateX(-200px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }

}

@keyframes moveFromLeft {
    from {
        transform: translateX(2000px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }

}

.header__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;
    box-shadow: 0px 2px rgba(0, 0, 0, 0.25);
    margin-bottom: 64px;
    position: relative;
}

.header__block-logo {
    margin-right: 380px;
    z-index: 50;
}

.header__block-nav {
    margin-right: 70px;
    z-index: 10;
    flex-wrap: wrap;
    display: flex;
}

.nav__list {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.nav__item-link {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #2D2D2D;
    transition: all .3s;
    padding: 2px;
}

.nav__item-link:hover {
    color: #DB6B97;
    text-shadow: 0 0 .65px #DB6B97;
}

.header__interract {
    display: flex;
    gap: 32px;
    z-index: 10;
    flex-wrap: wrap;

}

.header__interract-profile {
    display: flex;
    align-items: center;
    gap: 8px;
}

.header__profile-link {
    font-size: 14px;
    line-height: 171%;
    color: #DB6B97;


}

.header__interract-search {
    display: flex;
    align-items: center;
}

.header__interract-cart {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #DB6B97;
}

.header__interract-favourite {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #DB6B97;
}

.active {
    color: #DB6B97;
}

.header__interract-burger {
    min-width: 75px;
    height: 75px;

    display: none;
    z-index: 50;
    cursor: pointer;
}

.header__interract-burger:nth-child(2) {
    background-image: url(@/assets/profile.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.header__burger-line{
    content: '';
    width: 60px;
    height: 3px;
    position: relative;
    background-color: #DB6B97;
}
.header__burger-line::after{
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #DB6B97;
    background-color: #DB6B97;
    right: -15px;
    top: -3px;
}
.burgers {
    display: flex;
    gap: 20px;
}

@media (max-width:1439.99px) {
    .header__block-logo {
        margin-right: 100px;
    }
}

@media (max-width:1039.99px) {
    .header__block-logo {
        margin-right: 50px;
    }

    .header__block-nav {
        margin-right: 20px;
    }

}


@media (max-width:980.99px) {
    .header__block-logo {
        margin-right: 100px;
    }

    .header__interract-burger {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        padding: 10px 0;
    }

    .header__block-nav {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70vh;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        animation: moveFromRight .3s ease;
    }

    .nav__list {
        flex-direction: column;
        align-items: center;
    }

    .header__interract {
        display: none;
        position: absolute;
        flex-direction: column;
        top: 0;
        left: 0;
        width: 100%;
        height: 70vh;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        animation: moveFromLeft .3s ease;
    }

}
@media (max-width:399.99px){
    .header__block-logo {
        margin-right: 20px;
    }
}
.showMenu {
    display: flex;
    width: 100vw;
    height: 100vh;

}</style>