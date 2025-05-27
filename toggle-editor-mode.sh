#!/bin/bash

# Directory of this script
DIR='$( cd '$( dirname '${BASH_SOURCE[0]}' )' && pwd )'
VSCODE_SETTINGS='$DIR/.vscode/settings.json'
CURSOR_SETTINGS='$DIR/.cursor.json'

# Check which mode is currently active
if grep -q ''vim.enabled': false' '$VSCODE_SETTINGS'; then
  # Currently in IntelliJ mode, switch to Vim mode
  echo 'Switching to Vim mode...'
  
  # Update VS Code settings
  sed -i '' 's/'vim.enabled': false/\/\/ 'vim.enabled': false/' '$VSCODE_SETTINGS'
  sed -i '' 's/\/\* *$/\/\//' '$VSCODE_SETTINGS'
  sed -i '' 's/^ *\*\//\/\//' '$VSCODE_SETTINGS'
  
  # Update Cursor settings
  sed -i '' 's/'enabled': false/'enabled': true/' '$CURSOR_SETTINGS'
  
  echo 'Vim mode enabled. Please restart Cursor for changes to take effect.'
else
  # Currently in Vim mode, switch to IntelliJ mode
  echo 'Switching to IntelliJ mode...'
  
  # Update VS Code settings
  sed -i '' 's/\/\/ *'vim.enabled': false/'vim.enabled': false/' '$VSCODE_SETTINGS'
  sed -i '' 's/\/\/\/\* */\/\*/' '$VSCODE_SETTINGS'
  sed -i '' 's/\/\/\*\//\*\//' '$VSCODE_SETTINGS'
  
  # Update Cursor settings
  sed -i '' 's/'enabled': true/'enabled': false/' '$CURSOR_SETTINGS'
  
  echo 'IntelliJ mode enabled. Please restart Cursor for changes to take effect.'
fi 