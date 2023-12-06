import error404 from '../assets/404.png'

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div>
                <img src={error404} alt="error image" />
            </div>
        </div>
    );
};

export default Error;