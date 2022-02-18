import React from "react";
import { Track } from '../Track/Track.js';
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track}
                            key={track.id} 
                            onAdd={this.props.onAdd}
                            onRemove={this.props.onRemove}
                            isRemoval={this.props.isRemoval}
                            onClick={this.props.onClick} />
                    })
                }
            </div>
        )
    };
};