import { onMount } from "svelte";
export function pixelate(img) {
    let src = img.src;
    onMount(() => {
        let c = document.createElement("canvas");
        let ctx = c.getContext("2d");
        let img1 = new Image();
        img1.crossOrigin = "anonymous";
        img1.onload = function () {
            let w = img.offsetWidth;
            let h = img.offsetHeight;
            c.width = w;
            c.height = h;
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, w, h);
            ctx.drawImage(img1, 0, 0);
            var pixelArr = ctx.getImageData(0, 0, w, h).data;
            let sample_size = 20;
            for (let y = 0; y < h; y += sample_size) {
                for (let x = 0; x < w; x += sample_size) {
                    let p = (x + y * w) * 4;
                    ctx.fillStyle =
                        "rgba(" +
                            pixelArr[p] +
                            "," +
                            pixelArr[p + 1] +
                            "," +
                            pixelArr[p + 2] +
                            "," +
                            pixelArr[p + 3] +
                            ")";
                    ctx.fillRect(x, y, sample_size, sample_size);
                }
            }
            let img2 = new Image();
            img2.src = c.toDataURL("image/jpeg");
            img2.width = img.offsetWidth;
            img2.height = img.offsetHeight;
            src = img2.src;
        };
        img1.src = src;
    });
}
