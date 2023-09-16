/**
 * find id in text and save in useRef
 * @MehrabSp
 */

// const regex = /@\w+/g;
// const newText = item.text.replace(regex, (match) => {
//   console.log(match , 'match')
//   // return <Text style={{color: 'blue'}}>${match}</Text>;
// });
//   var text = "This is a sample text with an Instagram handle @MehrabSp in it.";
// var pattern = /@([A-Za-z0-9._]+)/g;
// var pattern = /@([A-Za-z0-9_]+)/g;
export function findAndsave(text: string, fixPos) {
    const regex = /@(\w+)/g;
    try {
        if (text.includes("@")) {
            const matches = text.match(regex);
            // console.log(matches[0], 'mm'); // null
            fixPos.current.Ids = matches[0]
        }
        //  else {
        //     console.log("No usernames found.");
        // }
    } catch (error) {
        console.log("err " + error);
    }
}