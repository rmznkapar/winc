# winc
A simple utility for conditionally joining class names together


## Usage

```js
import winc from 'winc';

winc("tag bg-primary", [true, "text-white", "text-primary bg-opacity-30"])
//=> 'tag bg-primary text-white'

winc("tag bg-primary", [true, "text-white", "text-primary bg-opacity-30"])
//=> 'p-4'

winc("mb-2 font-bold", ['', "text-lg", "text-sm"])
//=> 'mb-2 font-bold text-sm'

winc([{ users: [] }, "relative", "absolute"])
//=> 'relative'

winc([true, "bottom-0", "bottom-32"])
//=> 'bottom-0'

winc([{ absolute: true, "text-error": false, "font-bold": true })
//=> 'absolute font-bold'

winc([false, "text-success", "text-error"], { absolute: true })
//=> 'text-error absolute'


winc(false ? "block" : "opacity-0 hidden", "mt-2")
//=> 'opacity-0 hidden mt-2'

```
