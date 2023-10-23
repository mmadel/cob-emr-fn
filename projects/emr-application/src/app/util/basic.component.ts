import { NgForm } from "@angular/forms";

export class BasicComponent {
    form: NgForm;
    protected setForm(form: NgForm) {
        this.form = form;
    }
    public isValid(): boolean {
        return this.form.valid === null ? false : this.form.valid;
    }

    public getInvalidControls() {
        const invalid = [];
        const controls = this.form.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        return invalid;
    }

    public resetForm() {
        this.form.reset();
    }
}