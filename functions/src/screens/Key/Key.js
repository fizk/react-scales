import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {Container} from '../../elements/Grid';
import './index.scss';

export default ({children, musicKey, triads, notes}) => {
    return (
        <Container>
            <h2>Key: {musicKey}</h2>

            <ol className="scales-notes">
                {notes.map(note => (
                    <li className="scales-notes__note" key={`note-${note}`}>{note}</li>
                ))}
            </ol>

            <table className="key__table">
                <thead className="key__table-head">
                    <tr>
                        {triads.map(chord => (
                            <td key={chord.name} className={`key__table-column key__table-column--${chord.type}`}>
                                {chord.interval}
                            </td>
                        ))}
                    </tr>
                </thead>
                <tfoot className="key__table-foot">
                    <tr>
                        {triads.map(chord => (
                            <td key={chord.name} className="key__table-column ">{chord.n.join(', ')}</td>
                        ))}
                    </tr>
                </tfoot>
                <tbody className="key__table-body">
                    <tr>
                        {triads.map(chord => (
                            <td key={chord.name} className="key__table-column ">{chord.name}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </Container>
    )
};
