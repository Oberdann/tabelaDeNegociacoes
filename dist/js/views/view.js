export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        let elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM, verifique.}`);
        }
        if (escapar)
            this.escapar = false;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = this.template(model);
    }
    ;
}
