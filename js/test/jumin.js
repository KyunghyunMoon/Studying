// let jumin = prompt("주민번호 입력");
// let w=2, hap=0, chk;

// for(let i=0; i<jumin.length-1; i++){
//     if( i == 6)
//     continue;

//     hap += parseInt(jumin.substring(i, i+1)) * w;

//     w++;
//     if( w == 10)
//         w = 2;
// }          //---합을 구하는 for문

// chk = 11 - (hap % 11);

// if (chk == 10)
//     chk = 0;
// else if (chk == 11)
//     chk = 1;

// if (chk == parseInt(jumin.substring(13, 14)))
//     str = jumin + "(O)";
// else   
//     str = jumin + "(X)";

//     console.log(str);

function input_check(){
    // let jumin1 = document.input_form.jumin1.value
    // let jumin2 = document.input_form.jumin2.value

    let jumin1 = form.jumin1.value
    let jumin2 = form.jumin2.value
    let jumin = jumin1 + "-" + jumin2;
    alert(jumin);

    let w=2, hap = 0, chk;

    for(let i = 0; i < jumin.length - 1; i++){
        if ( i == 6)
        continue;

        hap += parseInt(jumin.substring(i, i+1)) * w;

        w++;
        if(w == 10)
            w = 2;
    }

    chk = 11 - (hap % 11);

    if( chk == 10)
        chk = 0;
    else if (chk == 11)
        chk = 1;
    if (chk == parseInt(jumin.substring(13, 14)))
        str = jumin + "(0)";
    else
        str = jumin + "(x)";
        
    alert(str);
        // console.log(str);
}




