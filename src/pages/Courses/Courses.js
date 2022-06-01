import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import { Main, Header, Section, CourseCard} from "../../imports";
import { Center, Grid } from "../../lib/style/generalStyles";
import coursesMock from "../../lib/mock/courses";
import { useEffect, useState } from "react";
/* import SearchBar from "../../components/SearchBar/SearchBar";
//import * as Loader  from "react-loader-spinner";  */


const Courses = () => {
    const [courses, setCourses] = useState(null);


     useEffect(()=>{
        setCourses(coursesMock)
    },[]) 

/* const [searchTerm, setSearctTerm] = useState("");
const Provedi = (prop) => {
    setSearctTerm(prop.target.value);
}; */

/*      return (
        <Main>
            <Header modifiers={"secondary"} />
            <Section title={"All courses"}>
                <Grid>
                    {courses && courses.map(item =>
                        <Link to={`/course/${item.id}`} key={item.id}>
                            <CourseCard imgSrc={item.imgSrc} imgAlt={item.imgAlt} title={item.title} />
                        </Link> )
                    }
                </Grid>
            </Section>
        </Main>
    )
}  */

/*         return (
            <Main>
                <Header modifiers ={"secondary"} />
                <Section title = {"All courses"}>
                    <Center>
                        <SearchBar placeholder ="Search event by title" Provedi={Provedi}/>
                    </Center>
                    <Center>
                        {!courses ? (
                            <Loader
                                type="TailSpin"
                                color="#e4b43c"
                                height={100}
                                widht={100}
                            />
                        ) : (
                            <Grid>
                                {courses
                                    .filter((course) => {
                                        if (searchTerm === "") {
                                            return course;
                                        } else if (
                                            course.title
                                                .toLowerCase()
                                                .includes(searchTerm.toLowerCase())
                                        ) {
                                            return course;
                                        }
                                    })
                                    .map((course) => (
                                        <CourseCard
                                        key={course.id}
                                        courseId={course.id}
                                        imgSrc={course.imgSrc}
                                        imgAlt={course.imgAlt}
                                        title={course.title}
                                        subtitle={course.subtitle}
                                        />
                                    ))}
                            </Grid>
                        )}
                    </Center>
                </Section>
            </Main>
        );
        };
export default Courses; */

    
return (
    <>
        <Header isSecondary={true} />
        <Section title={"All courses"}>
            {courses && (
                <Grid>
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            courseId={course.id}
                            imgSrc={course.imgSrc}
                            imgAlt={course.imgAlt}
                            title={course.title}
                            subtitle={course.subtitle}
                            />
                    ))}
                </Grid>
            )}
        </Section>
    </>
    );
    };
export default Courses;