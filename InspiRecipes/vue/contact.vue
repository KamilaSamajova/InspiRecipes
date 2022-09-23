// Vue component for handling the contact form input on the Contact page

let contact = new Vue({
    el: "#app",
    data() {
        return { 
            contactId: 2,
            newMail: '', 
            newMessage: '',  
            confirm: false,             
            messages: [
            { id: 0, mail: "main@mail.com", message: "Message content message content" },
            { id: 1, mail: "mail2@mail.com", message: "Message content message content" },
        ]}
    },
    methods: {
        addMail() {
            this.messages.push({ mail: this.newMail, 
                                 message: this.newMessage, 
                                 id: this.newId});
            
            this.newMail = '';
            this.newMessage = '';
            this.newId++;
            this.confirm = true;
        },
    }
});