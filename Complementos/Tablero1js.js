// Linea Marcador de m1 a m2 (ABS_A a ABS_01)
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
        this.el.setAttribute('line', {start: {x:0,y:0,z:0},end: {x:0,y:0,z:0},color: 'red',visible: false});
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
// Linea 02 Marcador de m3 a m4 (ABS_02 a ABS_06)
var markerVisible02 = { m3: false, m4: false };
AFRAME.registerComponent('registerevents', {
    init: function () {let marker = this.el;
        this.el.addEventListener('markerFound', function() {markerVisible02[ marker.id ] = true;});
        this.el.addEventListener('markerLost', function() {markerVisible02[ marker.id ] = false;});}
});
AFRAME.registerComponent('newposition02', {
    dependencies: ['line__02'],
    init: function () {
        this.m3 = document.querySelector("#m3"); this.m4 = document.querySelector("#m4");
        this.el.setAttribute('line__02', {start: {x:0,y:0,z:0},end: {x:0,y:0,z:0},color: 'red',visible: false});
    },
    tick: function (time, timeDelta) {
        if(markerVisible02["m3"] && markerVisible02["m4"]){
            let p0 = new THREE.Vector3();
            let p1 = new THREE.Vector3();
            this.m3.object3D.getWorldPosition(p0);
            this.m4.object3D.getWorldPosition(p1);
            this.el.setAttribute('line__02', 'start', p0);
            this.el.setAttribute('line__02', 'end', p1);
            this.el.setAttribute('line__02', 'visible', true);
        }else{this.el.setAttribute('line__02', 'visible', false);}
    },
});
// Linea 03 Marcador de m4 a m5 (ABS_06 a ABS_07)
var markerVisible03 = { m4: false, m5: false };
AFRAME.registerComponent('registerevents', {
    init: function () {let marker = this.el;
        this.el.addEventListener('markerFound', function() {markerVisible03[ marker.id ] = true;});
        this.el.addEventListener('markerLost', function() {markerVisible03[ marker.id ] = false;});}
});
AFRAME.registerComponent('newposition03', {
    dependencies: ['line__03'],
    init: function () {
        this.m4 = document.querySelector("#m4"); this.m5 = document.querySelector("#m5");
        this.el.setAttribute('line__03', {start: {x:0,y:0,z:0},end: {x:0,y:0,z:0},color: 'red',visible: false});
    },
    tick: function (time, timeDelta) {
        if(markerVisible03["m4"] && markerVisible03["m5"]){
            let p0 = new THREE.Vector3();
            let p1 = new THREE.Vector3();
            this.m4.object3D.getWorldPosition(p0);
            this.m5.object3D.getWorldPosition(p1);
            this.el.setAttribute('line__03', 'start', p0);
            this.el.setAttribute('line__03', 'end', p1);
            this.el.setAttribute('line__03', 'visible', true);
        }else{this.el.setAttribute('line__03', 'visible', false);}
    },
});
// Linea 04 Marcador de m5 a m6 (ABS_07 a ABS_08)
var markerVisible04 = { m5: false, m6: false };
AFRAME.registerComponent('registerevents', {
    init: function () {let marker = this.el;
        this.el.addEventListener('markerFound', function() {markerVisible04[ marker.id ] = true;});
        this.el.addEventListener('markerLost', function() {markerVisible04[ marker.id ] = false;});}
});
AFRAME.registerComponent('newposition04', {
    dependencies: ['line__04'],
    init: function () {
        this.m5 = document.querySelector("#m5"); this.m6 = document.querySelector("#m6");
        this.el.setAttribute('line__04', {start: {x:0,y:0,z:0},end: {x:0,y:0,z:0},color: 'red',visible: false});
    },
    tick: function (time, timeDelta) {
        if(markerVisible04["m4"] && markerVisible04["m5"]){
            let p0 = new THREE.Vector3();
            let p1 = new THREE.Vector3();
            this.m5.object3D.getWorldPosition(p0);
            this.m6.object3D.getWorldPosition(p1);
            this.el.setAttribute('line__04', 'start', p0);
            this.el.setAttribute('line__04', 'end', p1);
            this.el.setAttribute('line__04', 'visible', true);
        }else{this.el.setAttribute('line__04', 'visible', false);}
    },
});
// Linea 05 Marcador de m7 a m8 (ABS_12 a ABS_13)
var markerVisible05 = { m7: false, m8: false };
AFRAME.registerComponent('registerevents', {
    init: function () {let marker = this.el;
        this.el.addEventListener('markerFound', function() {markerVisible05[ marker.id ] = true;});
        this.el.addEventListener('markerLost', function() {markerVisible05[ marker.id ] = false;});}
});
AFRAME.registerComponent('newposition05', {
    dependencies: ['line__05'],
    init: function () {
        this.m7 = document.querySelector("#m7"); this.m8 = document.querySelector("#m8");
        this.el.setAttribute('line__05', {start: {x:0,y:0,z:0},end: {x:0,y:0,z:0},color: 'red',visible: false});
    },
    tick: function (time, timeDelta) {
        if(markerVisible05["m7"] && markerVisible05["m8"]){
            let p0 = new THREE.Vector3();
            let p1 = new THREE.Vector3();
            this.m7.object3D.getWorldPosition(p0);
            this.m8.object3D.getWorldPosition(p1);
            this.el.setAttribute('line__05', 'start', p0);
            this.el.setAttribute('line__05', 'end', p1);
            this.el.setAttribute('line__05', 'visible', true);
        }else{this.el.setAttribute('line__05', 'visible', false);}
    },
});
// Linea 06 Marcador de m9 a m10 (ABS_14 a ABS_19)
var markerVisible06 = { m9: false, m10: false };
AFRAME.registerComponent('registerevents', {
    init: function () {let marker = this.el;
        this.el.addEventListener('markerFound', function() {markerVisible06[ marker.id ] = true;});
        this.el.addEventListener('markerLost', function() {markerVisible06[ marker.id ] = false;});}
});
AFRAME.registerComponent('newposition06', {
    dependencies: ['line__06'],
    init: function () {
        this.m9 = document.querySelector("#m9"); this.m10 = document.querySelector("#m10");
        this.el.setAttribute('line__06', {start: {x:0,y:0,z:0},end: {x:0,y:0,z:0},color: 'red',visible: false});
    },
    tick: function (time, timeDelta) {
        if(markerVisible06["m9"] && markerVisible06["m10"]){
            let p0 = new THREE.Vector3();
            let p1 = new THREE.Vector3();
            this.m9.object3D.getWorldPosition(p0);
            this.m10.object3D.getWorldPosition(p1);
            this.el.setAttribute('line__06', 'start', p0);
            this.el.setAttribute('line__06', 'end', p1);
            this.el.setAttribute('line__06', 'visible', true);
        }else{this.el.setAttribute('line__06', 'visible', false);}
    },
});
// Linea 07 Marcador de m10 a m11 (ABS_19 a ABS_B)
var markerVisible07 = { m10: false, m11: false };
AFRAME.registerComponent('registerevents', {
    init: function () {let marker = this.el;
        this.el.addEventListener('markerFound', function() {markerVisible07[ marker.id ] = true;});
        this.el.addEventListener('markerLost', function() {markerVisible07[ marker.id ] = false;});}
});
AFRAME.registerComponent('newposition07', {
    dependencies: ['line__07'],
    init: function () {
        this.m10 = document.querySelector("#m10"); this.m11 = document.querySelector("#m11");
        this.el.setAttribute('line__07', {start: {x:0,y:0,z:0},end: {x:0,y:0,z:0},color: 'red',visible: false});
    },
    tick: function (time, timeDelta) {
        if(markerVisible07["m10"] && markerVisible07["m11"]){
            let p0 = new THREE.Vector3();
            let p1 = new THREE.Vector3();
            this.m10.object3D.getWorldPosition(p0);
            this.m11.object3D.getWorldPosition(p1);
            this.el.setAttribute('line__07', 'start', p0);
            this.el.setAttribute('line__07', 'end', p1);
            this.el.setAttribute('line__07', 'visible', true);
        }else{this.el.setAttribute('line__07', 'visible', false);}
    },
});