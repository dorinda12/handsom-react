import React from 'react'
import ReactDOM from 'react-dom'
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Header, Main, Landing, Section, CourseCard, Testimonial } from "../../imports";
import { Grid } from "../../lib/style/generalStyles";
import coursesMock from "..//../lib/mock/courses";


const Home = () =>{
    const [courses, setCourses] = useState(null);

    useEffect (() => {
        setTimeout (()=>{
            setCourses(coursesMock);
        }, 1000);
    },[])

    return (
        <>
            <Header />
            <Main>
                <Landing/>
                <Section title={"Open new possibility"} actionText={"Learn something new"} buttonText={"More Courses"}>
                    {courses && (
                    <Grid>
                        {courses.map ((course, index)=> index <=3 && (
                            <CourseCard
                                key= {course.id}
                                courseId={course.id} 
                                imgSrc ={course.imgSrc}
                                imgAlt ={course.imgAlt}
                                title = {course.title}
                                subtitle = {course.subtitle}
                                />
                            )
                        )}
                </Grid>
                )}
                </Section>
                <Section modifiers = {["testimonials"]} isHeadingVisible ={false}>
                <Testimonial />
                </Section>
            </Main>
        </>
    );
};

{/* //
    return (
  <>
            <Header/>
         <Main>
                       <section>
                    <Landing/>
               </section>
                <Section 
                title = {"Open new posibility"} 
                actionText={"Learn Something New"}
                buttonText = {"More Courses"}
                ><Grid>
                <CourseCard
                imgSrc={LectureImg1}
                imgAlt={'Introduction'}
                title={'1. Introduction'}
              subtitle={'60 Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg2}
                            imgAlt={'HTML & CSS'}
                           title={'2. HTML & CSS'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg3}
                          imgAlt={'Version Control System'}
                           title={'3. Version Control System'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg4}
                            imgAlt={'Advanced CSS'}
                            title={'4. Advanced CSS'}
                            subtitle={'120+ Minutes'}
                        /></Grid>
                    </Section>
                    <Section isHeadingVisible={false}
                     modifiers={['testimonials']}
                     ><Testimonial/></Section>
            </Main>
    </>
    );
}; */}

export default Home;
