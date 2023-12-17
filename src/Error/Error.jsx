import { Link } from 'react-router-dom';
import error404 from '../assets/404.png'
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Helmet>
                <title>Error Page</title>
             </Helmet>
            <div>
                <img src={error404} alt="error image" />
            </div>
            <Link to={'/'}>
                <a className='text-green-500 underline'>Retun To Home</a>
            </Link>
        </div>
    );
};

export default Error;