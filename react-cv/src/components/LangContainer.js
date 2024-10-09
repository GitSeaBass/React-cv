import './LangContainer.css'

function LangContainer({img, des}) {
    return (
        <div className="lang-container">
            <img className="code-img" src={img} alt={des}/>
            <h4>{des}</h4>
        </div>
    )
}

export default LangContainer;