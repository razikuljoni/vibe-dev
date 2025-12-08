const vscode = require('vscode');

/**
 * Vibe Dev Tools Extension
 * Quick commands for switching themes and icon sets
 */
function activate(context) {
  console.log('Vibe Dev Tools activated');

  // Activate File Icons
  const setFileIcons = vscode.commands.registerCommand(
    'vibe.switchFileIcons',
    async () => {
      try {
        await vscode.workspace
          .getConfiguration('workbench')
          .update('iconTheme', 'vibe-file-icons', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('✓ Vibe File Icons activated');
      } catch (err) {
        vscode.window.showErrorMessage('Error: ' + err.message);
      }
    }
  );

  // Activate Product Icons
  const setProductIcons = vscode.commands.registerCommand(
    'vibe.switchProductIcons',
    async () => {
      try {
        await vscode.workspace
          .getConfiguration('workbench')
          .update('productIconTheme', 'atomic-product-icons', vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage('✓ Atomic Product Icons activated');
      } catch (err) {
        vscode.window.showErrorMessage('Error: ' + err.message);
      }
    }
  );

  // Choose File Icon Theme
  const openFileIconPicker = vscode.commands.registerCommand(
    'vibe.chooseFileIcons',
    async () => {
      await vscode.commands.executeCommand('workbench.action.selectIconTheme');
    }
  );

  // Choose Product Icon Theme
  const openProductIconPicker = vscode.commands.registerCommand(
    'vibe.chooseProductIcons',
    async () => {
      await vscode.commands.executeCommand('workbench.action.selectProductIconTheme');
    }
  );

  context.subscriptions.push(
    setFileIcons,
    setProductIcons,
    openFileIconPicker,
    openProductIconPicker
  );
}

function deactivate() {
  console.log('Vibe Dev Tools deactivated');
}

module.exports = { activate, deactivate };
