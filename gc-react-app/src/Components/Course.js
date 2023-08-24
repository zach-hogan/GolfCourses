import "../Styling/Course.css"

function Course ({id, name}) {
    return (
        <button className="Course" id={id}>{name} GOLF COURSE!</button>
    )
}

export default Course;