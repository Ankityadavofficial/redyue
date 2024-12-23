import React from 'react'
import HeroForm from '../../Components/form';

export default function Home() {
    return (
        <>
            {/* First section start */}
            <div
                className="text-center relative "
                style={{
                    backgroundImage: "url('images/45.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                    height: "470px",
                }}
            >
                <h1 className='text-white text-3xl font-bold mx-[84px] pt-[136px]'>Private Transfer & Taxi services
                    <br />in Geneva</h1>
                <h1 className='text-white text-2xl mx-[84px] pt-[20px]'>Book airport transfers, city transfers and hourly
                    <br /> disposal services with driver</h1>
                <div className='absolute top-[50px] right-20 w-fit'>
                    <HeroForm />
                </div>
                <div className='w-[320px] h-[134px] flex gap-7 mt-40 mx-20 items-center'>
                    <img src="images\33.jpg" className=' scale-100 hover:scale-110 transition-all ease-in-out duration-200 rounded-2xl cursor-pointer' alt="" />
                    <img src="images\6.jpg" className='rounded-2xl cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200' alt="" />
                </div>
            </div>
            {/* First section end */}




            {/* Second Section start */}
            <div className=' container mx-auto flex justify-around bg-[#EFEFEF] mt-56 mb-24 w-full py-8 px-24'>
                <div className="flex justify-center items-center flex-col gap-2 ">
                    <img src="images\42.png" alt="" />
                    <p className="leading-relaxed text-[#484848] ">Book & pay later</p>
                </div>
                <div className='border border-[#d5d2d2]'></div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.62069 16.1553C9.62069 12.8744 12.281 10.2144 15.5616 10.2144C18.1331 10.2144 20.3499 11.8993 21.1478 14.2045L28.3746 6.97768L24.9164 3.5195C24.5175 3.12055 23.8523 3.12055 23.4534 3.5195L21.7685 5.20433C20.8819 4.71662 19.9507 4.3177 18.931 4.05168L18.9313 1.6574C18.9313 1.03671 18.4436 0.593262 17.8672 0.593262H13.2564C12.6358 0.593262 12.1923 1.03675 12.1923 1.6574V4.05137C11.1727 4.31733 10.2415 4.71628 9.35483 5.20402L7.66999 3.51918C7.27105 3.12023 6.60586 3.12023 6.20692 3.51918L2.97049 6.75561C2.57154 7.15456 2.57154 7.81974 2.97049 8.21869L4.65533 9.90352C4.16762 10.7902 3.76869 11.7214 3.50268 12.741L1.06414 12.7413C0.443452 12.7413 0 13.229 0 13.8055V18.372C0 18.9927 0.443484 19.4362 1.06414 19.4362H3.4581C3.72407 20.4558 4.12301 21.387 4.61075 22.2736L2.92592 23.9585C2.48243 24.3574 2.52697 25.0226 2.92592 25.4216L6.3841 28.8797L13.6109 21.653C11.2611 20.9432 9.62084 18.7264 9.62084 16.1552L9.62069 16.1553Z" fill="#377C96" />
                        <path d="M13.4214 27.9652L29.2215 12.165L36.0244 18.9679L20.2242 34.768L13.4214 27.9652Z" fill="#377C96" />
                        <path d="M41.6758 11.3231L36.9321 6.53488C36.3556 5.95842 35.469 5.95842 34.8925 6.53488L31.7891 9.6383L38.6166 16.4658L41.72 13.3624C42.2523 12.7863 42.2523 11.8554 41.6758 11.3231H41.6758Z" fill="#377C96" />
                        <path d="M9.13308 32.2934C8.95587 32.4706 8.82258 32.7369 8.73413 33.0028L7.31523 39.1652C7.09349 40.1848 8.02467 41.116 9.04432 40.8943L15.207 39.4754C15.4729 39.4311 15.6947 39.2981 15.9164 39.0764L17.6897 37.3031L10.9066 30.5198L9.13308 32.2934Z" fill="#377C96" />
                    </svg>

                    <p className="leading-relaxed text-[#484848]">Flexible trip amendments</p>
                </div>
                <div className='border border-[#d5d2d2]'></div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.89994 18.0063C8.14796 18.0063 6.74609 19.4082 6.74609 21.1602C6.74609 22.9122 8.14796 24.314 9.89994 24.314C11.6519 24.314 13.0538 22.9122 13.0538 21.1602C13.0538 19.4082 11.6522 18.0063 9.89994 18.0063ZM9.89994 22.4307C9.19902 22.4307 8.6298 21.8611 8.6298 21.1605C8.6298 20.4596 9.19934 19.8904 9.89994 19.8904C10.6009 19.8904 11.1701 20.4599 11.1701 21.1605C11.1704 21.8611 10.6009 22.4307 9.89994 22.4307Z" fill="#377C96" />
                        <path d="M19.1416 18.0063C17.3897 18.0063 15.9878 19.4082 15.9878 21.1602C15.9878 22.9122 17.3897 24.314 19.1416 24.314C20.8936 24.314 22.2955 22.9122 22.2955 21.1602C22.2955 19.4082 20.8939 18.0063 19.1416 18.0063ZM19.1416 22.4307C18.4407 22.4307 17.8715 21.8611 17.8715 21.1605C17.8715 20.4596 18.441 19.8904 19.1416 19.8904C19.8426 19.8904 20.4118 20.4599 20.4118 21.1605C20.4121 21.8611 19.8425 22.4307 19.1416 22.4307Z" fill="#377C96" />
                        <path d="M28.3843 24.314C30.1363 24.314 31.5382 22.9122 31.5382 21.1602C31.5382 19.4082 30.1363 18.0063 28.3843 18.0063C26.6323 18.0063 25.2305 19.4082 25.2305 21.1602C25.2305 22.9125 26.6323 24.314 28.3843 24.314ZM28.3843 19.89C29.0852 19.89 29.6545 20.4595 29.6545 21.1601C29.6545 21.861 29.0849 22.4303 28.3843 22.4303C27.6834 22.4303 27.1142 21.8607 27.1142 21.1601C27.1142 20.4592 27.6834 19.89 28.3843 19.89Z" fill="#377C96" />
                        <path d="M9.89994 27.6436C8.14796 27.6436 6.74609 29.0454 6.74609 30.7974C6.74609 32.5494 8.14796 33.9513 9.89994 33.9513C11.6519 33.9513 13.0538 32.5494 13.0538 30.7974C13.0538 29.0454 11.6522 27.6436 9.89994 27.6436ZM9.89994 32.0679C9.19902 32.0679 8.6298 31.4983 8.6298 30.7977C8.6298 30.0968 9.19934 29.5276 9.89994 29.5276C10.6009 29.5276 11.1701 30.0971 11.1701 30.7977C11.1704 31.4983 10.6009 32.0679 9.89994 32.0679Z" fill="#377C96" />
                        <path d="M19.1416 27.6436C17.3897 27.6436 15.9878 29.0454 15.9878 30.7974C15.9878 32.5494 17.3897 33.9513 19.1416 33.9513C20.8936 33.9513 22.2955 32.5494 22.2955 30.7974C22.2955 29.0454 20.8939 27.6436 19.1416 27.6436ZM19.1416 32.0679C18.4407 32.0679 17.8715 31.4983 17.8715 30.7977C17.8715 30.0968 18.441 29.5276 19.1416 29.5276C19.8426 29.5276 20.4118 30.0971 20.4118 30.7977C20.4121 31.4983 19.8425 32.0679 19.1416 32.0679Z" fill="#377C96" />
                        <path d="M38.2843 27.731V8.45747C38.2843 6.17961 36.4445 4.33987 34.1667 4.33987H31.4509V3.50752C31.4509 1.97425 30.1808 0.704102 28.6475 0.704102H28.0343C26.501 0.704102 25.2308 1.97425 25.2308 3.50752V4.33987H13.0097V3.50752C13.0097 1.97425 11.7395 0.704102 10.2063 0.704102H9.59303C8.05976 0.704102 6.78961 1.97425 6.78961 3.50752V4.33987H4.1176C1.83974 4.29617 0 6.17961 0 8.41343V35.3088C0 37.5866 1.83974 39.4264 4.1176 39.4264H26.545C28.0782 41.1783 30.3121 42.3175 32.8087 42.3175C37.4081 42.3175 41.1752 38.5504 41.1752 33.951C41.1752 31.4544 40.0364 29.2642 38.2841 27.7309L38.2843 27.731ZM27.202 3.50768C27.202 3.02583 27.5961 2.63169 28.078 2.63169H28.6912C29.1731 2.63169 29.5672 3.02585 29.5672 3.50768L29.5675 7.05568C29.5675 7.53753 29.1733 7.93167 28.6915 7.93167H28.0783C27.5964 7.93167 27.2023 7.53751 27.2023 7.05568L27.202 3.50768ZM8.71693 3.50768C8.71693 3.02583 9.11109 2.63169 9.59292 2.63169H10.2062C10.688 2.63169 11.0821 3.02585 11.0821 3.50768L11.0825 7.05568C11.0825 7.53753 10.6883 7.93167 10.2065 7.93167H9.59323C9.11137 7.93167 8.71724 7.53751 8.71724 7.05568L8.71693 3.50768ZM4.11781 6.22341H6.78982V7.05576C6.78982 8.58904 8.05996 9.85918 9.59324 9.85918H10.2065C11.7397 9.85918 13.0099 8.58904 13.0099 7.05576V6.22341H25.3187V7.05576C25.3187 8.58904 26.5888 9.85918 28.1221 9.85918H28.7353C30.2686 9.85918 31.5387 8.58904 31.5387 7.05576V6.22341H34.1671C35.3936 6.22341 36.401 7.23082 36.401 8.45731V12.5309L1.92768 12.5312V8.45762C1.92768 7.23112 2.89136 6.22349 4.11785 6.22349L4.11781 6.22341ZM4.11781 37.5429C2.89131 37.5429 1.88391 36.5355 1.88391 35.309L1.8836 14.4147H36.3569V26.4607C35.2618 25.9351 34.0791 25.6283 32.7649 25.6283C28.1654 25.6283 24.3984 29.3954 24.3984 33.9948C24.3984 35.2649 24.7052 36.4918 25.2308 37.5868L4.11828 37.5865L4.11781 37.5429ZM32.8091 40.434C29.2611 40.434 26.37 37.5429 26.37 33.9949C26.37 30.4469 29.2611 27.5558 32.8091 27.5558C36.3571 27.5558 39.2482 30.4469 39.2482 33.9949C39.2482 37.5429 36.3574 40.434 32.8091 40.434Z" fill="#377C96" />
                        <path d="M35.5688 31.1911C35.2183 30.8406 34.6051 30.8406 34.2109 31.1911L32.7654 32.6366L31.3199 31.1911C30.9694 30.8406 30.3562 30.8406 29.9621 31.1911C29.6116 31.5415 29.6116 32.1547 29.9621 32.5489L31.4076 33.9944L29.9621 35.4399C29.6116 35.7904 29.6116 36.4036 29.9621 36.7978C30.1371 36.9728 30.4002 37.0605 30.619 37.0605C30.8381 37.0605 31.1008 36.9728 31.2759 36.7978L32.7214 35.3522L34.1669 36.7978C34.342 36.9728 34.6051 37.0605 34.8239 37.0605C35.0866 37.0605 35.3057 36.9728 35.4808 36.7978C35.8313 36.4473 35.8313 35.8341 35.4808 35.4399L34.1672 33.9504L35.6128 32.5049C35.9629 32.1544 35.9629 31.5851 35.5688 31.191L35.5688 31.1911Z" fill="#377C96" />
                        <rect x="0.958496" y="13.3657" width="36.4343" height="24.4989" fill="#377C96" />
                        <ellipse cx="32.3675" cy="34.0958" rx="10.679" ry="10.0508" fill="white" />
                        <ellipse cx="32.0529" cy="34.0958" rx="9.10857" ry="9.42266" fill="#377C96" />
                        <g clip-path="url(#clip0_799_334)">
                            <path d="M33.288 34.0881L37.2016 37.5126C37.4563 37.7354 37.4563 38.0955 37.2016 38.3183C36.9471 38.541 36.5355 38.541 36.2809 38.3183L32.3672 34.8938L28.4536 38.3183C28.1989 38.541 27.7874 38.541 27.5328 38.3183C27.2781 38.0955 27.2781 37.7354 27.5328 37.5126L31.4464 34.0881L27.5328 30.6636C27.2781 30.4409 27.2781 30.0807 27.5328 29.858C27.6597 29.7468 27.8265 29.691 27.9932 29.691C28.1599 29.691 28.3266 29.7468 28.4536 29.858L32.3672 33.2825L36.2809 29.858C36.4079 29.7468 36.5746 29.691 36.7413 29.691C36.908 29.691 37.0747 29.7468 37.2016 29.858C37.4563 30.0807 37.4563 30.4409 37.2016 30.6636L33.288 34.0881Z" fill="white" />
                        </g>
                        <path d="M14.1504 19.6475C14.1504 21.0352 13.0254 22.1602 11.6377 22.1602C10.25 22.1602 9.125 21.0352 9.125 19.6475C9.125 18.2597 10.25 17.1348 11.6377 17.1348C13.0254 17.1348 14.1504 18.2597 14.1504 19.6475ZM10.4053 19.6475C10.4053 20.3281 10.957 20.8799 11.6377 20.8799C12.3184 20.8799 12.8702 20.3281 12.8702 19.6475C12.8702 18.9668 12.3184 18.415 11.6377 18.415C10.957 18.415 10.4053 18.9668 10.4053 19.6475Z" fill="white" />
                        <path d="M26.7139 19.6475C26.7139 21.0352 25.5889 22.1602 24.2012 22.1602C22.8135 22.1602 21.6885 21.0352 21.6885 19.6475C21.6885 18.2597 22.8135 17.1348 24.2012 17.1348C25.5889 17.1348 26.7139 18.2597 26.7139 19.6475ZM22.9687 19.6475C22.9687 20.3281 23.5205 20.8799 24.2012 20.8799C24.8818 20.8799 25.4336 20.3281 25.4336 19.6475C25.4336 18.9668 24.8818 18.415 24.2012 18.415C23.5205 18.415 22.9687 18.9668 22.9687 19.6475Z" fill="white" />
                        <path d="M14.1504 30.3267C14.1504 31.7144 13.0254 32.8394 11.6377 32.8394C10.25 32.8394 9.125 31.7144 9.125 30.3267C9.125 28.9389 10.25 27.814 11.6377 27.814C13.0254 27.814 14.1504 28.9389 14.1504 30.3267ZM10.4065 30.3267C10.4065 31.0067 10.9577 31.5579 11.6377 31.5579C12.3177 31.5579 12.8689 31.0067 12.8689 30.3267C12.8689 29.6467 12.3177 29.0954 11.6377 29.0954C10.9577 29.0954 10.4065 29.6467 10.4065 30.3267Z" fill="white" />
                        <rect x="7.86816" y="1.43042" width="4.39724" height="6.90995" fill="#377C96" />
                        <rect x="26.7134" y="1.43042" width="3.76906" height="6.90995" fill="#377C96" />
                        <defs>
                            <clipPath id="clip0_799_334">
                                <rect width="10.0508" height="8.79448" fill="white" transform="matrix(1 0 0 -1 27.3418 38.4929)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p className="leading-relaxed text-[#484848]">Free cancellation</p>
                </div>
                <div className='border border-[#d5d2d2]'></div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.917 29.8278L28.8209 28.5701C27.9984 28.0785 27.0479 27.8431 26.0909 27.8943C25.1341 27.9455 24.2138 28.2806 23.4483 28.8569L21.6721 30.1918C21.1016 30.6217 20.4156 30.8714 19.7021 30.9088C18.9883 30.946 18.28 30.7693 17.6677 30.4012C14.4309 28.4659 11.7158 25.7696 9.75806 22.5462C9.3899 21.9339 9.21328 21.2253 9.25071 20.5118C9.28785 19.7983 9.53757 19.1123 9.96772 18.5418L11.3026 16.7546C11.8798 15.989 12.215 15.0682 12.2641 14.1105C12.3132 13.1528 12.0743 12.2025 11.5784 11.382L10.3207 9.28591C9.65454 8.09258 8.46498 7.28313 7.11048 7.10152C5.68261 6.95589 4.26814 7.48195 3.28239 8.52474L2.43289 9.37425C0.584763 11.2285 -0.285177 13.8427 0.0829809 16.4347C0.952322 22.398 3.72242 27.9218 7.98139 32.1843C12.2407 36.4475 17.7618 39.2228 23.7243 40.0977C24.0898 40.1518 24.4583 40.1814 24.8276 40.186C27.0398 40.1849 29.1616 39.3082 30.7298 37.7479L31.7226 36.7551C32.6919 35.7925 33.1607 34.4353 32.9923 33.0799C32.8241 31.7243 32.0375 30.523 30.862 29.8271L30.917 29.8278Z" fill="#377C96" />
                        <path d="M27.5525 0.482981C23.2788 0.493216 19.3254 2.75069 17.1448 6.42644C14.9642 10.1022 14.8783 14.6542 16.9179 18.4099L15.4727 23.319C15.3675 23.6536 15.4277 24.0179 15.6344 24.301C15.8412 24.584 16.1701 24.7519 16.5208 24.7534C16.6231 24.7694 16.7272 24.7694 16.8296 24.7534L21.7387 23.3082L21.739 23.3079C25.0281 25.075 28.9477 25.2294 32.366 23.7269C35.7841 22.2242 38.3199 19.2316 39.2417 15.6129C40.1634 11.9945 39.368 8.15358 37.0854 5.19851C34.8025 2.24388 31.2867 0.5043 27.5528 0.482666L27.5525 0.482981ZM27.5525 17.0306H23.1399C22.7457 17.0306 22.3817 16.8204 22.1845 16.4791C21.9875 16.1379 21.9875 15.7171 22.1845 15.3759C22.3816 15.0346 22.7457 14.8244 23.1399 14.8244H27.5528H27.5525C27.9467 14.8244 28.311 15.0346 28.5081 15.3759C28.7053 15.7171 28.7052 16.1379 28.5081 16.4791C28.3111 16.8203 27.9467 17.0306 27.5525 17.0306H27.5525ZM31.9654 13.721H23.1402C22.746 13.721 22.382 13.5108 22.1848 13.1695C21.9878 12.8283 21.9878 12.4078 22.1848 12.0663C22.3819 11.725 22.746 11.5147 23.1402 11.5147H31.9654C32.3596 11.5147 32.7236 11.725 32.9207 12.0663C33.1178 12.4078 33.1178 12.8283 32.9207 13.1695C32.7236 13.5108 32.3596 13.721 31.9654 13.721ZM31.9654 10.4114H23.1402C22.746 10.4114 22.382 10.2012 22.1848 9.85992C21.9878 9.51867 21.9878 9.09815 22.1848 8.75665C22.3819 8.41539 22.746 8.20514 23.1402 8.20514H31.9654C32.3596 8.20514 32.7236 8.41539 32.9207 8.75665C33.1178 9.09819 33.1178 9.51871 32.9207 9.85992C32.7236 10.2012 32.3596 10.4114 31.9654 10.4114Z" fill="#377C96" />
                    </svg>

                    <p className="leading-relaxed text-[#484848]">24/7 in-person support</p>
                </div>
            </div>
            {/* Second Section end */}




            {/* Third Section start */}
            <section className='container mx-auto grid text-sm grid-cols-4' >
                <div className='col-span-1 text-[#898989]'>
                    <div className='space-x-10 mb-16 text-center'>
                        <span className='cursor-pointer hover:text-black' >Home</span>
                        <span className='cursor-pointer hover:text-black' >Cities</span>
                        <span className='cursor-pointer text-black'   > Rome</span>
                    </div>
                    <div className='text flex gap-6 flex-col ml-24'>
                        <h1 className=' text-2xl font-semibold flex gap-2 items-center text-[#FF8924] '>
                            <div className='w-3 h-3 border-2 border-[#FF8924]  rounded-full'></div>
                            At a Glance</h1>
                        <ol className='list-disc space-y-6 ml-5'>
                            <li className='cursor-pointer hover:text-black' ><a href="">

                                Transportation in Rome
                            </a>
                            </li>
                            <li className='cursor-pointer hover:text-black' ><a href="">

                                Airport Transfers in Rome
                            </a>
                            </li>
                            <li className='cursor-pointer hover:text-black' ><a href="">

                                Sightseeing Transportation
                            </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className=' col-span-3 text-[#484848] leading-7 space-y-6 tracking-[1px] px-28 lato-regular text-base font-normal text-pretty'>
                    <span>Nestled in the heart of Italian Peninsula, Rome is the capital of the country and one of the most populated cities in Italy. From its rich architecture to rare artefacts, this city is known to possess a history like none other. The picturesque atmosphere, the cold wind blowing and the serene atmosphere is what makes Rome a must visit place for all the travel fanatics out there.
                    </span>
                    <div className='flex '>
                        <div className=' mr-10' >
                            <span>A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore. <br />
                                A perfect blend of gothic ruins, jaw dropping art and lively nights, Rome sets an exemplary example for a place about how it should entertain its travellers. The city wholeheartedly welcomes travellers from a wide array of interests, from awe
                            </span>
                        </div>
                        <div className='w-[200%]'>
                            <img src="images\49.jpg" width={350} className='h-[250px]' alt="" />
                            <div><span className=' border-r-2 border-[#737373] pr-3 text-[12px]' >Rome Civitavecchia</span> <span className='pl-3 text-[10px]' ><i>Image by  <a href="#" className='text-blue-500 underline' > Alejandro Picasso </a></i></span></div>
                        </div>
                    </div>
                    <span>inspiring monuments to living life at its best, Rome will never fail to surprise you with a new place to explore.
                    </span>
                    <div>The Roman Empire has been an icon when it comes to historical importance. The Roman Empire had cut the ribbons when Augustus Caesar announced to be the first emperor of Rome in 31BC and ended with the fall of Constantinople in 1453CE. Known to be the centre of the Roman Empire, Rome attracts the majority of the crowd due to its rich history and politics.
                    </div>
                    <div className='flex '>
                        <div className='w-[350%]'>
                            <img src="images\47.jpg" width={350} className=' h-[250px] ' alt="" />
                            <div><span className=' text-[10px]' ><i>Image by  <a href="#" className='text-blue-500 underline' > VIA DEI MONTI PARIOLI </a></i></span></div>
                        </div>
                        <div className=' ml-10' >
                            <div>Referred to as ‘An Eternal City’ in the beginning of the history, Rome is seen to be a dream for music lovers due to the Parco Della Musica which is known to be one of the largest music venues in the world. Not only music, Rome has also set itself in the most wanted places to visit in the world and is the third most visited places in the entire Europe. This place has experienced arts from different periods and became a home for some of the most renowned artists such as Borromini, Bernini, Carracci and Cortona.
                            </div>
                        </div>
                    </div>
                    <div>
                        Embracing the ancient art, Rome has now decided to use its innovation to give birth to contemporary art to keep enhancing their love for art and architecture, National Museum of the 21st Century Arts is a live example of that. The Italian cuisine has somehow managed to be a king of all cuisines, from the Carciofi alla romana to the Spaghetti alla carbonara- Delicious spaghetti topped with bacon, smokey eggs and pecorino is what makes it mouth watering.
                        <br />
                        <br />
                        Rome has a series of reasons to attract you and slip you into its warm arms to rejuvenate your soul with its authentic art, awe-inspiring architecture and mouth-watering food.
                    </div>
                </div>
            </section>
            {/* Third Section start */}



            {/* Fourth Section start */}
            <div className='my-24 px-32'> <p className='lato-regular mb-5 flex text-[#484848] font-bold text-[28px] '>Other cities</p>
                <div className='grid grid-cols-4 gap-12 '>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200 h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/50.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/51.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/50.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/51.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/50.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/51.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/50.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Napples</p>
                    </div>
                    <div
                        className="bg-cover cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out duration-200  h-[152px] bg-center rounded-md flex items-center justify-center "
                        style={{ backgroundImage: "url(/images/51.jpg)" }}
                    >
                        <p className='text-[24px] text-white font-semibold' >Florence</p>
                    </div>
                </div>
            </div>
            {/* Fourth Section end */}

        </>
    )
}
