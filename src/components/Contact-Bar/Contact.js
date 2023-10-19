import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ContactBar(props) {

    return <div className='contact-bar'>
        <a href={props.email}><EmailIcon /></a>
        <a href={props.linkedin}><LinkedInIcon /></a>
        <a href={props.github}><GitHubIcon/></a>
    </div>
}