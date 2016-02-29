/**
 * Created by Ron on 16/2/27.
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Component.jsx';
//ReactDOM=require('react-dom');


function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}
main();