

const Yellow = props => <span style={{color: "yellow"}}>{props.children}</span>
const Green = props => <span style={{color: "green"}}>{props.children}</span>
const Blue = props => <span style={{color: "blue"}}>{props.children}</span>
const Red = props => <span style={{color: "red"}}>{props.children}</span>
const Orange = props => <span style={{color: "orange"}}>{props.children}</span>
const Gray = props => <span style={{color: "gray"}}>{props.children}</span>
const Black = props => <span style={{color: "black"}}>{props.children}</span>
const Color = props => <span style={{color: Object.values(props)[0] === true ? Object.keys(props)[0]: props.color}}>{props.children}</span>
const Cmd = props => <span style={{color: "hsl(290, 82%, 56%)"}}>{props.children}</span>
const Str = props => <span style={{color: "hsl(100, 82%, 46%)"}}>{props.children}</span>
const Flag = props => <span style={{color: "hsl(30, 82%, 56%)"}}>{props.children}</span>
const Opt = props => <span style={{color: "hsl(0, 82%, 56%)"}}>{props.children}</span>
const Path = props => <span style={{color: "hsl(190, 82%, 56%)"}}>{props.children}</span>



export {Yellow, Green, Blue, Red, Orange, Gray, Black, Color, Cmd, Str, Flag, Opt, Path}