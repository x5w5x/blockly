
  //工具箱设置

var toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "基础",
      "colour":230,
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
      ]
    },
    {
      "kind": "category",
      "name": "计算",
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
    }
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
  
  
  const onresize = function(e) {
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent; 
    } while (element);
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  

 

//代码显示

function myUpdateFunction(event) {
  var code = Blockly.Python.workspaceToCode(workspace);
  
  console.log(code);
 
  document.getElementById('generatedCode').textContent = code;
}
Blockly.Python.addReservedWords('code');
Blockly.Python.addReservedWords('myVar');
workspace.addChangeListener(myUpdateFunction);