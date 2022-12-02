// Marcador de m1 a m2 (ABS_01 a ABS_02)
var markerVisible = { m1: false, m2: false };
AFRAME.registerComponent('registerevents', {
    init: function () {let marker = this.el;
        this.el.addEventListener('markerFound', function() {markerVisible[ marker.id ] = true;});
        this.el.addEventListener('markerLost', function() {markerVisible[ marker.id ] = false;});}
});
AFRAME.registerComponent('newposition', {
    dependencies: ['line'],
    init: function () {
        this.m1 = document.querySelector("#m1"); this.m2 = document.querySelector("#m2");
        this.el.setAttribute('line', {start: {x:0,y:0,z:0}, end: {x:0,y:0,z:0}, color: 'red', visible: false});
    },
    tick: function (time, timeDelta) {
        if(markerVisible["m1"] && markerVisible["m2"]){
            let p0 = new THREE.Vector3();
            let p1 = new THREE.Vector3();
            this.m1.object3D.getWorldPosition(p0);
            this.m2.object3D.getWorldPosition(p1);
            this.el.setAttribute('line', 'start', p0);
            this.el.setAttribute('line', 'end', p1);
            this.el.setAttribute('line', 'visible', true);
        }else{this.el.setAttribute('line', 'visible', false);}
    },
});