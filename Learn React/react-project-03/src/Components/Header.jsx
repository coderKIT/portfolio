import Logo from '../assets/Trollface-PNG.png'

export default function Header() {
    return (
            <div className="navbar">
            <img className="logo" src={Logo} />
            <h3>Meme Generator</h3>
            <h4>React Course - Project 3</h4>        
            </div>
            )
}