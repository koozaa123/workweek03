import { getContext, keys } from "./week03-module";

document.addEventListener("DOMContentLoaded", function() {
    // codeing here
    const ctx = getContext("myCanvas");

    const player = {
        x : 300,
        y : 200,
        size : 50, // width and hight
        color : "green",
    };

    function draw() {
        ctx.fillStyle = "rgb(150, 255, 255)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // update data/input "wasd" keys
        if(keys["a"]) {
            player.x -= 0.1;
        }

        //shape
        ctx.save();
        ctx.translate(player.x, player.y);
        ctx.fillStyle = player.color;
        ctx.fillRect(
            -player.size / 2,
            -player.size / 2,
            player.size, player.size);
        ctx.restore;


        requestAnimationFrame(draw); 
    }
    draw();
});