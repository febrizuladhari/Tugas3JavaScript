inputName();
	function inputName() {
		var Name = prompt("Halo, Silakan Masukkan Nama Anda");
		var greeting = "Selamat datang "+Name;
		document.getElementById("name").style.display="block";
		document.getElementById("name").innerHTML = greeting;
}

function cekData(){
    if(form.pertama.value == "" || form.kedua.value == ""){
    alert("Tolong Masukkan Datanya Ya");
    exit;
    }
    }

function tambah() {
    cekData();
    a=eval(form.pertama.value);
    b=eval(form.kedua.value);
    c=a+b;
    form.hasil.value = c; 
    }

function kurang() {
    cekData();
    a=eval(form.pertama.value);
    b=eval(form.kedua.value);
    c=a-b;
    form.hasil.value = c;
    }

function kali() {
    cekData();
    a=eval(form.pertama.value);
    b=eval(form.kedua.value);
    c=a*b;
    form.hasil.value = c;
    }

function bagi() {
    cekData();
    a=eval(form.pertama.value);
    b=eval(form.kedua.value);
    c=a/b;
    form.hasil.value = c;
    }

function modulus() {
    cekData();
    a=eval(form.pertama.value);
    b=eval(form.kedua.value);
    c=a%b;
    form.hasil.value = c;
    }

function reset() {
    form.pertama.value="";
    form.kedua.value="";
    form.hasil.value = "";
    }