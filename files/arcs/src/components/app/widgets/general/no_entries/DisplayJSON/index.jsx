import React from 'react';

//constants 

//hooks



//utils

//widgets
import { CONVERT_TO_READABLE_JSON } from '@/utils/readableJsonStringify';
import { isInProduction } from '@/constants/index';


const DisplayJSON = ({ prefix, data, className, style, children }) => {
    return (
        !isInProduction && (data || children) ? (
            <pre
                style={{
                    maxWidth: "70%",
                    maxHeight: 500,
                    overflow: "auto",
                    wordBreak: 'break-word',
                    wordWrap: "break-word",
                    ...style
                }}
                className={className}
            >
                {prefix}{CONVERT_TO_READABLE_JSON(data)}
                {children}
            </pre>
        ) : <></>
    );
};

export default DisplayJSON;