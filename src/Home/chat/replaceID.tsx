export const replaceStringWithJSX = (str, find, replace) => {
    const parts = str.split(find);
    // var parts = find.match(pattern);
    const result = [];
    for (let i = 0; i < parts.length; i++) {
      result.push(parts[i]);
      if (i < parts.length - 1) result.push(replace);
    }
    return result;
  };