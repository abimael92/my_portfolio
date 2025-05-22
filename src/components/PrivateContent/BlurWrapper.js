const BlurWrapper = ({ children, authenticated }) => {
    return (
        <div className={authenticated ? '' : 'blur-md pointer-events-none select-none'}>
            {children}
        </div>
    );
};

export default BlurWrapper;
