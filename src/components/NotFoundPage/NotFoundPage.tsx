import { Link, useLocation } from 'react-router-dom';

import './NotFoundPage.scss';
import { useContext, useState } from 'react';
import { PageContext } from '../../utils/GlobalContext';
import { Loader } from '../Loader';

type Props = {
  message?: string,
};

export const NotFoundPage: React.FC<Props> = ({
  message = 'Page not found',
}) => {
  const { setError } = useContext(PageContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const reloadingPade = () => {
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="error-page">
      {isLoading
        ? <Loader />
        : (
          <div className="error-page__body">
            <p className="error-page__message">
              {message}
            </p>

            <Link
              to="/home"
              className="error-page__home-link"
              onClick={() => setError(false)}
            >
              Go Home
            </Link>

            <Link
              to={location}
              className="error-page__home-link"
              onClick={reloadingPade}
            >
              Try to reload
            </Link>
          </div>
        )}
    </div>
  );
};
