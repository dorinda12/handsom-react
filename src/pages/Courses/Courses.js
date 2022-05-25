import { Link } from "react-router-dom";
import { Header, Section, CourseCard} from "../../imports"
import { Grid } from "../../lib/style/generalStyles";
import coursesMock from "../../lib/mock/courses";
import { useEffect, useState } from "react";


const Courses = () => {
    const [courses, setCourses] = useState(null);

     useEffect(()=>{
        setCourses(coursesMock)
    },[]) 

    return (
        <div className="Courses">
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
        </div>
    )
}
export default Courses;