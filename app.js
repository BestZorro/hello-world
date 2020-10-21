var InitDemo = new function()
{
    console.log("UNIT DEMO!");

    var canvas = document.getElementById('game surface');
    var gl = canvas.getContext('webgl');

    if(!gl)
    {
        gl = canvas.getContext("experimental-webgl")
    }
};