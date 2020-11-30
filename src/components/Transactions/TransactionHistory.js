import PropTypes from 'prop-types';

//вопрос: можно ли данные импортировать здесь и не передавать в компонент аргументов
import styles from './transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactions}>
      <thead className={styles.title}>
        <tr>
          <th className={styles.titleItem}>Type</th>
          <th className={styles.titleItem}>Amount</th>
          <th className={styles.titleItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.item} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
