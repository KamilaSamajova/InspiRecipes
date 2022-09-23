// Vue component for handling topics and posts on the FAQ page

let faq = new Vue({
    el: "#container",
    data() {
        return {
            posts: [
                { topicId: 0,
                  topic: "Topic 1", 
                  newId: 5,
                  newName: '',
                  newMessage: '',                  
                  messages: [
                    { id: 0, name: "admin", message: "Message content message content" },
                    { id: 1, name: "user1", message: "Message content message content" },
                    { id: 2, name: "admin", message: "Message content message content" },
                    { id: 3, name: "user1", message: "Message content message content" },
                    { id: 4, name: "user2", message: "Message content message content" },
                ]},
                { topicId: 1,
                  topic: "Topic 2", 
                  newId: 7,
                  newName: '',
                  newMessage: '',                  
                  messages: [
                    { id: 0, name: "admin", message: "Message content message content" },
                    { id: 1, name: "user1", message: "Message content message content" },
                    { id: 2, name: "user2", message: "Message content message content" },
                    { id: 3, name: "user3", message: "Message content message content" },
                    { id: 4, name: "user1", message: "Message content message content" },
                    { id: 5, name: "admin", message: "Message content message content" },
                    { id: 6, name: "user3", message: "Message content message content" },
                ]},
                { topicId: 2,
                  topic: "Topic 3", 
                  newId: 3,
                  newName: '',
                  newMessage: '',
                  messages: [
                    { id: 0, name: "admin", message: "Message content message content" },
                    { id: 1, name: "user3", message: "Message content message content" },
                    { id: 2, name: "user2", message: "Message content message content" },
                ]}
            ],
        }
    },
    methods: {
        addComment(topic) {
            this.posts[topic].messages.push({ name: this.posts[topic].newName, 
                                message: this.posts[topic].newMessage, 
                                id: this.posts[topic].newId});
            
            this.posts[topic].newName = '';
            this.posts[topic].newMessage = '';
            this.posts[topic].newId++;
        },
    }
});