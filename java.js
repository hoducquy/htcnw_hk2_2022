function kiemtratamgiac() {
    var a =eval(prompt("nhap canh a:"));
    var b =eval(prompt("nhap canh b:"));
    var c =eval(prompt("nhap canh c:"));
 if (a+b>c && a+c>b && b+c>a) {
     document.write = "là tam giác";
    if (a==b && b==c && c==a) 
        alert("tam giác đều ");
    else
    if (a==b || b==c || c==a)
        alert("tam giac cân");
    else
        alert("tam giác thường ")
} else 
    alert("không phải là tam giác");   
}