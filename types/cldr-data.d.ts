// Type definitions for cldr-data 36.0
// Project: https://www.npmjs.com/package/cldr-data
// Definitions by: Carl Patenaude-Poulin <https://github.com/lilred>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'cldr-data' {
    interface CldrData {
        (path: any, ...args: any[]): any;
        availableLocales: any;
        all(): any;
        entireMainFor(locale: any, ...args: any[]): any;
        entireSupplemental(): any;
    }

    declare const cldrData: CldrData;
    export = cldrData;
};