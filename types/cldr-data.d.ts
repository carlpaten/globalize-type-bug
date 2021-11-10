// Type definitions for cldr-data 36.0
// Project: https://www.npmjs.com/package/cldr-data
// Definitions by: Carl Patenaude-Poulin <https://github.com/lilred>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'cldr-data' {
    declare function cldrData(path: any, ...args: any[]): any;
    const availableLocales: any;
    function all(): any;
    function entireMainFor(locale: any, ...args: any[]): any;
    function entireSupplemental(): any;
};
