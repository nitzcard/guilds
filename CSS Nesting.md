https://developer.chrome.com/articles/css-nesting/ 
https://developer.chrome.com/articles/css-nesting/#understanding-the-nesting-parser 
https://www.w3.org/TR/css-nesting-1/#nesting  
### almost same as scss, except those cases: 

1. `&<space>` operator inside nesting, do not confuse with regular `&`.
2. `&<space>` is a reference (not a string!) to the parent selector, is can be used in different order (before/after selector)
3. The operator is being put automatically in compilation, we can see the translation in the browser :) 

### when you explicitly have to use . `&<space>`  ?
![& @ : . > ~ + # [ *. Nested selector starts with one of these symbols?   If yes, it is valid. If not, it is invalid.](https://wd.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/wgW0MQEoQDmjlZUj5fJ0.png?auto=format)


So, when it's an HTML element. 


## :has() operator - if parent has some child, affect the parent 

