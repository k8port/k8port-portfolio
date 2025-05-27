#!/bin/bash

# Create subdirectory png_files if it doesn't exist
mkdir -p public/images/icons/png_files

# iterate through all svg files in public/images/icons
for svg_file in public/images/icons/*.svg; do
    # Check if file exists and is regular
    if [ -f '$svg_file' ]; then
        # Extract filaname without extension
        filename=$(basename '$svg_file' .svg)

        # Convert svg to .png and save in png_files directory
        inkscape 'public/images/icons/png_files/${filename}.png' -w 100 -h 100 '$svg_file'
        echo 'Converted $svg_file to png_files/${filename}.png'
    fi
done

echo 'All SVG files have been converted to PNG format.'