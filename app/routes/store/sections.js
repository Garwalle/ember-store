import AbstractRouteRoute from "../abstract-route";
import { action } from '@ember/object';
import RSVP from 'rsvp';


export default class StoreSectionRoute extends AbstractRouteRoute {
    model() {
        if (this.userAuth.user) {
            let employeeLogged = this.userAuth.user;
            return RSVP.hash({
                connected: employeeLogged,
                sections: this.store.findAll('section', { include: 'products' }),
            });
        }
    }

    @action scrollToTitle() {
        document.getElementById("sectionTitle").scrollIntoView({ behavior: 'smooth' });
    }


    @action addStock(sections) {
        let stockToAdd = document.getElementById("stockToAdd").value;
        
        sections.forEach(section => {
            section.products.forEach(product => {
                if (document.getElementById(product.id).checked) {
                    this.store.findRecord('product', product.id).then(function (product) {
                        product.stock =  product.stock + stockToAdd;
                        product.save();
                    });
                    this.transitionTo('store.sections');
                }
            });
        });
    }
}