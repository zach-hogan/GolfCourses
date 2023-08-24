import Course from "./Course";
import "../Styling/Content.css"

function Content () {

    const courses = [
                        {courseID: 1, courseName: "Pebble Beach"},
                        {courseID: 2, courseName: "Stone Wall Orchard"},
                        {courseID: 3, courseName: "Pleasant Valley"}
                    ]

    return (
        <div className="Content">
            {courses.map(course => (
                <Course id={course.courseID} name={course.courseName} key={course.courseID}/>
            ))}
        </div>
    );
}

export default Content;