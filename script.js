
        let totscore = 10
        let num = document.getElementById('num')
        let command = document.getElementById('command')
        let score = document.getElementById('totscore')
        function check ()
        {
            let random = Math.floor(Math.random()*10)+1
            if(num.value == random)
            {
                command.innerHTML = "You are Right"
                alert("YOU WON....")
            }
            else
            {
                command.innerHTML = "You are Wrong"
                totscore = totscore-1
                score.innerHTML = "score: "+totscore
            }
        }