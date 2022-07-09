ctx = document.getElementById('content');
inputField = document.getElementById('num-input')
btn = document.getElementById('submit-btn')




function get_values(num){
    vals = [];
    curr = num;
    
    while(true){
        
        vals.push(curr)
        if(curr == 1){
            break
        }
        else if(curr % 2 == 0){
            curr = curr / 2
        }else
            curr = 3 * curr + 1
        }
    console.log(vals, [...Array(vals.length).keys()])

    return [vals, [...Array(vals.length).keys()]]


}

function update_plot(){
    ctx.innerHtml = "";
    let inp = inputField.value
    let x, y
    [y , x] = get_values(parseInt(inp))

    Plotly.newPlot( ctx, [{
        x: x,
        y: y, 
        mode: 'lines+markers', }],
         {
        margin: { t: 0 } },

         );
}


Plotly.newPlot( ctx, [{
	x: get_values(3)[1],
	y: get_values(3)[0] }], {
	margin: { t: 0 } } );



btn.addEventListener('click', update_plot)


