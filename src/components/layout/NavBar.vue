 <template>
    <transition >
        <nav  ref="navBar" :class='compFixedNav' class="w-screen overflow-hidden h-20  transition duration-300 relative flex justify-between xl:grid grid-cols-8 px-8 xl:px-16  items-center">
        
            <div class="logo absolute xl:static top-2 xl:top-5 left-3 xl:left-5 h w-20 col-span-2 ">
                <router-link to="/home">
                    <img src="../../../public/assets/cropped-Logo-2-1.png"  alt="logo" />
                </router-link>
            </div>

            <div class="nav-links col-span-4 hidden xl:block">
                <ul class="flex justify-between pl-8 pr-20 ">
                    <li><router-link to='/' class="active">Home</router-link></li>
                    <li><router-link to="about-us">About Us</router-link></li>
                    <li><router-link to="/shop" >Shop</router-link></li>
                    <li><router-link to="blog">Blog</router-link></li>
                    <li><router-link to="/contact-us">Contact Us</router-link></li>
                </ul>
            </div>

            <div class="icons col-span-2 justify-center hidden xl:flex">
                <div class="contacts border-r border-gray-500 mr-4 flex items-center ">
                    <a class="mr-6" href="#">
                        <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.70833 1H7.33333C6.28352 1 5.2767 1.39509 4.53437 2.09835C3.79204 2.80161 3.375 3.75544 3.375 4.75V7H1V10H3.375V16H6.54167V10H8.91667L9.70833 7H6.54167V4.75C6.54167 4.55109 6.62507 4.36032 6.77354 4.21967C6.92201 4.07902 7.12337 4 7.33333 4H9.70833V1Z"
                                stroke="#F04C39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a class="mr-6" href="#">
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.7085 1.75C16.9903 2.25661 16.1951 2.64409 15.3535 2.8975C14.9018 2.37814 14.3015 2.01002 13.6338 1.84295C12.966 1.67587 12.2631 1.7179 11.6201 1.96334C10.977 2.20879 10.4248 2.6458 10.0382 3.21529C9.65164 3.78478 9.44927 4.45926 9.4585 5.1475V5.8975C8.14047 5.93168 6.83445 5.63936 5.65675 5.04659C4.47905 4.45381 3.46623 3.57898 2.7085 2.5C2.7085 2.5 -0.291504 9.25 6.4585 12.25C4.91389 13.2985 3.07386 13.8242 1.2085 13.75C7.9585 17.5 16.2085 13.75 16.2085 5.125C16.2078 4.91609 16.1877 4.7077 16.1485 4.5025C16.9139 3.74762 17.4541 2.79454 17.7085 1.75V1.75Z"
                                stroke="#F04C39" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a class="mr-6" href="#">
                        <svg height="16" fill="#F04C39" viewBox="0 0 511 511.9" width="19" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
                            <path
                                d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
                            <path
                                d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
                        </svg>
                    </a>
                </div>
                <div class="cart">
        
                    <a href="#">
                        <svg fill="#F04C39" height="16" viewBox="0 -31 512.00026 512" width="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0" />
                            <path
                                d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
                            <path
                                d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class=" absolute right-5 top-5 flex items-center xl:hidden">
                <div class="searchContainer mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div @click="toggleNav" class="hamContainer z-20 relative">
                    <div class="hamburger  xl:hidden  show">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15" height="15"
                            viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                            <g>
                                <g id="_x33__6_">
                                    <g>
                                        <path
                                            d="M581.4,520.199H30.6c-16.891,0-30.6,13.709-30.6,30.6C0,567.691,13.709,581.4,30.6,581.4h550.8
                                                                                            c16.891,0,30.6-13.709,30.6-30.602C612,533.908,598.291,520.199,581.4,520.199z M30.6,91.799h550.8
                                                                                            c16.891,0,30.6-13.708,30.6-30.6c0-16.892-13.709-30.6-30.6-30.6H30.6C13.709,30.6,0,44.308,0,61.2
                                                                                            C0,78.091,13.709,91.799,30.6,91.799z M581.4,275.399H30.6C13.709,275.399,0,289.108,0,306s13.709,30.6,30.6,30.6h550.8
                                                                                            c16.891,0,30.6-13.709,30.6-30.6S598.291,275.399,581.4,275.399z" />
                                    </g>
                                </g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                            <g>
                            </g>
                        </svg>
                    </div>
                </div>
        
            </div>

            <transition name="full-nav">
                <div v-if="visibleFullNav" class="responsiveNav shadow   absolute  right-0 top-20 mb-5 left-0 ">
                    <div class="nav-links col-span-4  xl:hidden">
                        <ul class="flex flex-col items-start pl-4   ">
                            <li class="mb-2"><router-link to='/home' class="text-sm">Home</router-link></li>
                            <li class="mb-2"><router-link to=/about-us class="text-sm">About Us</router-link></li>
                            <li class="mb-2"><router-link to='/shop' class="text-sm" >Shop</router-link></li>
                            <li class="mb-2"><router-link to='/blog' class="text-sm">Blog</router-link></li>
                            <li class="mb-2"><router-link to='/contact-us' class="text-sm">Contact Us</router-link></li>
                        </ul>
                    </div>
                </div>
            </transition>
        </nav>
    </transition>
</template>

<script>
export default {
    data(){
        return{
            fixedNav: false,
            visibleFullNav: false
        }
    },
    methods:{
        toggleNav(){
            this.$refs.navBar.classList.toggle('h-60');
            this.visibleFullNav = true;
        },
        checkDocumentObject(){
            const docScrollTop = document.documentElement.scrollTop;
            if(docScrollTop > 100){
                this.fixedNav = true;
            }
            else{
                this.fixedNav = false;
            }
        }
    },
    computed:{
        compFixedNav(){
            return { fixed: this.fixedNav }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.checkDocumentObject);
    }
}
</script>

<style scoped>
    img {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }

    nav .nav-links a {
        color: #999999;
    }

    nav .nav-links a:hover {
        color: #f04c39;
    }

    nav .nav-links a.router-link-active::before {
        width: 100%;
    }

    nav .nav-links a.router-link-active {
        color: #f04c39;
        font-weight: bold;
    }

    nav .nav-links a::before {
        background: #f04c39;
    }
    
    /* .resp-nav-enter-active{
        animation: fadeIn 5s ease-in forwards;
    } */

    .full-nav-enter-from{
        opacity: 0;
    }

    .full-nav-enter-active{
        animation: navGrow 5s linear forwards;
    }

    .full-nav-enter-to{
        opacity: 1;
    }

    .nav{
        background: blanchedalmond;
        transition: all .3s linear forwards;
    }

    nav.fixed{
        background: #ffffff;
        z-index: 131;
        position: fixed;
        border-bottom: 1px solid rgb(192, 189, 189);
        animation: fixHeader .5s ease;
    }

    @keyframes fixHeader{
        0%{
            transform: translateY(-100%);
            opacity: 0;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes navGrow {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

</style>