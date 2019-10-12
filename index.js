var main_text = {
    text: "Anirudh Nagasamudra",
    index: 0,
    chars: 0,
    speed: 75,
    container: 'main_text',
    init: function() {
        this.chars = this.text.length - 1;
        return this.write();
    },
    write: function() {
        document.getElementsByClassName(this.container)[0].innerHTML += this.text[this.index];
        if (this.index < this.chars) {
            this.index++;
            return setTimeout(function() {
                return main_text.write();
            }, this.speed);
        }
    }
};
main_text.init();
