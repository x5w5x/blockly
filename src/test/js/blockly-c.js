// 在blockly.js中添加以下内容

// ================= 增强变量管理 =================
let variableStore = {};
const variableObservers = new Set();

// 自定义变量块
Blockly.Blocks['variables_set_custom'] = {
  init() {
    this.appendValueInput('VALUE')
      .appendField(new Blockly.FieldVariable('item'), 'VAR')
      .appendField('=');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip('设置变量值');
  }
};

Blockly.JavaScript['variables_set_custom'] = function(block) {
  const varName = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', 
    Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';
  return `${varName} = ${value};\n`;
};

// ================= 增强逻辑判断 =================
Blockly.Blocks['controls_if_enhanced'] = {
  init() {
    this.appendValueInput('IF0')
      .setCheck('Boolean')
      .appendField('如果');
    this.appendStatementInput('DO0')
      .appendField('执行');
    this.appendValueInput('IF1')
      .setCheck('Boolean')
      .appendField('否则如果');
    this.appendStatementInput('DO1')
      .appendField('执行');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(240);
    this.setTooltip('多条件判断结构');
  },
  validate() {
    if (!this.getInput('IF0').connection.targetConnection) {
      return '必须填写初始条件';
    }
  }
};

// ================= 代码执行功能 =================
function executeCode(code) {
  const resultDiv = document.getElementById('executionResult');
  resultDiv.style.display = 'block';
  
  try {
    const sandbox = new Function(`
      "use strict";
      let $result = '';
      const $vars = ${JSON.stringify(variableStore)};
      
      const $console = {
        log: (...args) => $result += args.join(' ') + '\\n'
      };
      
      ${code.replace(/console\.log/g, '$console.log')}
      
      return { 
        output: $result, 
        variables: $vars 
      };
    `);
    
    const result = sandbox();
    variableStore = result.variables;
    updateVariablePanel();
    
    resultDiv.innerHTML = `
      <div style="color:green">✓ 执行成功</div>
      <pre>输出结果：\n${result.output}</pre>
    `;
  } catch (e) {
    resultDiv.innerHTML = `
      <div style="color:red">✗ 执行错误</div>
      <pre>${e.toString()}</pre>
    `;
  }
}

// ================= 变量监视面板 =================
function updateVariablePanel() {
  const panel = document.getElementById('variablePanel') || createVariablePanel();
  panel.innerHTML = Object.entries(variableStore)
    .map(([name, value]) => `
      <div class="variable-item">
        <span>${name}</span>
        <span>${JSON.stringify(value)}</span>
      </div>
    `).join('');
}

function createVariablePanel() {
  const div = document.createElement('div');
  div.className = 'variable-panel';
  div.id = 'variablePanel';
  div.innerHTML = '<h3>当前变量</h3>';
  document.body.appendChild(div);
  return div;
}

// ================= 更新工具箱配置 =================
// 在toolbox中添加增强块
toolbox.contents.unshift({
  "kind": "category",
  "name": "增强功能",
  "colour": 280,
  "contents": [
    {"kind": "block", "type": "variables_set_custom"},
    {"kind": "block", "type": "controls_if_enhanced"}
  ]
});

// ================= 初始化执行功能 =================
// 在页面加载后添加运行按钮
document.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.createElement('button');
  runBtn.textContent = '▶️ 运行代码';
  runBtn.style.marginLeft = '1rem';
  runBtn.onclick = () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    executeCode(code);
  };
  document.querySelector('.controls').appendChild(runBtn);
  
  // 初始化变量面板
  createVariablePanel();
});

// ================= 更新代码生成监听 =================
// 修改原来的loadcode函数
function loadcode(selectedValue) {
  workspace.removeChangeListener(CodePython);
  workspace.removeChangeListener(CodeJavaScript);
  workspace.removeChangeListener(CodePhp);
  workspace.removeChangeListener(CodeLua);
  workspace.removeChangeListener(CodeDart);

  switch(selectedValue.toLowerCase()) {
    case 'python':
      workspace.addChangeListener(CodePython);
      break;
    case 'javascript':
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