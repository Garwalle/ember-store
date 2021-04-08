import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StoreSectionsController extends Controller {
    @tracked sectionId = 5;

    @action showUiModal(sectionId) {
        this.sectionId = sectionId;
        $('.tiny.modal').modal('show');
    }
}