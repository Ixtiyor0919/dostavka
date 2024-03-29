import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

const ScrollToTop = ({ children }) => {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, [pathname]);

    return children || null;
};

ScrollToTop.propTypes = {
    children: PropTypes.node
};

export default ScrollToTop;