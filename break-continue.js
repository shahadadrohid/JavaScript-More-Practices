var i = 0;
while (i <= 8) {
    console.log(i);
    i++
    if (i == 4) {
        break;
    }

}

var i = 0;
while (i <= 8) {
    console.log(i);
    if (i == 4) {
        break;
    }
    i++
}


for (var i = 0; i < 8; i++) {
    // console.log(i);
    if (i > 4) {
        break;
    }
}

for (var i = 0; i < 8; i++) {
    if (i > 4) {
        break;
    }
    // console.log(i);
}

var num = [10, 80, 85, 70, 72, 100, 45, 90];
for (var i = 0; i < num.length; i++) {
    console.log(i);
    var newnum = num[i];
    if (newnum > 80) {
        continue;
    }
    console.log(newnum);
}
