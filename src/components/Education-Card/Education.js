import './Education.css'

export default function EducationCard(props) {

    return (

        <div className="education-card">
            <div className='title-bar'>
                <h3 className="title">{props.school_name}, {props.school_location}</h3>
                <h5>{props.timeline}</h5>
            </div>
            <div className='education-body'>
                <h4>Degree - {props.degree}</h4>
                <h4>GPA - {props.gpa}</h4>
            </div>
        </div>
    )
}