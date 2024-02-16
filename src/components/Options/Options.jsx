import css from './Options.module.css'

const Options = ({ onUpdate , value }) => (
    <section>
      <ul className={css.optionsList}>
        <li><button onClick={()=> onUpdate("good")} type="button">Good</button></li>
        <li><button onClick={()=> onUpdate("neutral")} type="button">Neutral</button></li>
        <li><button onClick={()=> onUpdate("bad")} type="button">Bad</button></li>
        {!!value && <li><button onClick={()=> onUpdate("reset")} type="button">Reset</button></li>}
      </ul>
    </section>
  )

export default Options;