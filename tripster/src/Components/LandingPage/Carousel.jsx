import React, { useContext, useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Context } from '../../Context/ContextProvider';
import '../../CSS/Carousel.css';

const CarouselData = [
    {
        "first":
        {
            "id": 1,
            "title": "DOM FLIGHTS",
            "subTitle": "FLAT 12% OFF* on Domestic Flights",
            "offer": "Limited Period Offer",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/Flash_Sale_Flights.jpg",
            "image": "https://promos.makemytrip.com/images/1600x400-FlashSale-01112021.jpg"
        },
        "second":
        {
            "id": 2,
            "title": "DOM HOTELS",
            "subTitle": "ARRIVED: The Great Escape Sale on Homestays!",
            "offer": "Grab FLAT 25% OFF* on 3000+ properties & stay the way you like",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/116X116-NFT-14032022.jpg",
            "image": "https://promos.makemytrip.com/images/intl-cmpn-tb-dt-new.png"
        }
    },
    {
        "first":
        {
            "id": 3,
            "title": "DOM FLIGHTS",
            "subTitle": "Introducing Price Lock on Domestic Flights",
            "offer": "Look domestic flight fares @ JUST Rs. 99 & book later",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/116X116-MalaysiaAirline-23032022.jpg",
            "image": "https://promos.makemytrip.com/images/trip-guarantee-cabs-tb-dt-04082021.jpg"
        },
        "second":
        {
            "id": 4,
            "title": "CABS",
            "subTitle": "Introducing Double Guarantee on Outstation Cabs!",
            "offer": "Get confirmed cab arrival else 2X money back!",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/BannerAndmanGoa-1Mar_Desktop-116x116.jpg",
            "image": "https://promos.makemytrip.com/images/1600x400-MalaysiaAirline-23032022.jpg"
        }
    },
    {
        "first":
        {
            "id": 5,
            "title": "INTL HOTELS",
            "subTitle": "NEW: Thailand is Now Open for Travellers",
            "offer": "Plan a trip & get up to 20% OFF* on your stay",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/desktop-Thailand-02032022.jpg",
            "image": "https://promos.makemytrip.com/images/1600x400-FlashSale-01112021.jpg"
        },
        "second":
        {
            "id": 6,
            "title": "DOM HOTELS",
            "subTitle": "WOW Inclusions at Neemrana's Heritage Properties!",
            "offer": "Avail on bookings made with us till 31st March 2022.",
            "thumbnail_image": "https://promos.makemytrip.com/store/116x116-Himachal-18092020.jpg",
            "image": 'https://promos.makemytrip.com/images/neemrana-tb-dt-11012022.webp'
        }
    },
    {
        "first":
        {
            "id": 7,
            "title": "ACTIVITIES",
            "subTitle": "For Your EPIC Beach Vacay in Andamans",
            "offer": "Get up to 30% OFF*",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/BannerAndmanGoa-1Mar_Desktop-116x116.jpg",
            "image": "https://promos.makemytrip.com/images/intl-cmpn-tb-dt-new.png"
        },
        "second":
        {
            "id": 8,
            "title": "DOM FLIGHTS",
            "subTitle": "Bookings for Malaysian Airlines are Now Open",
            "offer": "for flights from Delhi, Mumbai & more.",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/Flash_Sale_Flights.jpg",
            "image": "https://promos.makemytrip.com/images/1600x400-MalaysiaAirline-23032022.jpg"
        }
    },
    {
        "first":
        {
            "id": 9,
            "title": "GENERAL",
            "subTitle": "MakeMyTrip NFT: Presenting Virtual Vacations",
            "offer": "A limited-edition NFT collection available",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/116X116-NFT-14032022.jpg",
            "image": "https://promos.makemytrip.com/images/trip-guarantee-cabs-tb-dt-04082021.jpg"
        },
        "second":
        {
            "id": 10,
            "title": "HOLIDAYS",
            "subTitle": "Book Your Kashmir Holidays Now!",
            "offer": "Get up to 25% off an packages",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/desktop-Thailand-02032022.jpg",
            "image": "https://promos.makemytrip.com/images/1600x400-MalaysiaAirline-23032022.jpg"
        }
    },
    {
        "first":
        {
            "id": 11,
            "title": "HOLIDAYS",
            "subTitle": "Soak in the Incredible Views of Himachal!",
            "offer": "Grab packages to Shimla, Manali & more",
            "thumbnail_image": "https://promos.makemytrip.com/store/116x116-Himachal-18092020.jpg",
            "image": "https://promos.makemytrip.com/images/1600x400-FlashSale-01112021.jpg"
        },
        "second":
        {
            "id": 12,
            "title": "DOM FLIGHTS",
            "subTitle": "Australia & Thailand are Now Open for Travel!",
            "offer": "Plan a trip & get upto Rs. 5000 OFF* on flights",
            "thumbnail_image": "https://promos.makemytrip.com/notification/xhdpi/116X116-MalaysiaAirline-23032022.jpg",
            "image": 'https://promos.makemytrip.com/images/neemrana-tb-dt-11012022.webp'
        }
    }
]

const Carousel = () => {
    const [offers, setOffers] = useState(0);
    const { width } = useContext(Context);
    // console.log(width);

    const properties = {
        duration: 20000,
        transitionDuration: 500,
        canSwipe: false,
        autoPlay: false,
        slidesToShow: width < 1024 ? 1 : 2,
        slidesToScroll: width < 1024 ? 1 : 2,
        prevArrow: <div className='left-arrow arrows'>
            <NavigateBefore style={{ color: '#008cff', fontSize: 30 }} />
        </div>,
        nextArrow: <div className='right-arrow arrows'>
            <NavigateNext style={{ color: '#008cff', fontSize: 30 }} />
        </div>
    }

    return (
        // <div>Carousel</div>

        <div className='homeContainer'>
            <div className='sliderContainer' >
                <div className='sliderTitle' >
                    <h2>Offers</h2>
                    <div className='sliderLinks' >
                        <p
                            className="indLinks"
                            style={{ borderBottom: offers === 0 ? "3px solid #008cff" : "" }}
                            onClick={() => setOffers(0)}
                        >ALL OFFERS</p>
                        <p
                            className="indLinks"
                            onClick={() => setOffers(1)}
                            style={{ borderBottom: offers === 1 ? "3px solid #008cff" : "" }}
                        >FLIGHTS</p>
                        <p
                            className="indLinks"
                            onClick={() => setOffers(2)}
                            style={{ borderBottom: offers === 2 ? "3px solid #008cff" : "" }}
                        >HOTELS</p>
                    </div>

                </div>

                <Slide {...properties}>
                    {

                        CarouselData?.map((e) => {
                            return (
                                <div style={{ background: 'white' }} key={e.id}>
                                    <div className="each-slide">
                                        <div className='ind-slide'>
                                            <div className='imageSection'>
                                                <img src={e.first.thumbnail_image} alt="" />
                                                <p>T&C's Apply</p>
                                            </div>
                                            <div className='contentSection'>
                                                <div>
                                                    <p className="offerCardTitle">{e.first.title}</p>
                                                    <p className="offerCardSubTitle">{e.first.subTitle}</p>
                                                    <div className="divider" />
                                                    <p className="offerCardOffers">{e.first.offer}</p>
                                                </div>
                                                <div className='knowMore'>
                                                    <p>KNOW MORE</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='each-slide'>
                                        <div className='ind-slide'>
                                            <div className='imageSection'>
                                                <img src={e.second.thumbnail_image} alt="" />
                                                <p>T&C's Apply</p>
                                            </div>
                                            <div className='contentSection'>
                                                <div>
                                                    <p className="offerCardTitle">{e.second.title}</p>
                                                    <p className="offerCardSubTitle">{e.second.subTitle}</p>
                                                    <div className="divider" />
                                                    <p className="offerCardOffers">{e.second.offer}</p>
                                                </div>
                                                <div className='knowMore'>
                                                    <p>KNOW MORE</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slide>

            </div>
        </div>
    )
}

export default Carousel;