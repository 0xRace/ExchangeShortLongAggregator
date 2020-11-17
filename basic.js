var poll = 0;
var count = 1;
for (i = 1; i < 10; i++) {
    setTimeout(() => { console.log("Poll " + count); count++; }, poll += 2000);
}