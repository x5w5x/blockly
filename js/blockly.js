
  //工具箱设置

var toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "变量",
      "colour": "#A569BD",  // 使用HEX颜色代码
      "custom": "VARIABLE",
      "contents": [
        {
          "kind": "block",
          "type": "variables_set",
          "message0": "设置 %1 为 %2",
          "args0": [
            {"type": "field_variable", "name": "VAR", "variable": "item"},
            {"type": "input_value", "name": "VALUE"}
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#A569BD",
          "tooltip": "创建或修改变量值",
          "helpUrl": "https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks"
        },
        {
          "kind": "block",
          "type": "variables_get",
          "message0": "%1",
          "args0": [{"type": "field_variable", "name": "VAR", "variable": "item"}],
          "output": null,
          "colour": "#A569BD",
          "tooltip": "获取变量值"
        }
      ]
    },
    {
      "kind": "category",
      "name": "函数",
      "colour": "#3498DB",
      "custom": "PROCEDURE",
      "contents": [
        {
          "kind": "block",
          "type": "procedures_defnoreturn",
          "message0": "函数 %1 参数 %2 执行 %3",
          "args0": [
            {"type": "field_input", "name": "NAME", "text": "函数名称"},
            {"type": "input_dummy"},
            {"type": "input_statement", "name": "STACK"}
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#3498DB",
          "tooltip": "定义没有返回值的函数"
        },
        {
          "kind": "block",
          "type": "procedures_callnoreturn",
          "message0": "调用 %1",
          "args0": [{"type": "field_input", "name": "NAME", "text": "函数名称"}],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#3498DB"
        }
      ]
    },
       
        



     
    {
      "kind": "category",
      "name": "文本",
      "colour":210,
      "contents": [
        {"kind": "block",
          "type": "math_number",
          "message0":"%1",
          "args0":[{
            "type":"input_value",
            "name":"NUM",
            "check":"Number",
          }],
          "output":"Number",
          
        },{
          "kind": "block",
          "type": "text_print",
          "message0": "打印 %1",
          "args0": [{"type": "input_value", "name": "TEXT", "check": "String"}],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#2ECC71",
          "tooltip": "输出文本到控制台"
        },
       
        {
          "kind": "block",
          "type": "text",
          "message0":"%1",
          "args0":[{
            "type":"field_input",
            "name":"TEXT",
            "text":""


          }],
          "output":"Strong"
        },

        {
          "kind": "block",
          "type": "logic_boolean",
          "message0": "%1",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "BOOL",
              "options": [
                [
                  "TRUE",
                  "TRUE"
                ],
                [
                  "FALSE",
                  "FALSE"
                ]
              ]
            }
          ],
          "output": "Boolean"
        }, {
          "kind": "block",
          "type": "text_join"
        }, {
          "kind": "block",
          "type": "text_append"
        }, {
          "kind": "block",
          "type": "text_length"
        }, {
          "kind": "block",
          "type": "text_isEmpty"
        }, {
          "kind": "block",
          "type": "text_indexOf"
        }, {
          "kind": "block",
          "type": "text_charAt"
        }, {
          "kind": "block",
          "type": "text_getSubstring"
        }, {
          "kind": "block",
          "type": "text_changeCase"
        }, {
          "kind": "block",
          "type": "text_trim"
        }, {
          "kind": "block",
          "type": "text_prompt_ext"
        },
        
      ]
    },

    {
      "kind": "category",
      "name": "列表",
      "colour":270,
      "contents": [
        {
          "kind": "block",
          "type": "lists_create_with"
        }, 
        {
          "kind": "block",
          "type": "lists_repeat"
        },
        {
          "kind": "block",
          "type": "lists_length"
        }, {
          "kind": "block",
          "type": "lists_isEmpty"
        }, {
          "kind": "block",
          "type": "lists_indexOf"
        }, {
          "kind": "block",
          "type": "lists_getIndex"
        }, {
          "kind": "block",
          "type": "lists_setIndex"
        }, {
          "kind": "block",
          "type": "lists_getSublist"
        }, {
          "kind": "block",
          "type": "lists_split"
        }, {
          "kind": "block",
          "type": "lists_sort"
        },
        // {
        //   "kind": "block",
        //   "type": "text_split"
        // },
        // {
        //   "kind": "block",
        //   "type": "text_substring"
        // },
        
      ]
    },    
    {
      "kind": "category",
      "name": "输出",
      "colour":220,
      "contents": [
        {
          "kind": "block",
          "type": "text_print"
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
      "name": "计算",
      "colour":230,
      "contents": [
        {
          "kind": "block",
          "type": "math_number"
        },{
          "kind": "block",
          "type": "math_arithmetic"
        },{
          "kind": "block",
          "type": "math_single"
        },{
          "kind": "block",
          "type": "math_trig"
        },{
          "kind": "block",
          "type": "math_number_property"
        },{
          "kind": "block",
          "type": "math_constant"
        },{
          "kind": "block",
          "type": "math_change"
        },{
          "kind": "block",
          "type": "math_round"
        },{
          "kind": "block",
          "type": "math_on_list"
        },{
          "kind": "block",
          "type": "math_modulo"
        },{
          "kind": "block",
          "type": "math_constrain"
        },{
          "kind": "block",
          "type": "math_random_int"
        },{
          "kind": "block",
          "type": "math_random_float"
        },
       
        
        // {
        //   "kind": "block",
        //   "type": "logic_boolean"
        // }
      ]
    },
    {
      "kind": "category",
      "name": "判断",
      "colour":240,
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "controls_ifelse"
        },
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
          "type": "logic_negate"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        },
        {
          "kind": "block",
          "type": "logic_null"
        },
        {
          "kind": "block",
          "type": "logic_ternary"
        }
      ]
    },
    {
      "kind": "category",
      "name": "循环",
      "colour":250,
      "contents": [
        {
          "kind": "block",
          "type": "controls_for"
        },
        {
          "kind": "block",
          "type": "controls_repeat"
        },
        {
          "kind": "block",
          "type": "controls_repeat_ext",
         



          
        },
        {
          "kind": "block",
          "type": "controls_whileUntil"
        },
        {
          "kind": "block",
          "type": "controls_forEach",
          
        }
      ]
    },
    
    {
      "kind": "category",
      "name": "其他",
      "colour":270,
      "contents": [
        // {
        //   "kind": "block",
        //   "type": "custom_hello"
        // },
        
        
        // {
        //   "kind": "block",
        //   "type": "text_split"
        // },
        // {
        //   "kind": "block",
        //   "type": "text_substring"
        // },
        {
          "kind": "block",
          "type": "text_print"
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
  
  
  // 在页面加载完成后调整Blockly工作区大小

  

  
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
var text='helloword';
function CodePython(){
  var code = Blockly.Python.workspaceToCode(workspace);
  console.log(code);
  // text=Blockly.Python.workspaceToCode(workspace);
  document.getElementById('generatedCode').textContent = code;
  text=code;
}

function CodeLua(){
  var code = Blockly.Lua.workspaceToCode(workspace);
  console.log(code);
  // text=Blockly.Lua.workspaceToCode(workspace);
  document.getElementById('generatedCode').textContent = code;
  text=code;
}


function CodeJavaScript(){
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log(code);
  // text=Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('generatedCode').textContent = code;
  text=code;
}


// function CodeJavaScript(){
//   var code = Blockly.JavaScript.workspaceToCode(workspace);
//   console.log(code);
//   document.getElementById('generatedCode').textContent = code;
// }


function CodePhp(){
  var code = Blockly.PHP.workspaceToCode(workspace);
  console.log(code);
  // text=Blockly.PHP.workspaceToCode(workspace);
  document.getElementById('generatedCode').textContent = code;
  text=code;
}


function CodeDart(){
  var code = Blockly.Dart.workspaceToCode(workspace);
  console.log(code);
  // text=Blockly.Dart.workspaceToCode(workspace);
  document.getElementById('generatedCode').textContent = code;
  text=code;
}

workspace.addChangeListener(CodePython);

// 根据选择动态改变代码
function loadcode(selectedValue){
  console.log(selectedValue)
  switch(selectedValue){
        case 'Python':
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

        document.getElementById('button').addEventListener('click',async function(){

          if (navigator && navigator.permissions && navigator.permissions.query) {
              try {
                  const fileHandle = await window.showSaveFilePicker({
                      types: [
                          {
                              description: '源文件',
                              accept: {
                                  'text/plain': ['.txt'],
                              },
                          },
                      ],
                  });
      
                  const writable = await fileHandle.createWritable();
                  await writable.write(text);
                  await writable.close();
      
                  alert('文件已保存！');
              } catch (error) {
                  console.error('保存文件时发生错误:', error);
                  alert('保存文件时发生错误，请检查控制台日志。');
              }
          } else {
              alert('您的浏览器不支持文件保存功能。');
          }
      });
workspace.addChangeListener(CodeDart);

































