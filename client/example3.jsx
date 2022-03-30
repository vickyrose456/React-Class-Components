class SongContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            songs: props.songs,
        };

        this.loadSongsFromServer();
    }

    render() {
        // If we have no songs, we will simply render that out.
        if(this.state.songs.length === 0) {
            return (
                <div>
                    <h3>No Songs Yet!</h3>
                </div>
            );
        }

        const songList = this.state.songs.map((song) => {
            return (
                <div key={song.title}>
                    <h2>{song.artist} - <i>{song.title}</i></h2>
                </div>
            )
        });

        return (
            <div>
                <h1>My favorite songs!</h1>
                {songList}
            </div>
        )
    }

    loadSongsFromServer = async () => {
        const response = await fetch('/getSongs');
        const songs = await response.json();
        this.setState({ songs });
    };
}

const init = () => {
    ReactDOM.render(
      <SongContainer songs={[]} />,
      document.getElementById('app')
    );
};
  
window.onload = init;
  