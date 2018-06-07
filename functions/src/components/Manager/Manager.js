import React from 'react';
import PropTypes from 'prop-types';

export default class Manager extends React.Component {
    static propTypes = {
        musicKey: PropTypes.string,
        onChangeKey: PropTypes.func,
    };

    static defaultProps = {
        musicKey: undefined,
        onChangeKey: () => {},
    };

    constructor(props) {
        super(props);
        this.handleChangeMusicKey(this.props.musicKey)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.musicKey !== this.props.musicKey) {
            this.handleChangeMusicKey(nextProps.musicKey);
        }
    }

    handleChangeMusicKey(key) {
        this.props.onChangeKey(key)
    }

    render() {
        return null;
    }
}
