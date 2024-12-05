
  //工具箱设置

var toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "基础",
      "colour":200,
      "contents": [
        {
          "kind": "block",
          "type": "text"
        },
      ]
    },
    {
      "kind": "category",
      "name": "计算",
      "colour":210,
      "contents": [
        {
          "kind": "block",
          "type": "math_arithmetic"
        },
        {
          "kind": "block",
          "type": "math_single"
        },
        {
          "kind": "block",
          "type": "math_trig"
        },
        // {
        //   "kind": "block",
        //   "type": "math_constante"
        // },
        {
          "kind": "block",
          "type": "math_change"
        },
        {
          "kind": "block",
          "type": "math_round"
        },
        {
          "kind": "block",
          "type": "math_on_list"
        },
        {
          "kind": "block",
          "type": "math_modulo"
        },{
          "kind": "block",
          "type": "math_constrain"
        },{
          "kind": "block",
          "type": "math_random_float"
        },
      ]
    },
    {
      "kind": "category",
      "name": "判断",
      "colour":220,
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "controls_for"
        },
        {
          "kind": "block",
          "type": "controls_whileUntil"
        }
      ]
    },
    {
      "kind": "category",
      "name": "循环",
      "colour":230,
      "contents": [
        {
          "kind": "block",
          "type": "controls_whileUntil"
        },
        {
          "kind": "block",
          "type": "controls_repeat_ext"
        },
        // {
        //   "kind": "block",
        //   "type": "logic_boolean"
        // }
      ]
    },
    {
      "kind": "category",
      "name": "数组",
      "colour":240,
      "contents": [
        {
          "kind": "block",
          "type": "variables_set"
        },
        {
          "kind": "block",
          "type": "variables_get"
        },
        // {
        //   "kind": "block",
        //   "type": "logic_boolean"
        // }
      ]
    },
    {
      "kind": "category",
      "name": "变量",
      "colour":250,
      "contents": [
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
      ]
    },
    {
      "kind": "category",
      "name": "输入",
      "colour":260,
      "contents": [
        {
          "kind": "block",
          "type": "math_number"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
      ]
    },
    {
      "kind": "category",
      "name": "输出",
      "colour":270,
      "contents": [
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
      ]
    },    
  ]
}














































  //设置共作区
  var workspace = Blockly.inject('blocklyDiv',{
      toolbox:toolbox,
      media:'https://unpkg.com/blockly/media/',
      // 设置网格
      grid:{
  
          spacing:1,
          length:3,
          colour:'#ccc',
          snap:true,
          tras:true
      },
      // 设置滚动条
      move:{
          scrollbars:{
              horizontal:true,
              vertical:true,
          },
          drag:true,
          whell:true,
      },
      // 设置缩放
      zoom:{
          controls:true,
          whell:true,
          startScale:1.0,
          maxScale:3,
          minScale:0.3,
          scaleSpeed:1.2,
      },
      trashcan:true,
      
  })
  
  // 动态调整大小
  
  
  // const onresize = function(e) {
  //   let element = blocklyArea;
  //   let x = 0;
  //   let y = 0;
  //   do {
  //     x += element.offsetLeft;
  //     y += element.offsetTop;
  //     element = element.offsetParent; 
  //   } while (element);
  //   blocklyDiv.style.left = x + 'px';
  //   blocklyDiv.style.top = y + 'px';
  //   blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  //   blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  //   Blockly.svgResize(workspace);
  // };
  // window.addEventListener('resize', onresize, false);
  // onresize();
  

 

//代码显示

// function myUpdateFunction(event) {
//   var code = Blockly.Python.workspaceToCode(workspace);
  
//   console.log(code);
 
//   document.getElementById('generatedCode').textContent = code;
// }
// Blockly.Python.addReservedWords('code');
// Blockly.Python.addReservedWords('myVar');
// workspace.addChangeListener(myUpdateFunction);

// 

// const selectElement = document.getElementById('codename');

// const displayElement = document.getElementById('selectedLanguage');

// const selectedValue = 'Python';
// console.log('你选择的语言是',selectedValue);

//         // 添加change事件监听器

// selectElement.addEventListener('change', function() {

//           const selectedValue = this.value;

//             console.log('你选择的语言是',selectedValue)
//             loadcode(selectedValue)

//         });



// function myUpdateFunction(event) {
//   var code = Blockly.Lua.workspaceToCode(workspace);
  
//   console.log(code);
 
//   document.getElementById('generatedCode').textContent = code;
// }

// workspace.addChangeListener(myUpdateFunction);

//自定义选择语言生成
// python
function CodePython(){
  var code = Blockly.Python.workspaceToCode(workspace);
  console.log(code);
  document.getElementById('generatedCode').textContent = code;
}

function CodeLua(){
  var code = Blockly.Lua.workspaceToCode(workspace);
  console.log(code);
  document.getElementById('generatedCode').textContent = code;
}


function CodeJavaScript(){
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log(code);
  document.getElementById('generatedCode').textContent = code;
}


// function CodeJavaScript(){
//   var code = Blockly.JavaScript.workspaceToCode(workspace);
//   console.log(code);
//   document.getElementById('generatedCode').textContent = code;
// }


function CodePhp(){
  var code = Blockly.PHP.workspaceToCode(workspace);
  console.log(code);
  document.getElementById('generatedCode').textContent = code;
}


function CodeDart(){
  var code = Blockly.Dart.workspaceToCode(workspace);
  console.log(code);
  document.getElementById('generatedCode').textContent = code;
}

workspace.addChangeListener(CodePython);

// 根据选择动态改变代码
function loadcode(selectedValue){
  console.log(selectedValue)
  switch(selectedValue){
        case 'python':
          workspace.addChangeListener(CodePython);
          break;
        
        case 'Javascript':
          workspace.addChangeListener(CodeJavaScript);
          break;

        case 'php':
            workspace.addChangeListener(CodePhp);
            break;

        case 'lua':
            workspace.addChangeListener(CodeLua);
            break;

        case 'dart':
            workspace.addChangeListener(CodeDart);
            break;



  }




}

const selectElement = document.getElementById('codename');

const displayElement = document.getElementById('selectedLanguage');

const selectedValue = 'Python';
console.log('你选择的语言是',selectedValue);

        // 添加change事件监听器

selectElement.addEventListener('change', function() {

          const selectedValue = this.value;

            console.log('你选择的语言是',selectedValue)
            loadcode(selectedValue)

        });


// workspace.addChangeListener(CodeDart);