import * as vscode from 'vscode';

export async function callLingmaAgent(request: {
  prompt: string;
  files: string[];
  images: string[];
}): Promise<void> {
  const prompt = `${request.prompt}`;

  // TODO: Implement the logic to call the Lingma agent with the provided prompt, files, and images.
  vscode.window.showInformationMessage(`Lingma agent called with prompt: ${prompt}`);
}
