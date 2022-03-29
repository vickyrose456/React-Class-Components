class HelloUser extends React.Component{
    //need to set up this.state
    constructor(props){
        super(props);

        this.state = {
            username: props.username,
        };

    }//constructor

    handleNameChange(e){
        //get ref back
        //fns that we access from react comp
        //set state will check if the value actually changed and if it does,
        //it will manually rerender 
        this.setState({username: e.target.value});
    }

    render() {
        return(
            <div>
                Hello {this.state.username}
                <p>Change Name: </p>
                <input type="text" value={this.state.username} onChange = {this.handleNameChange}></input>
            </div>
        );
    }//render

}//Hello user class

const init = () => {
    ReactDOM.render(
        <HelloUser username = "Victoria"/>,
        document.getElementById('app')
    );
}//init

window.onload = init;