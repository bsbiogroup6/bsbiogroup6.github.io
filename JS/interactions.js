// Get the button 
const modelViewer = document.querySelector('#dimension-show');
const Button = modelViewer.querySelectorAll("button");
console.log(Button);
const Adenine = Button[0];
const Uracil = Button[1];
const Guanine = Button[2];
const Cytosine = Button[3];
const RNA = Button[4];
const Nucleobases = Button[5];
const Neclueotides = Button[6];
const Backbone = Button[7];
const illustration_header = document.querySelector('.illustration_header');
const description_label = document.querySelector('.description_label');
const main_text = document.querySelector('.main_text');
const illustration = document.querySelector('.illustration');
var style = getComputedStyle(document.body);
var colors= {
    "NP" : [style.getPropertyValue('--normal-primary'),style.getPropertyValue('--normal-secondary')],
    "AP" : [style.getPropertyValue('--adenine-primary'),style.getPropertyValue('--adenine-secondary')],
    "UP" : [style.getPropertyValue('--uracil-primary'),style.getPropertyValue('--uracil-secondary')],
    "GP" : [style.getPropertyValue('--guanine-primary'),style.getPropertyValue('--guanine-secondary')],
    "CP" : [style.getPropertyValue('--cytosine-primary'),style.getPropertyValue('--cytosine-secondary')],

};
//console.log(colors);

function change_color(color){
    illustration_header.style.background = colors[color][0];
    // illustration.style.borderColor = colors[color][0];
    description_label.style.background = colors[color][0];
    description_label.style.borderColor = colors[color][0];
    main_text.style.background = colors[color][0];
    main_text.style.borderColor = colors[color][1];
}

const annotationClicked = (annotation) => {
    let dataset = annotation.dataset;
    modelViewer.cameraTarget = dataset.target;
    modelViewer.cameraOrbit = dataset.orbit;
    modelViewer.fieldOfView = "30deg";
   
}
  
function needhelp(){
    orbit = modelViewer.getCameraOrbit()
    target = modelViewer.getCameraTarget()
    fov = modelViewer.getFieldOfView()
    console.log('data-orbit="'+orbit['theta']+'rad '+orbit['phi']+'rad '+orbit['radius']+'m" data-target="'+target['x']+'m '+target['y']+'m '+target['z']+'m"');
    //console.log('data-target="'+target['x']+'m '+target['y']+'m '+target['z']+'m"');
    console.log('data-fov="'+fov+'deg"');
}

modelViewer.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => annotationClicked(hotspot));
  });
// Add a click event listener to the button
//if pressed on hotspot, change description, image, label
Adenine.addEventListener('click', () => {
    // Print a message in the console
    change_color("AP");
    $('.jselect').hide();
    $('.adenine_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    //console.log('Show adenine information');
});

Uracil.addEventListener('click', () => {
    // Print a message in the console
    change_color("UP");
    $('.jselect').hide();
    $('.uracil_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    //console.log('Show uracil information');
});
Guanine.addEventListener('click', () => {
    // Print a message in the console
    change_color("GP");
    $('.jselect').hide();
    $('.guanine_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    //console.log('Show guanine information');
});
Cytosine.addEventListener('click', () => {
    // Print a message in the console
    change_color("CP");
    $('.jselect').hide();
    $('.cytosine_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    //console.log('Show cytosine information');
});
RNA.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.jselect').hide();
    $('.rna_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    //console.log('Show rna information');
});
Nucleobases.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.jselect').hide();
    $('.nucleobases_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    ///console.log('Show nucleobases information');
});
Neclueotides.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.jselect').hide();
    $('.nucleotide_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    //console.log('Show nucleotides information');
});

Backbone.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.jselect').hide();
    $('.backbone_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    //console.log('Show backbone information');
});

