public with sharing class LeadsController {
    public LeadsController() {

    }

    @AuraEnabled(cacheable=true)
    public static Lead[] getAllLeads(){
        Lead[] leads = [SELECT Name, Company, Email, Phone, Status 
                            FROM Lead 
                            WITH SECURITY_ENFORCED 
                            ORDER BY Name];
        
        return leads;
    }

    @AuraEnabled(cacheable=true)
    public static Lead[] getOpenNotContactedLeads() {
        Lead[] leads = [SELECT Name, Company, Email, Phone, Status 
                            FROM Lead 
                            WHERE Status = 'Open - Not Contacted'
                            WITH SECURITY_ENFORCED 
                            ORDER BY Name];
        
        return leads;
    }

    @AuraEnabled(cacheable=true)
    public static Lead[] getWorkingContactedLeads() {
        Lead[] leads = [SELECT Name, Company, Email, Phone, Status 
                            FROM Lead 
                            WHERE Status = 'Working - Contacted'
                            WITH SECURITY_ENFORCED 
                            ORDER BY Name];
        
        return leads;
    }

    @AuraEnabled(cacheable=true)
    public static Lead[] getClosedConvertedLeads() {
        Lead[] leads = [SELECT Name, Company, Email, Phone, Status 
                            FROM Lead 
                            WHERE Status = 'Closed - Converted'
                            WITH SECURITY_ENFORCED 
                            ORDER BY Name];
        
        return leads;
    }

    @AuraEnabled(cacheable=true)
    public static Lead[] getClosedNotConvertedLeads() {
        Lead[] leads = [SELECT Name, Company, Email, Phone, Status 
                            FROM Lead 
                            WHERE Status = 'Closed - Not Converted'
                            WITH SECURITY_ENFORCED 
                            ORDER BY Name];
        
        return leads;
    }
}
