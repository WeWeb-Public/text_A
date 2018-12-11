import section from './sectionTextA.vue'

const name = "text_A";

const addComponent = function () {
    if (window.vm) {
        window.vm.addComponent(name, section);

        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}