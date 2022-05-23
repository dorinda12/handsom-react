import React from 'react';
import './Testimonial.scss';
/* import {
    Testimonial as WraperTestimonial,
    TestimonialFigure,
    TestimonialImage1,
    TestimonialContet,
    TestimonialText,
    TestimonialQuotation
} from './TestimonialStyle'; */

import TestimonialImg from '../../assets/images/testimonial.jpg';


const Testimonial = () => {
    return (
        <div className="Testimonial">
            <figure className="Testimonial-Figure">
                <img src={TestimonialImg} alt="Testimonialka" className="Testimonial-Img" />
            </figure>
            <div className="Testimonial-Content">
                <p className="Testimonial-Text">
                    <span className="Testimonial-Quotation">"</span>
                    At the academy, I learned how to apply technology in practice. 
                    Frontend education was demanding, it required a lot of time. 
                    Upon completion, I got my first job as a developer.
                    <span className="Testimonial-Quotation">"</span>
                </p>
            </div>
        </div>
    );
}

 /* const Testimonial = () => {
    return (
        <WraperTestimonial>
            <TestimonialFigure>
                <TestimonialImage1 src={TestimonialImg} alt="Testimonialka"/> 
            </TestimonialFigure>
            <TestimonialContet>
                <TestimonialText>
                    <TestimonialQuotation>
                    At the academy, I learned how to apply technology in practice. 
                    Frontend education was demanding, it required a lot of time. 
                    Upon completion, I got my first job as a developer.
                    </TestimonialQuotation>
                </TestimonialText>
            </TestimonialContet>
        </WraperTestimonial>
    );
};  */
export default Testimonial;