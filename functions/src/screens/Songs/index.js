import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Song from '../../components/Song'

export default class Songs extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    songs = {
        one: [
            //// intro
            false,
            false,
            false,
            false,

            //// Chorus A
            // ---
            {chord: 1, key: 'C'},           //If I could only
            true,
            {chord: 5, key: 'C'},           //win your
            true,
            // ---
            {chord: 1, key: 'C'},           //love
            true,
            true,
            true,
            // ---
            {chord: 4, key: 'C'},           //I'd make the most of
            true,
            true,
            true,
            // ---
            {chord: 1, key: 'C'},           // everything
            true,
            true,
            true,
            // ---
            {chord: 4, key: 'C'},           // I'd proudly wear your
            true,
            true,
            true,
            // ---
            {chord: 1, key: 'C'},           // wedding ring. My
            true,
            true,
            true,
            // ---
            true,                           //heart would never stray when you're
            true,
            true,
            true,
            // ---
            {chord: 5, key: 'C'},           // away
            true,
            true,
            true,

            //// Chorus B
            // ---
            {chord: 1, key: 'C'},           //If I could only
            true,
            {chord: 5, key: 'C'},           //win your
            true,
            // ---
            {chord: 1, key: 'C'},           //love
            true,
            true,
            true,
            // ---
            {chord: 4, key: 'C'},           //I'd give my all to
            true,
            true,
            true,
            // ---
            {chord: 1, key: 'C'},           // make it live
            true,
            true,
            true,
            // ---
            {chord: 4, key: 'C'},           //You'll never know how
            true,
            true,
            true,
            // ---
            {chord: 1, key: 'C'},           // much I give. If
            true,
            true,
            true,
            // ---
            {chord: 5, key: 'C'},           //I could only win your
            true,
            true,
            true,
            // ---
            {chord: 1, key: 'C'},           //love.   Oh


            //// Verse B
            {chord: 5, key: 'C'}, //how can I
            true,
            true,
            true,
            // ---
            {chord: 5, key: 'C'}, //ever say  How I
            true,
            true,
            true,
            // ---
            {chord: 1, key: 'C'}, //crave your love when your
            true,
            true,
            true,
            //
            {chord: 4, key: 'C'}, //gone
            true,
            {chord: 5, key: 'C'}, //away
            true,
        ]


/*


      B                         E     B
How I crave your love when your gone away
    F#
Oh how can I ever show
      B                    F#
How I burn inside when you hold me tight
   B            F#       B
If I could only win your love
E                  B
I'd give my all to make it live
E                     B
You'll never know how much I give
   F#                    B
If I could only win your love
 */
    };

    render() {
        return (
            <Song song={this.songs.one} />

        )
    }
}

/*
<div>{this.songs.one.map((item, index) => {
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
 */
