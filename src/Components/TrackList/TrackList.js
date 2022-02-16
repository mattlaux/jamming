import React from "react";
import { Track } from '../Track/Track.js';
import './TrackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track />
            </div>
        )
    };
};