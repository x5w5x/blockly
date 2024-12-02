// blockly相关设置


const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "math_number"
      },
      {
        "kind": "block",
        "type": "math_arithmetic"
      },
      {
        "kind": "block",
        "type": "text",
        
      },
      {
        "kind": "block",
        "type": "text_print",
        
      },
      {
        "kind": "block",
        "type": "logic_boolean"
      },
  
  
  {"kind": "block",
  "type": "controls_for",
        "fields": {
          "VAR": {
            "name": "index",
            "type": "Number"
          }
        }
      },
      {
        "kind": "button",
        "text": "A button",
        "callbackKey": "myFirstButtonPressed"
      },
  
  
    ]}
  
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
  
  
  
  // 
//   
// 
workspace.addChangeListener(function (event) {
    // 检查事件类型
    if (event.type == Blockly.Events.CHANGE ||
        event.type == Blockly.Events.CREATE ||
        event.type == Blockly.Events.DELETE) {
      // 更新代码
      // updateCode();
    }
  });


function myUpdateFunction(event) {
  var code = Blockly.Python.workspaceToCode(workspace);
  
  console.log(code);
 
  document.getElementById('generatedCode').textContent = code;
}
Blockly.Python.addReservedWords('code');
Blockly.Python.addReservedWords('myVar');
workspace.addChangeListener(myUpdateFunction);