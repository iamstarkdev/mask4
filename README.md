# ng-mask4

Este modulo angular serve para adicionar máscaras à campos do tipo **input**.

## Exemplo
```javascript
    var module = angular.module('app', ['mask4']);

    module.config(function($provide){
        $provide.factory('myMask', function(){
            return function(value){
                return value.split('').join('.'); 
            }
        });
    });
```

```html
    <input type="text" mask4="cpf"> 
```

Digitando um valor como **100** no campo  input,  a diretiva formatará este mesmo valor para **1.0.0**.

**MIT**