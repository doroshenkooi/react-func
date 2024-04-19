import styles from './main.module.css'

export const ShopItemFunc = (props) => {
   const { item } = props;
   
return (
    <div className={styles["main-content"]}>
    <h2>{item.brand}</h2>
    <h1>{item.title}</h1>
    <h3>{item.description}</h3>
    <div>{item.descriptionFull}</div>
    <div className={styles["highlight-window mobile"]}>
      <div className={styles["highlight-overlay"]}></div>
    </div>
    <div className={styles["divider"]}></div>
    <div className={styles["purchase-info"]}>
      <div className={styles["price"]}>{item.currency}{item.price.toFixed(2)}</div>
      <button>добавить в корзину</button>
    </div>
  </div>
  );
}
