import reactLogo from '../assets/react.svg'

export default function RenderNavbar () {
    return (
        <div className='navbar'>
            <img src={reactLogo}></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </div>
    )
}