genChees();

function genChees(){
    for (i2 = 0; i2 != 8; i2++){
        if (i2 % 2 == 0){
            for (i = 0; i != 8; i++){
                var newDiv$i = document.createElement("div");
                if (i%2 == 0){
                    newDiv$i.classList.add("white");    
                }
                else{
                    newDiv$i.classList.add("black");
                }
                list.appendChild(newDiv$i);
            }
        }
        else{
            for (i = 0; i != 8; i++){
                var newDiv$i = document.createElement("div");
                if (i%2 == 0){
                    newDiv$i.classList.add("black");    
                }
                else{
                    newDiv$i.classList.add("white");
                }
                list.appendChild(newDiv$i);
            }
        }
        var newBr$i2 = document.createElement("br");
        list.appendChild(newBr$i2)
    }
    const black_st = document.querySelectorAll('.black');
    const white_st = document.querySelectorAll('.white');
    for (let i = 0, length = black_st.length; i < length; i++) {
        black_st[i].style.height = "100px";
        black_st[i].style.width = "100px";
        black_st[i].style.display = "inline-block"
        black_st[i].style.background = "black";
      }
      for (let i = 0, length = white_st.length; i < length; i++) {
        white_st[i].style.height = "100px";
        white_st[i].style.width = "100px";
        white_st[i].style.display = "inline-block"
        white_st[i].style.background = "white";
      }
    }
    