// js program for implementation of simple
// approach to find length of last word
 
 
function lengthOfLastWord(s)
{
    let len = 0;
 
    // String a is 'final'-- can
    // not be modified So, create
    // a copy and trim the
    // spaces from both sides
    x = a.trim();
 
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
 
    return len;
}
 
// Driver code
 
input = "Full Stack";
document.write("The length of last word is "+ lengthOfLastWord(input));
 