import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p className='bg-primary p-3 text-center text-white fs-4'> Copyright &copy;Md Ayub Ali | {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;