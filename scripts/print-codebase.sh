#! /bin/sh

for FILE in slides.md components/*
do
    echo "File ${FILE}:"
    echo '```'
    cat -- "$FILE"
    echo '```'
done
