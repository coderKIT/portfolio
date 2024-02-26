export default function Form() {
    return (
        <form className="main--form">
            <label>Top text</label> 
            <label>Bottom text</label> 
            <input type="text" placeholder="Top text"></input>
            <input type="text" placeholder="Bottom text"></input>
            <button className="form--button">GENERATE A NEW MEME</button>
        </form>
    )
}