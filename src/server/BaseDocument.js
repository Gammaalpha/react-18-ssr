import React from "react";
export const BaseDocument = ({ children }) => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>React 18 SSR with bootstrapScripts</title>
            </head>
            <body>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    )
}