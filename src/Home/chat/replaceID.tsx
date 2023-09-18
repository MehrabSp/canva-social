export function replaceStringWithJSX(str: string, find: string, replace) {
  // if (!find || find == "@") {
  //   return replace;
  // } else {
    const parts = str.split(find);
    // var parts = find.match(pattern);
    const result = [];
    try {
      for (let i = 0; i < parts.length; i++) {
        result.push(parts[i]);
        if (i < parts.length - 1) result.push(replace);
      }
      return result;
    } catch (error) {
      console.log("error replaceID: " + error);
    }
  // }
};
