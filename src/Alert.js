const Alert = (props) => {
    return (
        <div className={`alert-compound-${props.color}`} { ...props }>
            { props.children }
        </div>
    );
};

Alert.Title = (props) => {
    return (<h2 className="alert-compound-title" {...props} />);
};

Alert.Body = (props) => {
    return (<p className="alert-compound-body" {...props} />);
};

export default Alert;