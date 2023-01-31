sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("day5exercise1gundaya.controller.MainView", {
            onInit: function () {
                this.oResourceModel = this.getOwnerComponent().getModel("i18n").getResourceBundle()
            },
            onSend: function () {
                var oView = this.getView();
                 var sName = oView.byId("NameInput").getValue();
                 var sSurname = oView.byId("SurnameInput").getValue();
                 var sAge = oView.byId("AgeInput").getValue();
                 var oTech = oView.byId("TechInput");
                 
 
                 console.log(oView);
                 console.log(sName);
                 console.log(sSurname);
                 console.log(sAge);
                 console.log(oTech);
                 MessageToast.show("Your name is " + sName + ", your surname is " + sSurname + ", your age is " + sAge + ", your oTech is " + oTech.getSelectedKey());
            }
        });
    });