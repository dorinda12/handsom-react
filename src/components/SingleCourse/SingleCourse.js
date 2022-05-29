import React from 'react';
import { useParams } from "react-router-dom";
//import './SingleCourse.scss';
import {
    SingleCourse as SingleCourseWraper,
    Figure,
    Image,
    Text,
}from './SingleCourseStyled';

/* const SingleCourse = ({
    imgSrc,
    imgAlt,
    text
}) => {
    let params = useParams();
    return (
        <div className="SingleCourse">
            <figure className="SingleCourse-Figure">
                <img src={imgSrc} alt={imgAlt} className="SingleCourse-Img"/>
            </figure>
            <h2>{params.courseId}</h2>
            <p className="SingleCourse-Text">{text}</p>
        </div>
    );
}
export default SingleCourse; */

const SingleCourse = ({
    imgSrc,
    imgAlt,
    text
}) => {
    let params = useParams();

    return (
        <SingleCourseWraper>
            <Figure>
                <Image src={imgSrc} alt={imgAlt} />
            </Figure>
            <Text>{params.courseId}</Text>
            <Text>{text}</Text>
        </SingleCourseWraper>
    );
}
export default SingleCourse;