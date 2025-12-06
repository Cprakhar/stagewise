import * as vscode from 'vscode';

/**
 * Checks if the Lingma - Alibaba Cloud AI Coding Assistant extension is installed.
 * @returns True if the extension is installed, false otherwise.
 */
export function isLingmaInstalled(): boolean {;
  const extensionId = 'alibaba-cloud.tongyi-lingma';
  const extension = vscode.extensions.getExtension(extensionId);
  return !!extension;
}
