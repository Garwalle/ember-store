import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StoreSectionsController extends Controller {
    @tracked sectionId = 0;
    @tracked nbProduct;

    @action showUiModal(section) {
        this.sectionId = section.id;
        this.nbProduct = section.products.length;
        section.products.forEach(element => console.log(element.packs));
        $('#deleteModal').modal('show');
    }
}