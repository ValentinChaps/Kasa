import { useState } from "react"
import arrowUpClose from "../../assets/arrowUp.png"
import "./Collapse.scss"

function Collapse({ size, title, content }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className={'collapsableContainer ' + size}>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
        className="btnCollapse"
      >
        <h2>{title}</h2>
        <img src={arrowUpClose} alt="" className={visible ? 'close' : ''} />
      </button>
      <div className={'collapsable ' + size + (visible ? ' show' : '')}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse