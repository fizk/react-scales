import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Column} from '../../elements/Grid'
import scales from '../../utilities/scalePositions';
import computeScale from "../../utilities/computeScale";
import MusicalScale from "../../utilities/MusicalScale";
import Neck from '../../components/Neck';
import ScalePosition from '../../components/ScalePosition';

export default class Arpeggio extends React.Component {

    static propTypes = {
        musicKey: PropTypes.string,
    };

    static defaultProps = {
        musicKey: 'F',
    };

    state = {
        position: '6/1'
    };

    render() {
        const musicNotes = new MusicalScale({key: this.props.musicKey, mode: 'ionian'}).notes;
        return (
            <Container>
                <Row>
                    <Column>
                        <select onChange={event => this.setState({position: event.target.value})}>
                            {Object.keys(scales).map(position => (
                                <option key={position} value={position}>{position}</option>
                            ))}
                        </select>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <svg xmlns={`http://www.w3.org/2000/svg`}
                             width={1024} height={180 * 7 + 20}
                             viewBox={`0 0 1024 ${180* 7 + 20}`}>
                            {musicNotes.map(index => (
                                <g key={`pos-${index.step}`} transform={`translate(0, ${(180 * index.step + 20)})`}>
                                    <text transform={`translate(0, -5)`}>{index.note}{{
                                        0: 'maj7 (I)',
                                        1: 'min7 (ii)',
                                        2: 'min7 (iii)',
                                        3: 'maj7 (IV)',
                                        4: '7 (V)',
                                        5: 'min7 (vi)',
                                        6: 'min7♭5 (vii°)',
                                    }[index.step]}</text>
                                    <Neck  />
                                    <ScalePosition scale={computeScale(scales[this.state.position].scale, this.props.musicKey, index.step + 1) }
                                                   startOn={scales[this.state.position].notes[this.props.musicKey]}
                                                   arpeggio={true} />
                                </g>
                            ))}
                        </svg>
                    </Column>
                </Row>
            </Container>
        )
    }
}
