import React from 'react';

const Icon = ({ type, className }) => (
    <svg className={ `dib v-mid ${ className }` }
         width="1em" height="1em">
        <use xlinkHref={ `#${ type }` }></use>
    </svg>
);

export default Icon;