import React, {Fragment} from 'react';
import MusicalScale from "../../utilities/MusicalScale";

export default class Song extends React.Component<{song: any}> {

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.width = 1024;
        this.height = 1024;
    }

    render() {
        const scale = new MusicalScale({key: 'C', mode: 'ionian'});

        const chunks = Array.from({length: Math.ceil(this.props.song.length / 16)}).map((none, index) => {
            return this.props.song.slice(index * 8, index * 16 + 16)
        });

        console.log(chunks);

        return (
            <svg width={this.width}
                 height={this.height}
                 viewBox={`0 0 ${this.width} ${this.height}`}
                 version={'1.1'}
                 xmlns={`http://www.w3.org/2000/svg`}>

                <div>{this.props.song.map((item, index) => {
                    return (
                        <Fragment>
                            {index % 4 === 0 && (<span>|</span>)}
                            {item === false && (<span>.</span>)}
                            {item === true && (<strong>/</strong>)}
                            {typeof item === 'object' && (
                                <span>
                                    {scale.notes[item.chord-1].note}
                                    {scale.notes[item.chord-1].triad.type}
                                    ({scale.notes[item.chord-1].triad.interval})
                                </span>
                            )}
                        </Fragment>
                    );
                })}</div>
            </svg>
        )
    }
}
