class HelloWorld extends React.Component{
    
    //render fns will render the screen
    render() {
        return(
            <div>Hello World</div>
        );
    };
}

const init = () => {
    ReactDOM.render(
        <HelloWorld/>,
        document.getElementById('app')
    );
};

window.onload = init;