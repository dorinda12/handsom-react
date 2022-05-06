import { Link } from "react-router-dom"
import { Header, Section, CourseCard } from "../../imports";
import { Grid } from "../..lib/style/generakStyles";

import { arr } from "../CourseDetals/courses";
const Courses = () => {
    return(
        <>
            <Header isSecondary ={true} />
            <Section title={"All courses"}>
                <Grid>
                    {arr.map((item) => {
                    return (
                        <Link to={`/course/${item.id}`} key={item.id}>
                            <CourseCard imgSrc={item.imgSrc} imgAlt={item.imgAlt} title
                        </Link>
                    );
             })}
            </Grid>
        </Section>
    </>
    );
};

export default Courses;
