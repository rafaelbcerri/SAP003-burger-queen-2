import React from 'react';
import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  standardStyle: {
    margin: 5,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '50vw',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#95a5a6',
    color: '#ecf0f1',
    fontSize: 20,
  },
  orderCardStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonStyle: {
    display: 'flex',
    margin: 3,
    color: '#000000',
    borderRadius: '100px',
    padding: 18,
    textAlign: 'center',
    fontSize: 25,
    width: '5vw',
    height: '5vw'
  },
  orderButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ecf0f1',
    backgroundColor: '#27ae60',
    borderColor: '#000000',
    borderRadius: 5,
    width: '20vw',
    height: '5vw',
  },
  totalStyle: {
    borderTopStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#ecf0f1',
  },
  itemStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    width: '60%',
  },
  countStyle: {
    marginRight: 10,
  },
  priceStyle: {
    marginLeft: 25,
    width: '30%',
  }
});

const OrderCard = (props) => {
  const order = props.order;

  return (
    <div className={css(styles.standardStyle)}>
      <section>
        <h4>PEDIDO</h4>
        {order.map((element) => (
          <div key={element.id} className={css(styles.orderCardStyle)}>
            <div>
              <Button className={css(styles.buttonStyle)}
                handleClick={(e) => {
                  e.preventDefault();
                  props.reduceItem(element);
                }}
                title={<FontAwesomeIcon icon={faMinus} size="xs" color='#c0392b' />}
              />
            </div>
            <div className={css(styles.itemStyle)}>
              <div className={css(styles.countStyle)}>{element.count} x</div>
              <div className={css(styles.nameStyle)}>{element.name}</div>
              <div className={css(styles.priceStyle)}>R${element.price},00</div>
            </div>
            <div>
              <Button className={css(styles.buttonStyle)}
                handleClick={(e) => {
                  e.preventDefault();
                  props.removeOrder(element);
                }}
                title={<FontAwesomeIcon icon={faTrash} size="xs" color='#c0392b' />}
              />
            </div>
          </div>
        ))}
        <div className={css(styles.totalStyle)}>
          <p>Total = R${props.total},00</p>
        </div>
        <Button className={css(styles.orderButton)}
          handleClick={(e) => {
            e.preventDefault();
            props.submitOrder();
          }}
          title='ENVIAR PEDIDO' />
      </section>
    </div>
  );
};

export default OrderCard;
