var Spinner = {
    SPINNER_ID: '_spinner',
    prefix: (navigator.userAgent.indexOf('WebKit') != -1) ? 'webkit' : 'moz',
    getSpinner: function(size, numberOfBars, color) {
        if (document.getElementById(this.SPINNER_ID) == null) {
            var style = document.createElement('style');
            style.setAttribute('id', this.SPINNER_ID);
            style.innerHTML = '@-'+this.prefix+'-keyframes fade {from {opacity: 1;} to {opacity: 0.25;}}';
            document.getElementsByTagName('head')[0].appendChild(style);
        }
        var spinner = document.createElement('div');
        spinner.style.width = size;
        spinner.style.height = size;
        // spinner.style.position = 'relative';
        spinner.className = 'new-meme-box';
        var rotation = 0;
        var rotateBy = 360 / numberOfBars;
        var animationDelay = 0;
        var frameRate = 1 / numberOfBars;
        for (var i = 0; i < numberOfBars; ++i) {
            var bar = document.createElement('div');
            spinner.appendChild(bar);
            bar.style.width = '12%';
            bar.style.height = '26%';
            bar.style.background = color;
            bar.style.position = 'absolute';
            bar.style.left = '44.5%';
            bar.style.top = '37%';
            bar.style.opacity = '1';
            bar.style.setProperty('-'+this.prefix+'-border-radius', '50px', null);
            bar.style.setProperty('-'+this.prefix+'-box-shadow', '0 0 3px rgba(0,0,0,0.2)', null);
            bar.style.setProperty('-'+this.prefix+'-animation', 'fade 1s linear infinite', null);
            bar.style.setProperty('-'+this.prefix+'-transform', 'rotate('+rotation+'deg) translate(0, -142%)', null);
            bar.style.setProperty('-'+this.prefix+'-animation-delay', animationDelay + 's', null);
            rotation += rotateBy;
            animationDelay -= frameRate;
        }
        return spinner;
    }
}
