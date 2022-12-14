
import React, { useState, useEffect } from 'react';
import './styles.css'
const Reviews = () => {

    // const [reviews, setReviews] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(`https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews`);
    //         const data = await res.json();
    //         setData(data);
    //     }
    //     fetchData();
    // },[])
  return (
    <div className="container">
        <h1 className="review-header">What Our Customers Say</h1>
        <ul className="reviews">
            <li className="review-card">
                <div className="card-profile">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F09%2F02%2F3c%2F09023c839bb72999f23edd1f4cc342e0.jpg&f=1&nofb=1&ipt=84d72ad40df60a98214ca8aada43306ef489d3a20b636ea3b29b2f4ce0d7f72f&ipo=images" alt="reviewer-image"/>
                <span className="review-name">John Doe</span>
                </div>
                <p className="review">Working with Charlie and his team was great every step of the way through our full kitchen remodel, interior painting and hardwood floor refinishing project. Charlie was professional, knowledgeable, responsive, and very diligent. He was respectful of our budget and delivered beautiful work ahead of schedule. I couldn't be happier with the results, and will absolutely reach out to Charlie and team for any future projects. I'd highly recommend!</p>
            </li>
            <li className="review-card">
                <div className="card-profile">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgarybarragan.com%2Fwp-content%2Fuploads%2FActors%2FMegan-Marty-0096-Louisville-Headshots-Portrait-Photographer-Gary-Barragan.jpg&f=1&nofb=1&ipt=46d81e9244e5eaacc4f073fa94f57e9b818f9317964e48b10e38214d9f3f3d83&ipo=images" alt="reviewer-image"/>
                    <span className="review-name">Jane Doe</span>
                    <p className="review">Wanted to install a new door to access a bathroom from the hallway.  Contacted Charlie Brown from Charlotte Remodeling Company and he was able to come out the next day to look over the job request.  He provided a very detailed estimate that  was very reasonable and I appreciated the detailed line items so I could easily compare the costs.    Charlie was very professional and did an excellent job of explaining  the process to me.  It took 3 days to complete the job and we were very thrilled with the end result.  Looks as if it was part of the original house build.  The crew working the job was very  polite and professional and extremely thorough.  Excellent craftsmanship.  I would highly recommend Charlie Brown and Charlotte Remodeling Company.</p>
                </div>
            </li>
            <li className="review-card">
                <div className="card-profile">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzenstudiosla.com%2Fwp-content%2Fuploads%2F2019%2F11%2FMike-professionla-headshot.jpg&f=1&nofb=1&ipt=e9b50ed5283a63292cbc63c153154a3966f448245bd6f6efa9cd0664af1a300c&ipo=images" alt="reviewer-image"/>
                    <span className="review-name">John Doe</span>
                    <p className="review">Charlie, Omar and team did a great job with my remodeling work. They installed wainscoting, painted and added a cabinet to my built in shelves. The work was beautiful and done in a timely manner. If there were any issues throughout the process they were quick to fix things. I would definitely recommend Charlotte Remodeling Company.</p>
                </div>
            </li>
        </ul>
        <button href="#">LEAVE A REVIEW</button>
    </div>
  );
};

export default Reviews;
