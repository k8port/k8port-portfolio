" VSCode extensions for Vim
set smartindent
set autoindent
set tabstop=2
set shiftwidth=2
set expandtab

" Map gg=G to format document
nnoremap <silent> gg=G :call VSCodeNotify('editor.action.formatDocument')<CR>

" More concise mapping for formatting
nnoremap <silent> gq :call VSCodeNotify('editor.action.formatDocument')<CR>

" Map = operator for current line formatting
nnoremap <silent> == :call VSCodeNotify('editor.action.formatSelection')<CR>

" Map for single formatting command
nnoremap <silent> <leader>f :call VSCodeNotify('editor.action.formatDocument')<CR>

" Set leader key
let mapleader = ' ' 