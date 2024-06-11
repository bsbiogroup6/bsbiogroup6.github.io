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
const Credit_btn = document.querySelector('.credit_btn');
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
    hotspot.addEventListener('click', () => {
        annotationClicked(hotspot);
        $('.description_label').show();
        $('.credit_label').hide();
        $('.jselect').hide();
        $('.info_panel').animate({scrollTop:0}, 'fast');
    });
  });
// Add a click event listener to the button
//if pressed on hotspot, change description, image, label
Adenine.addEventListener('click', () => {
    // Print a message in the console
    change_color("AP");
    
    $('.adenine_text').show();
    //console.log('Show adenine information');
});

Uracil.addEventListener('click', () => {
    // Print a message in the console
    change_color("UP");

    $('.uracil_text').show();
    //console.log('Show uracil information');
});
Guanine.addEventListener('click', () => {
    // Print a message in the console
    change_color("GP");
    $('.guanine_text').show();
    //console.log('Show guanine information');
});
Cytosine.addEventListener('click', () => {
    // Print a message in the console
    change_color("CP");
    $('.cytosine_text').show();
    //console.log('Show cytosine information');
});
RNA.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.rna_text').show();
    //console.log('Show rna information');
});
Nucleobases.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.nucleobases_text').show();
    ///console.log('Show nucleobases information');
});
Neclueotides.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.nucleotide_text').show();
    //console.log('Show nucleotides information');
});

Backbone.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.backbone_text').show();
    //console.log('Show backbone information');
});

Credit_btn.addEventListener('click', () => {
    // Print a message in the console
    change_color("NP");
    $('.jselect').hide();
    $('.description_label').hide();
    $('.credit_label').css('display','flex');
    $('.credit_text').show();
    $('.info_panel').animate({scrollTop:0}, 'fast');
    console.log('Show credit');
});
