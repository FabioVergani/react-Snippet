import React, { createContex, useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

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

//

const LayoutWrapper = props => {
    // const {} = useContext(MyContext);
    return (
        <Container>
            <Row className="h-100">
                <Col className="p-2">{props.children}</Col>
            </Row>
        </Container>
    );
};

const MyFunctionComponent = () => {
    const ref = useRef({}).current;
    const [state, setState] = useState((ref.state = {}));
    const updateState = entries => {
        if (ref.isMounted) {
            setState(
                (ref.state = {
                    ...(ref.state || {}),
                    ...(entries || {})
                })
            );
        }
    };

    useEffect(() => {
        ref.isMounted = true;
        return () => {
            ref.state = null;
            ref.isMounted = false;
        };
    }, []);

    return (
        <MyContext.Provider value={{ lorem: 'ipsum' }}>
            <LayoutWrapper>
                {
                    // content here
                }
            </LayoutWrapper>
        </MyContext.Provider>
    );
};

