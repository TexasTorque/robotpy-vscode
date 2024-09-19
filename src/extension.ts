// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let terminal: vscode.Terminal = vscode.window.createTerminal("RobotPy");

	let sync = vscode.commands.registerCommand('robotpy.sync', () => {
		vscode.window.showInformationMessage('RobotPy Sync');

		terminal.show();
		terminal.sendText("python3 -m robotpy sync");
	});

	let deploy = vscode.commands.registerCommand('robotpy.deploy', () => {
		vscode.window.showInformationMessage('RobotPy Deploy');

		terminal.show();
		terminal.sendText("python3 -m robotpy deploy --skip-tests");
	});

	let simulate = vscode.commands.registerCommand('robotpy.simulate', () => {
		vscode.window.showInformationMessage('RobotPy Simulate');

		terminal.show();
		terminal.sendText("python3 -m robotpy sim");
	});

	context.subscriptions.push(sync);
	context.subscriptions.push(deploy);
	context.subscriptions.push(simulate);
}

// This method is called when your extension is deactivated
export function deactivate() {}
