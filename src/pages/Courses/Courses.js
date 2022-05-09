import { Link } from "react-router-dom";
import { Header, Section, CourseCard} from "../../imports"
import { Grid } from "../../lib/style/generalStyles";
import { arr } from "../CourseDetails/courses";

const Courses = () => {
    return (
        <div className="Courses">
            <Header modifiers={"secondary"} />
            <Section title={"All courses"}>
                <Grid>
                    {arr.map((item) => {
                        return (
                            <Link to={`/course/${item.id}`} key={item.id}>
                                <CourseCard imgSrc={item.imgSrc} imgAlt={item.imgAlt} title={item.title} >
                                </CourseCard>
                            </Link>
                        )
                    })}
                </Grid>
            </Section>
        </div>
    )
}