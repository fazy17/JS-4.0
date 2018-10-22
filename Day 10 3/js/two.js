    class options {
        constructor(height = '100', width = '100', bg = 'red', fontSize = '12', textAlign = '24') {
            this.height = height + 'px';
            this.width = width + 'px';
            this.bg = bg;
            this.fontSize = fontSize + 'px';
            this.textAlign = textAlign;
        }

        createNewDiv(text) {
            let div = document.createElement('div');

            div.textContent = text;

            div.style.cssText = `
                height: ${this.height};
                width: ${this.width};
                background: ${this.bg};
                fontSize: ${this.fontSize};
                textAlign: ${this.textAlign};`

            document.body.appendChild(div);    
        }

    }
    let newElem = new options(); 
    newElem.createNewDiv('123');