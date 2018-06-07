import React from 'react';
import PropTypes from 'prop-types';

export default class Synthesizers extends React.Component {
    static propTypes = {
        musicKey: PropTypes.string,
        triads: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            interval: PropTypes.string,
            notes: PropTypes.arrayOf(PropTypes.string),
        })),
        position: PropTypes.number,
        onStart: PropTypes.func,
        onStop: PropTypes.func,
        onSelectProgression: PropTypes.func,
        onSelectSound: PropTypes.func,
    };

    static defaultProps = {
        musicKey: undefined,
        triads: [],
        position: 0,
        onStart: () => {},
        onStop: () => {},
        onSelectProgression: () => {},
        onSelectSound: () => {},
    };

    progressions = {
        'I – IV – V'        : [0, 3, 4   ],
        'I – IV – I – V'    : [0, 3, 0, 4],
        'I – vi – IV – V'   : [0, 5, 3, 4],
        'I – V – vi – IV'   : [0, 4, 5, 3],
        'vi – IV – I – V'   : [5, 3, 0, 4],
        'ii – V – I'        : [1, 4, 0   ],
    };

    sounds = {
        'one': [{wave: 'sawtooth'}, {wave: 'triangle'}],
        'two': [{wave: 'sine'}, {wave: 'sine'}],
    };

    handleChangeProgression = (event) => {
        this.props.onSelectProgression(
            this.progressions[event.target.value].map(position => this.props.triads[position].notes)
        );
    };

    handleChangeSound = (event) => {
        this.props.onSelectSound(this.sounds[event.target.value]);
    };

    render() {
        return (
            <div>
                <span onClick={this.props.onStart}>Start</span>
                <span onClick={this.props.onStop}>Stop</span>
                {this.props.position}
                <select onChange={this.handleChangeProgression}>
                    {Object.keys(this.progressions).map(item => (
                        <option key={`progression-${item}`} value={item}>{item}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeSound}>
                    {Object.keys(this.sounds).map(item => (
                        <option key={`sounds-${item}`} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        )
    }
}
