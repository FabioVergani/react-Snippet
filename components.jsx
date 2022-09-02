import React, { createContex, useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

/*
const MyContext = createContext();
export default SandboxContext;
*/

class MyClassComponent extends React.Component {
    static propTypes = {
        myprop: PropTypes.any
    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                <div>
                </div>
            </MyContext.Provider>
        );
    }
}

function MyFunctionComponent() {
    const ctx = useContext(MyContext);
    const ref = useRef({}).current;
    const [state, setState] = useState({});
    const updateState = update => {
        if (ref.isMounted) {
            const newState = Object.assign({}, state, update);
            setState(newState);
        }
    };
    useEffect(() => {
        ref.isMounted = true;
        return () => {
            ref.isMounted = false;
        };
    }, []);
    return (
        <div></div>
    );
}

