import * as vscode from 'vscode';
import { lowerlize } from './utils';

const SUGGEST_DX = /([+-]?[0-9]+(\.[0-9]+)?)(r|R)/g;

const files = [
  'css',
  'less',
  'scss',
  'sass'
];



const provideCompletionItems = (
  document: vscode.TextDocument,
  position: vscode.Position
) => {
  let linePrefix = document.lineAt(position).text.substr(0, position.character);
  let matchedText = linePrefix.match(SUGGEST_DX) ?? [];

  if (matchedText.length <= 0) {
    return undefined;
  }

  const completionItems: vscode.CompletionItem[] = [];

  completionItems.push(
    new vscode.CompletionItem(
      lowerlize(`${matchedText[0]}px`),
      vscode.CompletionItemKind.Field
    )
  );
  return completionItems;
};




export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(files, {
      provideCompletionItems,
    })
  );
}

