#! zsh

convert product-left-@1x.jpg -background Gold -pointsize 25 label:'@1x' -gravity Center -append product-left-label-@1x.jpg
convert product-left-@2x.jpg -background Gold -pointsize 50 label:'@2x' -gravity Center -append product-left-label-@2x.jpg
convert product-left-@3x.jpg -background Gold -pointsize 75 label:'@3x' -gravity Center -append product-left-label-@3x.jpg

convert product-center-@1x.jpg -background Gold -pointsize 25 label:'@1x' -gravity Center -append product-center-label-@1x.jpg
convert product-center-@2x.jpg -background Gold -pointsize 50 label:'@2x' -gravity Center -append product-center-label-@2x.jpg
convert product-center-@3x.jpg -background Gold -pointsize 75 label:'@3x' -gravity Center -append product-center-label-@3x.jpg

convert product-right-@1x.jpg -background Gold -pointsize 25 label:'@1x' -gravity Center -append product-right-label-@1x.jpg
convert product-right-@2x.jpg -background Gold -pointsize 50 label:'@2x' -gravity Center -append product-right-label-@2x.jpg
convert product-right-@3x.jpg -background Gold -pointsize 75 label:'@3x' -gravity Center -append product-right-label-@3x.jpg