import {MouseEventHandler} from 'react'

const initialTranding: string[] = ['Nature', 'Ocean', 'Cats']

export const Tranding = () => {

    const handleTrand: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
    }

  return (
    <section className="tranding">
    <h5 className="tranding__heading">Tranding:</h5>
    <ul className="tranding__list">
      {initialTranding.map(trand => (
        <li className="tranding__item">
            <a href="" onClick={handleTrand}>{trand}</a>
        </li>
      ))}
    </ul>
  </section>
  )
}
