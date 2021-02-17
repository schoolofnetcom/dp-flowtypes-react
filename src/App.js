import React, { useState } from 'react';
import Alert from './Alert';

function App() {
    const [data, setData] = useState('');
    return (
        <div>
            <Alert color="red" test="foo">
                <Alert.Title>Title</Alert.Title>
                <Alert.Body>Body</Alert.Body>
            </Alert>
        </div>
    );
}


export default App;
