
function startGame(size, bomb_count){
    const field = document.querySelector('.field');
    let id = 1;
    let arrId = [];
    for(let i = 0; i<size; i++){
        for(let i = 0; i<size; i++){
            let $button = $('<button>');
            $button.attr('id', 'button'+id );
            $button.appendTo($("div"));
            arrId.push('button'+id);
            id++;
        }
        $('<br>').appendTo($("div"));
    }
    const bombArr = arrId.sort(()=> Math.random()-0.5).slice(0, bomb_count);

    console.log(bombArr);

      $('button').each(function (){}).click(function (){
          for(let i = 0; i < bombArr.length; i++){
              if($(this).attr('id')===bombArr[i]){
                  $(this).css('background-color', 'red');
              }
          }
          $(this).attr('disabled', true);
      });


}

