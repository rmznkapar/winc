const winc = (...args: (string | object | (string | boolean)[])[]) => {
  const tltArr: (string | boolean)[] = [];

  args.forEach((arg: (string | object)) => {
    if (typeof arg === "string") {
      tltArr.push(arg);
    }

    if (typeof arg === "object") {
      if (Array.isArray(arg)) {
        if (arg.length === 1) {
          tltArr.push(!!arg[0]);
        } else if (arg.length === 2 || arg.length === 3) {
          if (arg[0]) {
            tltArr.push(arg[1]);
          } else if (arg.length === 3) {
            tltArr.push(arg[2]);
          }
        }
      } 
      if (typeof arg === 'object' && arg !== null) {
        Object.keys(arg).forEach((csname:string) => {
          if (arg[csname as keyof typeof arg]) {
            tltArr.push(csname);
          }
        });
      }
    }
  });

  return tltArr.join(" ");
};

export default winc