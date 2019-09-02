import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "better-sushi" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.makeEverythingSushi", () => {
      const { activeTextEditor } = vscode.window;
      if (activeTextEditor !== undefined) {
        const { document } = activeTextEditor;
        const startPosition = new vscode.Position(0, 0);
        const endPosition = new vscode.Position(document.lineCount - 1, 10000);
        const selection = new vscode.Selection(startPosition, endPosition);
        const text = document.getText(selection);

        activeTextEditor.edit(edit => {
          edit.replace(
            selection,
            text.replace(/[^ -/:-@\{-~　\t\n\\🍣]/g, "🍣")
          );
        });
      }
    })
  );
}

export function deactivate() {}
