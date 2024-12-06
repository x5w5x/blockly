// document.getElementById('button').addEventListener('click',async function(){

//     if (navigator && navigator.permissions && navigator.permissions.query) {
//         try {
//             const fileHandle = await window.showSaveFilePicker({
//                 types: [
//                     {
//                         description: '文本文件',
//                         accept: {
//                             'text/plain': ['.txt'],
//                         },
//                     },
//                 ],
//             });

//             const writable = await fileHandle.createWritable();
//             await writable.write(code);
//             await writable.close();

//             alert('文件已保存！');
//         } catch (error) {
//             console.error('保存文件时发生错误:', error);
//             alert('保存文件时发生错误，请检查控制台日志。');
//         }
//     } else {
//         alert('您的浏览器不支持文件保存功能。');
//     }
// });