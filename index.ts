import Globalize from "globalize";
import cldrData from 'cldr-data';
import ianaTzData from 'iana-tz-data';

// This file taken from the example at 
// https://github.com/globalizejs/globalize/blob/master/README.md#getting-started

Globalize.load(cldrData.entireSupplemental());
Globalize.load(cldrData.entireMainFor("en", "es"));
Globalize.loadTimeZone(ianaTzData);

/*
Error:
This expression is not callable.
  Type '{ default: Static; load(json: Object): void; locale(): CldrStatic; locale(locale: string): CldrStatic; locale(cldr: CldrStatic): CldrStatic; ... 24 more ...; formatUnit(value: number, unit: string, options?: UnitFormatterOptions | undefined): string; }' has no call signatures.ts(2349)
index.d.ts(9, 1): Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead.
*/
console.log(Globalize("en").formatDate(new Date()));
