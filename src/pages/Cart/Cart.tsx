import { useNavigate } from 'react-router-dom';
import './Cart.scss';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../utils/GlobalContext';
import { CartPosition } from './CartPosition';
import { Loader } from '../../components/Loader';

export const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const {
    totalCount,
    totalNumber,
    products,
    cardList,
    setCardList,
  } = useContext(PageContext);
  const navigate = useNavigate();
  const [checkout, setCheckout] = useState(false);

  const productsOnCart = products.filter(p => cardList.includes(p.id));

  const getTotalAmount = () => {
    let result = 0;

    totalCount.forEach(el => {
      result += el.price * el.count;
    });

    return result;
  };

  const totalAmount = getTotalAmount();

  const clearCart = () => {
    setCheckout(false);
    setCardList([]);
  };

  return (
    <div className="cart">
      {isLoading
        ? <Loader />
        : (
          <>
            <button
              className="cart__back"
              type="button"
              onClick={() => navigate(-1)}
            >
              <div className="cart__back-arrow" />
              <p className="cart__back-text">Back</p>
            </button>

            <h1 className="cart__title">Cart</h1>

            <div className="cart__body">
              {productsOnCart.length
                ? (
                  <>
                    <div className="cart__list">
                      {productsOnCart.map(product => {
                        return (
                          <CartPosition
                            product={product}
                            key={product.id}
                          />
                        );
                      })}
                    </div>

                    <div className="cart__sum">
                      <p className="cart__total-sum">{`$${totalAmount}`}</p>
                      <p className="cart__total-text">{`Total for ${totalNumber} items`}</p>

                      <button
                        className="cart__checkout"
                        aria-label="cart checkout"
                        type="submit"
                        onClick={() => setCheckout(true)}
                      >
                        Checkout
                      </button>

                      {checkout
                        && (
                          <div className="cart__checkout-container">
                            <div className="cart__checkout-answer">
                              <button
                                type="button"
                                aria-label="close cheakout"
                                className="cart__checkout-close"
                                onClick={() => setCheckout(false)}
                              />
                              <p className="cart__checkout-message">
                                Checkout is not implemented yet.
                                <br />
                                Do you wan&apos;t to clear the Cart?
                              </p>

                              <div className="cart__checkout-buttons">
                                <button
                                  type="button"
                                  aria-label="close cheakout"
                                  className="cart__checkout-button"
                                  onClick={clearCart}
                                >
                                  Clear
                                </button>
                                <button
                                  type="button"
                                  aria-label="close cheakout"
                                  className="cart__checkout-button"
                                  onClick={() => setCheckout(false)}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  </>
                ) : (
                  <h2 className="cart__empty">Your cart is empty</h2>
                )}

            </div>
          </>
        )}
    </div>
  );
};
