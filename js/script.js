function hitungluas(){
    alas = document.getElementById('alas').value;
    tinggi = document.getElementById('tinggi').value;

    luas = 1/2*alas*tinggi;

    document.getElementById('luas').value = luas;

}
function hitungkeliling(){
    s1 = +document.getElementById('s1').value;
    s2 = +document.getElementById('s2').value;
    s3 = +document.getElementById('s3').value;

    keliling = s1+s2+s3;

    document.getElementById('keliling').value = keliling;
}

function resetluas(){
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas').value = '';
}

function resetkeliling(){
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('s3').value = '';
    document.getElementById('keliling').value = '';
}

