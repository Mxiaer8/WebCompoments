<template>
    <div class="circle">
        <canvas id="canvas_1" width="200px" height="200px"></canvas>
        <canvas id="canvas_2" width="200px" height="200px"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'Ring-progress-bar',
        methods: {
            show: function (percent, color) {
                var canvas_1 = document.getElementById("canvas_1");
                var canvas_2 = document.getElementById("canvas_2");
                var ctx_1 = canvas_1.getContext('2d');
                var ctx_2 = canvas_2.getContext('2d');
                ctx_1.lineWidth = 10;
                ctx_1.strokeStyle = "#ccc";
                //画底部的灰色圆环
                ctx_1.beginPath();
                ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
                ctx_1.closePath();
                ctx_1.stroke();
                //画底部的进度圆环
                ctx_2.strokeStyle = color || "red";
                ctx_2.lineWidth = 10;
                var timer;
                var angle = 0;
                var percentText = null;
                (function draw() {
                    timer = requestAnimationFrame(draw);
                    ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
                    ctx_2.beginPath();
                    ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, -Math.PI * (1 / 2), angle * Math.PI / 180 - Math.PI * (1 / 2), false);
                    angle++;
                    percentText = parseInt((angle / 360) * 100);
                    if (angle > (percent / 100 * 360)) {
                        percentText = percent;
                        window.cancelAnimationFrame(timer);
                    }
                    ctx_2.stroke();
                    // ctx_2.closePath();
                    ctx_2.save();
                    ctx_2.beginPath();
                    ctx_2.rotate(0 * Math.PI / 180);
                    ctx_2.font = '30px Arial';
                    ctx_2.fillStyle = color || 'red';
                    var text = percentText + '%';
                    ctx_2.fillText(text, 80, 110);
                    ctx_2.restore();
                })()
            },
            setSize(size) {
                var circle = document.getElementsByClassName("circle")[0];
                var canvas_1 = document.getElementById("canvas_1");
                var canvas_2 = document.getElementById("canvas_2");
                circle.style.height = size;
                circle.style.width = size;
                canvas_1.style.width = size;
                canvas_1.style.height = size;
                canvas_2.style.width = size;
                canvas_2.style.height = size;
            }

        }
    }
</script>

<style>
    .circle {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
        background-color: transparent;
    }

    canvas {
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
    }

    #canvas_1 {
        z-index: 1;

    }

    #canvas_2 {
        z-index: 2;
        background-color: transparent;
    }
</style>