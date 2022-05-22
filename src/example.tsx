import React from 'react';

type Details = {
    count: number;
}

export type ExampleComponentProps = {
    name: string;
    details: Details;
};

export const ExampleComponent: React.FC<ExampleComponentProps> = ({ name, details }) => {
    const obj = {
        string: 'example',
        number: 15,
        bool: true
    };

    return(
        <div>
            <span>{'some example text'}</span>
            <h1>{name}</h1>
            <span>{details.count}</span>
            <p>{JSON.stringify(obj)}</p>
        </div>
    );
};
