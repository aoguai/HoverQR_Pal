// ==UserScript==
// @name         HoverQR Pal
// @namespace    https://github.com/aoguai/HoverQR_Pal
// @updateURL       https://raw.githubusercontent.com/aoguai/HoverQR_Pal/main/dict/HoverQR_Pal.user.js
// @downloadURL     https://raw.githubusercontent.com/aoguai/HoverQR_Pal/main/dict/HoverQR_Pal.user.js
// @version      0.2.0.20231025
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LmNjZjg0ZTAsIDIwMjIvMDUvMTktMTA6NTk6NDcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMTAtMjRUMjA6MDQ6NDIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQyMDowNDo0MiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuvW6xgAAALWSURBVDiNbZJPaxtXFMV/TxrPoJFsJEENkQ0G46JqrFh2Xsm2u3bbVaEYh1Jw+o9CaehH6Co0paVNSwqB1ots+iUCbUjTDGnTsS1hZmNkEWMztkczGo1GmtfNKHiRC4f7OI9377nnPiGlvHJwcPCWECIvhMgJIXJksby8/BhQruteB1BKpSsrK4+ASafTuV6v1x9qgO77/gNeHdeA9Pz8fGdKOI7zQ7PZ/C4Igt+BKxqgAUgpZXbOA8K27T+BGUBl928C6e7u7rZt2wdSytcBLZc9AJixbfsv27YfAXrGGcCMaZr3M04XQuSr1SqO43wBaBownVm7JH3mUs43Go2d/f39m0AKqCiK7sVx/Bnw7csCh4eH1+bn528JIfLdbnfjUtG02+2uDwaDD6rVKr7vPyuXy/dGo9FTQLzsenJy8v0rTMwDuePj49tSynfa7fbmeDy+cXp6+pOUch1ASCnfAErZvMZUdqYszSCyPAYSYJgh1AC1t7e3bVnWb+12+waQz/6CKJVK/y0sLDwH6HQ6m0qpVCk1MU3zSRAEV1dXV7/RAKIougnsxHG8Pjc31wLwPA9AHB0dCQCl1GaxWCQMQ4Anw+HwE+BObrpnYNJqtb70ff+553lIKd+t1+sPgiBo9vv9rwEMwyAMQ5aWlmwp5RqQ5mu1WuXs7Ezv9XrbSZK8ME3TEUKc9Hq998fj8YvRaPQasFYqlb66uLh4O0kSarXaz5kXcQ6YAKmu60+VUpMMaaVSudrv961isfgsjuN/FxcX/1ZK3S8UCr8AieM4HwNpDpgMh8NPLcv6MQiCNc/ztgzD2PI87x+l1DhN05Gu6zYwbDQadwuFwmPXdTfiOP4cmEwVAIyiKNo2DGPD8zxardZHjUbjbhAEzcFg8GG2tjgMw40kSX6d+qYBo9nZ2feAYblc3gJylUpFAAGQWpZ1x3XdP4AQmDSbzdudTudhsVicAMn/jJJR1PBKBXcAAAAASUVORK5CYII=
// @description  HoverQR Pal 将在你的鼠标在页面的图片上悬停时，帮助你识别二维码。
// @author       aoguai
// @copyright    2023, aoguai (https://github.com/aoguai)
// @license Apache License 2.0
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @require      https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js
// ==/UserScript==

(function() {
    // 创建一个新的img元素用于显示图片
    let imgElement = document.createElement("img");
    // 添加一个class name
    imgElement.classList.add("HoverQR-Pal-log-img");
    // 使用足够高的值，保证位于最前
    imgElement.style.zIndex = "9999999";

    // 设置固定宽高为 16px
    imgElement.style.width = "16px";
    imgElement.style.height = "16px";

    // 设置定位属性
    imgElement.style.position = "absolute";
    imgElement.style.display = "none";
    imgElement.style.cursor = "pointer"; // 允许点击图片
    imgElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgMTE2LmNjZjg0ZTAsIDIwMjIvMDUvMTktMTA6NTk6NDcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMTAtMjRUMjA6MDQ6NDIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTEwLTI0VDIwOjA2OjAxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjFjNGUxOS1lOTYyLTg5NDctOTIwZi1jMmFiYzg2NGEzOTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMWM0ZTE5LWU5NjItODk0Ny05MjBmLWMyYWJjODY0YTM5MSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQyMDowNDo0MiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuvW6xgAAALWSURBVDiNbZJPaxtXFMV/TxrPoJFsJEENkQ0G46JqrFh2Xsm2u3bbVaEYh1Jw+o9CaehH6Co0paVNSwqB1ots+iUCbUjTDGnTsS1hZmNkEWMztkczGo1GmtfNKHiRC4f7OI9377nnPiGlvHJwcPCWECIvhMgJIXJksby8/BhQruteB1BKpSsrK4+ASafTuV6v1x9qgO77/gNeHdeA9Pz8fGdKOI7zQ7PZ/C4Igt+BKxqgAUgpZXbOA8K27T+BGUBl928C6e7u7rZt2wdSytcBLZc9AJixbfsv27YfAXrGGcCMaZr3M04XQuSr1SqO43wBaBownVm7JH3mUs43Go2d/f39m0AKqCiK7sVx/Bnw7csCh4eH1+bn528JIfLdbnfjUtG02+2uDwaDD6rVKr7vPyuXy/dGo9FTQLzsenJy8v0rTMwDuePj49tSynfa7fbmeDy+cXp6+pOUch1ASCnfAErZvMZUdqYszSCyPAYSYJgh1AC1t7e3bVnWb+12+waQz/6CKJVK/y0sLDwH6HQ6m0qpVCk1MU3zSRAEV1dXV7/RAKIougnsxHG8Pjc31wLwPA9AHB0dCQCl1GaxWCQMQ4Anw+HwE+BObrpnYNJqtb70ff+553lIKd+t1+sPgiBo9vv9rwEMwyAMQ5aWlmwp5RqQ5mu1WuXs7Ezv9XrbSZK8ME3TEUKc9Hq998fj8YvRaPQasFYqlb66uLh4O0kSarXaz5kXcQ6YAKmu60+VUpMMaaVSudrv961isfgsjuN/FxcX/1ZK3S8UCr8AieM4HwNpDpgMh8NPLcv6MQiCNc/ztgzD2PI87x+l1DhN05Gu6zYwbDQadwuFwmPXdTfiOP4cmEwVAIyiKNo2DGPD8zxardZHjUbjbhAEzcFg8GG2tjgMw40kSX6d+qYBo9nZ2feAYblc3gJylUpFAAGQWpZ1x3XdP4AQmDSbzdudTudhsVicAMn/jJJR1PBKBXcAAAAASUVORK5CYII=";

    // 用于保存上一个图片的src
    let prevImgSrc = "";

    // 用于控制图片是否隐藏的变量
    let hideTimeout;

    //鼠标位置
    let mouseX, mouseY;

    // 添加一个标志来跟踪图片是否已经显示
    let isImageVisible = false;

    // 用于存储直接父元素
    let parentElement = null;

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
                        showCustomDialog("识别到的二维码内容：", code.data);
                    } else {
                        showCustomDialog("未识别到二维码。");
                    }

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
        dialog.classList.add("HoverQR-Dialog-div");
        dialog.style.zIndex = "1000";

        const dialogTitle = document.createElement("div");
        dialogTitle.classList.add("HoverQR-Dialog-Div-title");
        dialogTitle.textContent = title;


        dialog.appendChild(dialogTitle);

        if (content) {
            const dialogContent = document.createElement("div");
            dialogContent.classList.add("HoverQR-Dialog-Div-content");
            dialogContent.textContent = content;


            const copyButton = document.createElement("button");
            copyButton.classList.add("HoverQR-Dialog-button");
            copyButton.textContent = "复制";
            copyButton.addEventListener("click", () => {
                // 使用 GM_setClipboard 复制内容到剪切板
                GM_setClipboard(content, "text");
                // 修改按钮文本并禁用按钮
                copyButton.textContent = "复制成功";
                copyButton.disabled = true;

                // 延时一秒后关闭 dialog
                setTimeout(() => {
                    document.body.removeChild(dialog);
                }, 1000);
            });

            const closeButton = document.createElement("button");
            closeButton.classList.add("HoverQR-Dialog-button");
            closeButton.textContent = "关闭";
            closeButton.addEventListener("click", () => {
                document.body.removeChild(dialog);
            });

            dialog.appendChild(dialogContent);
            dialog.appendChild(copyButton);
            dialog.appendChild(closeButton);
        }else{
            // 延时后关闭 dialog
            setTimeout(() => {
                document.body.removeChild(dialog);
            }, 1500);
        }

        document.body.appendChild(dialog);

        // 添加样式
        GM_addStyle(`
        .HoverQR-Dialog-div {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border: 1px solid #ccc;
            padding: 1em;
        }
        .HoverQR-Dialog-div > .HoverQR-Dialog-div:first-child {
            font-size: 1em;
            font-weight: bold;
        }
        .HoverQR-Dialog-button {
            margin: 1em 1em 0 1em;
        }
    `);
    }



    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // 检查鼠标是否在直接父元素内部
    function isMouseInsideParent() {
        if (!parentElement) {
            return false;
        }

        const parentRect = parentElement.getBoundingClientRect();
        const parentLeft = parentRect.left + window.scrollX;
        const parentTop = parentRect.top + window.scrollY;
        const parentWidth = parentRect.width;
        const parentHeight = parentRect.height;

        return (
            mouseX >= parentLeft &&
            mouseY >= parentTop &&
            mouseX <= parentLeft + parentWidth &&
            mouseY <= parentTop + parentHeight
        );
    }

    // 监听鼠标移动事件，并在鼠标移动时显示图片在图片右下角
    document.addEventListener("mousemove", (event) => {
        if (event.target.tagName === "IMG" && event.target !== imgElement) {

            // 获取图片位置
            const imgRect = event.target.getBoundingClientRect();
            const imgLeft = imgRect.left + window.scrollX;
            const imgTop = imgRect.top + window.scrollY;
            const imgWidth = imgRect.width;
            const imgHeight = imgRect.height;


            // 获取图片的直接父级元素
            parentElement = event.target.parentElement;

            if (parentElement) {
                // 获取上一个图片的src
                prevImgSrc = event.target.src;

                // 将图片添加到页面中
                document.body.appendChild(imgElement);
                imgElement.style.display = "block"; // 显示图片
                isImageVisible = true; // 更新标志

                const parentRect = parentElement.getBoundingClientRect();
                const parentLeft = parentRect.left + window.scrollX;
                const parentTop = parentRect.top + window.scrollY;
                const parentWidth = parentRect.width;
                const parentHeight = parentRect.height;

                // 检查图片位置是否在直接父级元素内部
                if (imgLeft >= parentLeft && imgTop >= parentTop &&
                    imgLeft + imgWidth <= parentLeft + parentWidth &&
                    imgTop + imgHeight <= parentTop + parentHeight) {
                    // 设置图片的位置为直接父级元素的右下角坐标
                    imgElement.style.left = (imgLeft + imgWidth - imgElement.width) + "px";
                    imgElement.style.top = (parentTop + parentHeight - imgElement.height + 16) + "px";
                } else {
                    // 如果图片不在直接父级元素内，使用默认位置
                    imgElement.style.left = (imgLeft + imgWidth - imgElement.width) + "px";
                    imgElement.style.top = (imgTop + imgHeight - imgElement.height + 16) + "px";
                }
            } else {
                // 如果没有直接父级元素，使用默认位置
                imgElement.style.left = (imgLeft + imgWidth - imgElement.width) + "px";
                imgElement.style.top = (imgTop + imgHeight - imgElement.height + 16) + "px";
            }

            // 取消之前的隐藏计时器（如果存在）
            clearTimeout(hideTimeout);
        } else if (!event.target.classList.contains("HoverQR-Pal-log-img")){
            // 如果鼠标不在图片上，延迟2秒后隐藏图片
            hideTimeout = setTimeout(() => {
                if (!isMouseInsideParent()) {
                    imgElement.style.display = "none";
                    isImageVisible = false; // 更新标志
                    parentElement = null; // 重置直接父元素
                }
            }, 2000);
        } else {
            // 取消之前的隐藏计时器（如果存在）
            clearTimeout(hideTimeout);
            imgElement.style.display = "block"; // 显示图片
            isImageVisible = true; // 更新标志
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
