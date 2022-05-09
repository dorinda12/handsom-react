
import { Header, Section} from "../../imports";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/courses";

//import { arr } from "./courses";

const CourseCard = () => {
   const { id } = useParams();
   const {courses, setCourses} = useState(null);
   const {course, setCourse} = useState(null);

   useEffect(() => {
       setCourse(coursesMock)
   }, [])

   useEffect(() => {
        courses && setCourse(...courses.filter(course => course.id === parseInt(id)))
    }, [courses, id])   

//    const filterdList = arr.filter((item) => item.id == id);

    const handleButtonClick = () => {
        // -1
    }

    return (
        <div>
           <Header isSecondary = {true} />
            { course && 
                <Section 
                    title={course.title}
                    actionText={course.subtitle}
                    buttonText ={"Go back"}
                    callback = {handleButtonClick}
                >

                <SingleCourseCard imgSrc ={course.imgSrc} imgAlt={course.imgAlt} text = {course.text}/> 
                </Section>}
            

          {/*  {folteredList.map((item) => {
               return (
                  <Section 
                      key= {item.id}
                      title={item.title}
                     actionText={item.actionText}
                     buttonText ={"Go back"}
                     onClick={() => console.log ("click")}
                     >

                    <SingleCourseCard imgSrc ={item.imgSrc} imgAlt={item.imgAlt} text = {item.text}></SingleCourseCard> 
                    </Section>
                );
              })} */}
      </div>
    );
};

export default CourseDetails;