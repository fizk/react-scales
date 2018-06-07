import React from 'react';
import {connect} from 'react-redux';
import Key from './Key';

const mapStateToProps = state => ({
    musicKey: state.manager.musicKey,
    triads: state.manager.triads,
    notes: state.manager.notes,
});

export default connect(mapStateToProps)(Key);
