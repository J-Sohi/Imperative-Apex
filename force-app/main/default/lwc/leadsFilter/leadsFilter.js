import { track, LightningElement } from 'lwc';
import getAllLeads from '@salesforce/apex/LeadsController.getAllLeads';
import getOpenNotContactedLeads from '@salesforce/apex/LeadsController.getOpenNotContactedLeads';
import getWorkingContactedLeads from '@salesforce/apex/LeadsController.getWorkingContactedLeads';
import getClosedConvertedLeads from '@salesforce/apex/LeadsController.getClosedConvertedLeads';
import getClosedNotConvertedLeads from '@salesforce/apex/LeadsController.getClosedNotConvertedLeads';

const COLUMNS = [
	{ label: 'Name', fieldName: 'Name' },
	{ label: 'Company', fieldName: 'Company' },
	{ label: 'Email', fieldName: 'Email', type: 'Email' },
	{ label: 'Phone', fieldName: 'Phone', type: 'Phone' },
	{ label: 'Status', fieldName: 'Status', type: 'Picklist' },
];

export default class LeadsFilter extends LightningElement {
	columns = COLUMNS;
	@track leads;
	@track error;

	//TODO 6: Create an event handler for each Apex method
	handleAllLeads() {
        getAllLeads()
            .then(result => {
                this.leads = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

	handleOpenNotContactedLeads() {
        getOpenNotContactedLeads()
            .then(result => {
                this.leads = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

	handleWorkingContactedLeads() {
        getWorkingContactedLeads()
            .then(result => {
                this.leads = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

	handleClosedConvertedLeads() {
        getClosedConvertedLeads()
            .then(result => {
                this.leads = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

	handleClosedNotConvertedLeads() {
        getClosedNotConvertedLeads()
            .then(result => {
                this.leads = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}