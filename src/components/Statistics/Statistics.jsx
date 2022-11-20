import PropTypes from 'prop-types';
import css from "./Statistics.module.css"


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {

    return (
        <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
        
            <ul className={css.stat_list}>
                
    {stats.map(({id, label, percentage}) => {
       return (<li key={id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }} >
        <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>)
})}
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage:PropTypes.number,
  }).isRequired
  )
}