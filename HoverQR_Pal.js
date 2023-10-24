// ==UserScript==
// @name         HoverQR Pal
// @namespace    https://github.com/aoguai/HoverQR_Pal
// @updateURL       https://raw.githubusercontent.com/aoguai/HoverQR_Pal/main/HoverQR_Pal.js
// @downloadURL     https://raw.githubusercontent.com/aoguai/HoverQR_Pal/main/HoverQR_Pal.js
// @version      0.1.20231024
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LmNjZjg0ZTAsIDIwMjIvMDUvMTktMTA6NTk6NDcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMTAtMjRUMjA6MDQ6NDIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQyMDowNDo0MiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuvW6xgAAALWSURBVDiNbZJPaxtXFMV/TxrPoJFsJEENkQ0G46JqrFh2Xsm2u3bbVaEYh1Jw+o9CaehH6Co0paVNSwqB1ots+iUCbUjTDGnTsS1hZmNkEWMztkczGo1GmtfNKHiRC4f7OI9377nnPiGlvHJwcPCWECIvhMgJIXJksby8/BhQruteB1BKpSsrK4+ASafTuV6v1x9qgO77/gNeHdeA9Pz8fGdKOI7zQ7PZ/C4Igt+BKxqgAUgpZXbOA8K27T+BGUBl928C6e7u7rZt2wdSytcBLZc9AJixbfsv27YfAXrGGcCMaZr3M04XQuSr1SqO43wBaBownVm7JH3mUs43Go2d/f39m0AKqCiK7sVx/Bnw7csCh4eH1+bn528JIfLdbnfjUtG02+2uDwaDD6rVKr7vPyuXy/dGo9FTQLzsenJy8v0rTMwDuePj49tSynfa7fbmeDy+cXp6+pOUch1ASCnfAErZvMZUdqYszSCyPAYSYJgh1AC1t7e3bVnWb+12+waQz/6CKJVK/y0sLDwH6HQ6m0qpVCk1MU3zSRAEV1dXV7/RAKIougnsxHG8Pjc31wLwPA9AHB0dCQCl1GaxWCQMQ4Anw+HwE+BObrpnYNJqtb70ff+553lIKd+t1+sPgiBo9vv9rwEMwyAMQ5aWlmwp5RqQ5mu1WuXs7Ezv9XrbSZK8ME3TEUKc9Hq998fj8YvRaPQasFYqlb66uLh4O0kSarXaz5kXcQ6YAKmu60+VUpMMaaVSudrv961isfgsjuN/FxcX/1ZK3S8UCr8AieM4HwNpDpgMh8NPLcv6MQiCNc/ztgzD2PI87x+l1DhN05Gu6zYwbDQadwuFwmPXdTfiOP4cmEwVAIyiKNo2DGPD8zxardZHjUbjbhAEzcFg8GG2tjgMw40kSX6d+qYBo9nZ2feAYblc3gJylUpFAAGQWpZ1x3XdP4AQmDSbzdudTudhsVicAMn/jJJR1PBKBXcAAAAASUVORK5CYII=
// @description  HoverQR Pal 将在你的鼠标在页面的图片上悬停时，帮助你识别二维码。
// @author       aoguai
// @copyright    2023, aoguai (https://github.com/aoguai)
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @require      https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js
// ==/UserScript==

(function() {
    // 创建一个新的img元素用于显示图片
    const imgElement = document.createElement("img");
    imgElement.style.position = "absolute";
    imgElement.style.display = "none";
    imgElement.style.cursor = "pointer"; // 允许点击图片
    imgElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LmNjZjg0ZTAsIDIwMjIvMDUvMTktMTA6NTk6NDcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMTAtMjRUMjA6MDQ6NDIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQyMDowNDo0MiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuvW6xgAAALWSURBVDiNbZJPaxtXFMV/TxrPoJFsJEENkQ0G46JqrFh2Xsm2u3bbVaEYh1Jw+o9CaehH6Co0paVNSwqB1ots+iUCbUjTDGnTsS1hZmNkEWMztkczGo1GmtfNKHiRC4f7OI9377nnPiGlvHJwcPCWECIvhMgJIXJksby8/BhQruteB1BKpSsrK4+ASafTuV6v1x9qgO77/gNeHdeA9Pz8fGdKOI7zQ7PZ/C4Igt+BKxqgAUgpZXbOA8K27T+BGUBl928C6e7u7rZt2wdSytcBLZc9AJixbfsv27YfAXrGGcCMaZr3M04XQuSr1SqO43wBaBownVm7JH3mUs43Go2d/f39m0AKqCiK7sVx/Bnw7csCh4eH1+bn528JIfLdbnfjUtG02+2uDwaDD6rVKr7vPyuXy/dGo9FTQLzsenJy8v0rTMwDuePj49tSynfa7fbmeDy+cXp6+pOUch1ASCnfAErZvMZUdqYszSCyPAYSYJgh1AC1t7e3bVnWb+12+waQz/6CKJVK/y0sLDwH6HQ6m0qpVCk1MU3zSRAEV1dXV7/RAKIougnsxHG8Pjc31wLwPA9AHB0dCQCl1GaxWCQMQ4Anw+HwE+BObrpnYNJqtb70ff+553lIKd+t1+sPgiBo9vv9rwEMwyAMQ5aWlmwp5RqQ5mu1WuXs7Ezv9XrbSZK8ME3TEUKc9Hq998fj8YvRaPQasFYqlb66uLh4O0kSarXaz5kXcQ6YAKmu60+VUpMMaaVSudrv961isfgsjuN/FxcX/1ZK3S8UCr8AieM4HwNpDpgMh8NPLcv6MQiCNc/ztgzD2PI87x+l1DhN05Gu6zYwbDQadwuFwmPXdTfiOP4cmEwVAIyiKNo2DGPD8zxardZHjUbjbhAEzcFg8GG2tjgMw40kSX6d+qYBo9nZ2feAYblc3gJylUpFAAGQWpZ1x3XdP4AQmDSbzdudTudhsVicAMn/jJJR1PBKBXcAAAAASUVORK5CYII=";

    // 用于保存上一个图片的src
    let prevImgSrc = "";

    // 用于控制图片是否隐藏的变量
    let hideTimeout;

    // 释放不再需要的对象URL以减少内存占用
    function releaseObjectURL(objectURL) {
        URL.revokeObjectURL(objectURL);
    }

    // 定义一个函数来识别二维码
    function decodeQRCode(imageSrc) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: imageSrc,
            responseType: 'arraybuffer',
            onload: function(response) {
                var arrayBuffer = response.response;

                // 创建一个新的 Image 对象
                var image = new Image();

                image.onload = function() {
                    // 获取 Canvas 上下文
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    canvas.width = image.width;
                    canvas.height = image.height;

                    // 绘制图像到 Canvas
                    ctx.drawImage(image, 0, 0, image.width, image.height);

                    // 获取图像数据
                    var imageData = ctx.getImageData(0, 0, image.width, image.height);

                    // 使用 jsQR 函数解码图像
                    var code = jsQR(imageData.data, image.width, image.height, {
                        inversionAttempts: "dontInvert"
                    });

                    if (code) {
                        // 显示二维码内容在自定义弹出框中
                        showCustomDialog("识别到的二维码内容", code.data);
                    } else {
                        alert("未能识别二维码。");
                    }

                    // 释放不再需要的对象URL
                    releaseObjectURL(objectURL);
                };

                // 设置 Image 对象的 src
                image.src = URL.createObjectURL(new Blob([new Uint8Array(arrayBuffer)]));
            },
            onerror: function(error) {
                console.error('Error fetching image data:', error);
            }
        });
    }

    // 创建自定义弹出框
    function showCustomDialog(title, content) {
        const dialog = document.createElement("div");
        dialog.style.position = "absolute";
        dialog.style.left = "50%";
        dialog.style.top = "50%";
        dialog.style.transform = "translate(-50%, -50%)";
        dialog.style.background = "white";
        dialog.style.border = "1px solid #ccc";
        dialog.style.padding = "1em";
        dialog.style.zIndex = "1000";

        const dialogTitle = document.createElement("div");
        dialogTitle.textContent = title;
        dialogTitle.style.fontSize = "1em";
        dialogTitle.style.fontWeight = "bold";

        const dialogContent = document.createElement("div");
        dialogContent.textContent = content;

        const closeButton = document.createElement("button");
        closeButton.textContent = "关闭";
        closeButton.style.marginTop = "1em";
        closeButton.addEventListener("click", () => {
            document.body.removeChild(dialog);
        });

        dialog.appendChild(dialogTitle);
        dialog.appendChild(dialogContent);
        dialog.appendChild(closeButton);

        document.body.appendChild(dialog);
    }

    // 监听鼠标移动事件，并在鼠标移动时显示图片在图片右下角
    document.addEventListener("mousemove", (event) => {
        if (event.target.tagName === "IMG" && event.target !== imgElement) {
            // 获取图片位置
            const imgRect = event.target.getBoundingClientRect();

            // 设置图片的位置
            imgElement.style.left = imgRect.left + imgRect.width - imgElement.width + "px";
            imgElement.style.top = imgRect.top + imgRect.height - imgElement.height + 16 + "px";

            // 获取上一个图片的src
            prevImgSrc = event.target.src;

            // 将图片添加到页面中
            document.body.appendChild(imgElement);
            imgElement.style.display = "block"; // 显示图片

            // 取消之前的隐藏计时器（如果存在）
            clearTimeout(hideTimeout);
        } else {
            // 如果鼠标不在图片上，延迟2秒后隐藏图片
            hideTimeout = setTimeout(() => {
                imgElement.style.display = "none";
            }, 2000);
        }
    });

    // 点击图片时，隐藏图片
    imgElement.addEventListener("click", () => {
        imgElement.style.display = "none";
        if (prevImgSrc) {
            decodeQRCode(prevImgSrc);
        }
    });
})();
