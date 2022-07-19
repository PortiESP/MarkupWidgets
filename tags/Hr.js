import {hr_line, hr_small} from "./styles.module.scss"

export default function Hr(props){
    return <hr className={[hr_line, props.small?hr_small:""].join(" ")} />
}