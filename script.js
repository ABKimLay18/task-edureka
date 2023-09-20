function sub(){
    alert("Submited successfully...");
    
    if(window.confirm("Open a Website")){
        window.location.href = "https://www.educative.io/";
    }else{
        let div = document.querySelector('.container');
        let h1 = document.createElement('h1');
        h1.innerHTML = 'Thankyou for coming...!';
        h1.classList = 'line';
        div.appendChild(h1);
    }
}