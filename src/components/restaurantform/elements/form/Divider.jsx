import React from 'react';

interface DividerProps
{
    text?: string;
}

function Divider({text}, DividerProps): JSX.Element
{
    const dividerText = text || 'OR';

    return(
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300
        after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                {dividerText}
            </p>
        </div>
    );
}

export default Divider;