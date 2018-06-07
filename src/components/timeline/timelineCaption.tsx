import * as React from 'react';
import glamorous, {ThemeProvider} from 'glamorous';

import { H2 } from 'glamorous';

class TimelineCaption extends React.Component<{}, {}> {
    props: any;
    constructor(props) {
        super(props);
        this.state = {

        };
        this.renderArticle = this.renderArticle.bind(this);
        this.renderSong = this.renderSong.bind(this);
        this.renderMovie = this.renderMovie.bind(this);
    }

    private renderArticle(): void {

    }

    private renderSong(): JSX.Element {
        return (
            <div className="songItem">
                <H2 >
                    {this.props.song}
                </H2>
                {this.props.artist}
            </div>
        )
    }

    private renderMovie(): void {

    }

    render(): any {
        if (this.props.song) {
            return this.renderSong();
        } else if (this.props.headline) {
            return this.renderSong();
        } else if (this.props.movieTitle) {
            return this.renderMovie();
        }
    }
}

export default TimelineCaption;