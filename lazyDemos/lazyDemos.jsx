import React, { useState, useEffect } from 'react';

const DemoList = props => (
    <ul>
        {props.links.map(([param, label], i) => (
            <li key={i}>
                <a href={`?demo=${param}#routed`}>{label}</a>
            </li>
        ))}
    </ul>
);

const Page = () => {
    const [Demo, setDemo] = useState(null);
    const demoParam = new URLSearchParams(location.search).get('demo');
    useEffect(() => {
        switch (demoParam) {
            case '1':
            case '2':
            case '3':
                setDemo(React.lazy(() => import(`./demos/${demoParam}/component`)));// default
                break;
        }
    }, [demoParam]);
    return (
        <Container fluid id="demo">
            {demoParam &&
            Demo && ( 
                <style>
                    {`@import url(../path/demos/${demoParam}/demo.css)`}
                </style>
            )}
            {Demo ? (
                <Demo />
            ) : (
                <DemoList
                    links={[
                        [1, 'Demo: A'],
                        [2, 'Demo: B'],
                        [3, 'Demo: C']
                    ]}
                />
            )}
        </Container>
    );
};

export default Page;

