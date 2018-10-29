let input = document.getElementsByTagName('input')[0];

    input.addEventListener('input', function() {
        let matrix = this.defaultValue;
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) val = def;
            
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
    });
        