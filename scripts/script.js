let n = 1;
let ar1 = [];
let ar2 = [];
let ar3 = [];
let ar4 = [];
let guti1pos = [43, 43, 43, 43];
let guti2pos = [4, 4, 4, 4];
let guti3pos = [17, 17, 17, 17];
let guti4pos = [30, 30, 30, 30]
function roll(num) {
    if ((n % 4 + 1) == num) {
        document.getElementById('roll-2').innerText = 'Roll'
        document.getElementById('roll-3').innerText = 'Roll'
        document.getElementById('roll-4').innerText = 'Roll'
        document.getElementById('roll-1').innerText = 'Roll'
        let ran = Math.random()
        let dice;
        if (ran <= (1 / 6)) {
            dice = 1;
        } else if (ran <= (1 / 3)) {
            dice = 2;
        } else if (ran <= (1 / 2)) {
            dice = 3;
        } else if (ran <= (2 / 3)) {
            dice = 4;
        } else if (ran <= (5 / 6)) {
            dice = 5;
        } else {
            dice = 6;
        }
        document.getElementById(`roll-${num}`).innerText = dice;
        n++;
        if (dice == 6) {
            n--;
        }
        num == 2 ? ar1.push(dice) : ar1
        num == 3 ? ar2.push(dice) : ar2
        num == 4 ? ar3.push(dice) : ar3
        num == 1 ? ar4.push(dice) : ar4
    }
    else {
        alert('You are not eligible for roll !!!')
    }

}
function guti2(num) {

    if (ar2.length != 0) {
        const move = ar2.pop();
        const numpos = parseInt(guti2pos[num]);
        const newPos = numpos + parseInt(move);
        guti2pos[num] = newPos;
        if (newPos > 52) {
            const nePos = newPos - 52;
            //guti2pos[num] = nePos;
            const newGuti = document.createElement('div');
            newGuti.innerHTML = `<div class="guti-2" id="guti-2${num}" onclick='guti2(${num})'></div>`

            if (nePos < 3) {
                document.getElementById(`guti-2${num}`).remove();
                document.getElementById(`path-${nePos}`).appendChild(newGuti);
            } else if (nePos > 2 && nePos < 9) {
                const going = nePos - 2;
                document.getElementById(`guti-2${num}`).remove();
                document.getElementById(`guti-2-going-${going}`).appendChild(newGuti);
                console.log(nePos, going);
            } else {
                guti2pos[num] = numpos;
            }
        } else {
            // guti2pos[num] = newPos;
            document.getElementById(`guti-2${num}`).remove();
            const newGuti = document.createElement('div');
            newGuti.innerHTML = `<div class="guti-2" id="guti-2${num}" onclick='guti2(${num})'></div>`
            document.getElementById(`path-${newPos}`).appendChild(newGuti);
        }
    }

}
function guti1(num1) {

    if (ar1.length != 0) {
        const move1 = ar1.pop();
        const numpos1 = parseInt(guti1pos[num1]);
        const newPos1 = numpos1 + parseInt(move1);
        guti1pos[num1] = newPos1;
        if (newPos1 > 52) {
            const nePos1 = newPos1 - 52;

            const newGuti1 = document.createElement('div');
            newGuti1.innerHTML = `<div class="guti-1" id="guti-1${num1}" onclick='guti1(${num1})'></div>`

            if (nePos1 < 42) {
                document.getElementById(`guti-1${num1}`).remove();
                document.getElementById(`path-${nePos1}`).appendChild(newGuti1);
            } else if (nePos1 > 41 && nePos1 < 48) {
                const going1 = nePos1 - 41;
                document.getElementById(`guti-1${num1}`).remove();
                document.getElementById(`guti-1-going-${going1}`).appendChild(newGuti1)
            } else {
                guti1pos[num1] = numpos1;
            }
        } else {
            //guti1pos[num1] = newPos1;
            document.getElementById(`guti-1${num1}`).remove();
            const newGuti1 = document.createElement('div');
            newGuti1.innerHTML = `<div class="guti-1" id="guti-1${num1}" onclick='guti1(${num1})'></div>`
            document.getElementById(`path-${newPos1}`).appendChild(newGuti1);
        }
    }

}
function guti3(num3) {

    if (ar3.length != 0) {
        const move3 = ar3.pop();
        const numpos3 = parseInt(guti3pos[num3]);
        const newPos3 = numpos3 + parseInt(move3);
        guti3pos[num3] = newPos3;
        if (newPos3 > 52) {
            const nePos3 = newPos3 - 52;
            // guti3pos[num3] = nePos3;

            const newGuti3 = document.createElement('div');
            newGuti3.innerHTML = `<div class="guti-4" id="guti-3${num3}" onclick='guti3(${num3})'></div>`

            if (nePos3 < 16) {
                document.getElementById(`guti-3${num3}`).remove();
                document.getElementById(`path-${nePos3}`).appendChild(newGuti3);
            } else if (nePos3 > 15 && nePos3 <= 21) {
                document.getElementById(`guti-3${num3}`).remove();
                const going3 = nePos3 - 15;
                document.getElementById(`guti-3-going-${going3}`).appendChild(newGuti3)
            } else {
                guti3pos[num3] = numpos3;
            }
        } else {

            document.getElementById(`guti-3${num3}`).remove();
            const newGuti3 = document.createElement('div');
            newGuti3.innerHTML = `<div class="guti-4" id="guti-3${num3}" onclick='guti3(${num3})'></div>`
            document.getElementById(`path-${newPos3}`).appendChild(newGuti3);
        }
    }

}
function guti4(num4) {

    if (ar4.length != 0) {
        const move4 = ar4.pop();
        const numpos4 = parseInt(guti4pos[num4]);
        const newPos4 = numpos4 + parseInt(move4);
        guti4pos[num4] = newPos4;
        if (newPos4 > 52) {
            const nePos4 = newPos4 - 52;
            //guti4pos[num4] = nePos4;

            const newGuti4 = document.createElement('div');
            newGuti4.innerHTML = `<div class="guti-3" id="guti-4${num4}" onclick='guti4(${num4})'></div>`
            if (nePos4 < 29) {
                document.getElementById(`path-${nePos4}`).appendChild(newGuti4);
                document.getElementById(`guti-4${num4}`).remove();
            } else if (nePos4 > 28 && nePos4 <= 34) {
                const going4 = nePos4 - 28;
                document.getElementById(`guti-4${num4}`).remove();
                document.getElementById(`guti-4-going-${going4}`).appendChild(newGuti4)
            } else {
                guti4pos[num4] = numpos4
            }
        } else {

            document.getElementById(`guti-4${num4}`).remove();
            const newGuti4 = document.createElement('div');
            newGuti4.innerHTML = `<div class="guti-3" id="guti-4${num4}" onclick='guti4(${num4})'></div>`
            document.getElementById(`path-${newPos4}`).appendChild(newGuti4);
        }
    }

}