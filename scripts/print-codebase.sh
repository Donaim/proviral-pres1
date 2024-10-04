#! /bin/sh

for FILE in slides.md README.md components/*
do
    echo "File ${FILE}:"
    echo '```'
    cat -- "$FILE"
    echo '```'
done
